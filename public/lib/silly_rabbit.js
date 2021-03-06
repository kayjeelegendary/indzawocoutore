import Rabbit from './rabbit';
import SpriteSheet from './spriteSheet';
import Carrot from './carrot';
import Background from './background';

let stage, width, height, loader, muteButton;
let messageField, storyField, scoreField, directionField, score;
let loadingInterval = 0;
let gameStart = false;
let bg, carrot, rabbit;
let carrots = [];
let gotHit = false;
let mute = false;

document.addEventListener('DOMContentLoaded', () => {
  muteButton = document.getElementById('mute');
  const canvas = document.getElementById('canvas');
  canvas.style.backgroundColor = "#f9f9f7";
  stage = new createjs.Stage("canvas");

  width = stage.canvas.width;
  height = stage.canvas.height;

  messageField = new createjs.Text("Loading", "38px Indie Flower", "black");
  messageField.maxWidth = 1000;
  messageField.textAlign = "center";
  messageField.textBaseline = "middle";
  messageField.x = width/2;
  messageField.y = 100;

  storyField = new createjs.Text("", "24px Indie Flower", "grey");
  storyField.maxWidth = 1000;
  storyField.textAlign = "center";
  storyField.textBaseline = "middle";
  storyField.lineHeight = 30;
  storyField.x = width/2;
  storyField.y = 170;
  stage.addChild(messageField);
  stage.update();

  directionField = new createjs.Text("Press SPACE to jump!", "38px Indie Flower", "black");
  directionField.textAlign = "center";
  directionField.x = width / 2;
  directionField.y = 100;

  const manifest = [
    {src: "sounds/jump.ogg", id: "jump"},
    {src: "sounds/music.ogg", id: "music"},
    {src: "images/background.png", id: "bg"},
    {src: "images/grass.png", id: "grass"},
    {src: "images/bush.png", id: "bush"},
    {src: "images/ground.png", id: "ground"},
    {src: "images/cereal.png", id: "cereal"},
    {src: "images/carrot.png", id: "carrot"},
    {src: "images/rabbit.png", id: "rabbit"}
  ]

  loader = new createjs.LoadQueue(false);
  loader.installPlugin(createjs.Sound);
  loader.addEventListener("complete", doneLoading);
  loader.addEventListener("progress", updateLoading);
  loader.loadManifest(manifest, true, "./assets/");
  muteButton.addEventListener('click', toggleMute);
  muteButton.addEventListener('keydown', toggleMute);
});

const toggleMute = (e) => {
  e.preventDefault();
  if (e.keyCode >= 0) {
    return;
  }
  if (mute) {
    mute = false;
    createjs.Sound.muted = false;
    muteButton.className = "";
  } else {
    mute = true;
    createjs.Sound.muted = true;
    muteButton.className = "unmute";
  }
}

const updateLoading = () => {
  messageField.text = "Loading " + (loader.progress * 100 | 0) + "%";
  stage.update();
}

const doneLoading = () => {
  clearInterval(loadingInterval);
  scoreField = new createjs.Text("0", "bold 18px sans-serif", "black");
  scoreField.textAlign = "right";
  scoreField.x = width - 20;
  scoreField.y = 20;
  scoreField.maxWidth = 1000;


  createjs.Sound.play("music", { loop: -1, volume: 0.02});

  watchForRestart();
}

const watchForRestart = () => {
  if (carrots.length > 0) {
    for(let i = 0; i < 3; i ++) {
      carrots[i].removeFromStage();
    }
  }
  score = 0;
  stage.addChild(messageField);
  if (!gameStart) {
    stage.addChild(storyField);
  }
  stage.update();
  canvas.onclick = handleClick;
}

const handleClick = () => {
  canvas.onclick = null;

  stage.removeChild(messageField, storyField);
  restart();
}

const restart = () => {
  score = 0;
  gotHit = false;
  carrots = [];
  scoreField.text = score.toString();
  stage.addChild(scoreField);
  start();
}

const start = () => {
  const groundImg = loader.getResult("ground");
  bg = new Background(stage, loader, groundImg);

  const carrotImg = loader.getResult("carrot");
  const y = height - carrotImg.height - groundImg.height + 50;
  for(let i = 0; i < 3; i++){
    let x = Math.random() * width + (width * (i + 1))/3 + width;
    carrot = new Carrot(stage, carrotImg, x, y);
    carrots.push(carrot);
  }

  rabbit = new Rabbit(SpriteSheet(loader.getResult("rabbit")));

  stage.addChild(bg.back, bg.bush, bg.grass)
  for(let i = 0; i < 3; i ++) {
    carrots[i].addToStage();
  }
  stage.addChild(bg.ground, bg.cereal, rabbit.hitBox, rabbit.body, scoreField);

  if (!gameStart) {
    stage.addChild(directionField);
    setTimeout((removeDirection), 1500);
  }

  gameStart = true;

  if (createjs.Ticker.hasEventListener("tick")) {
    createjs.Ticker.timingMode = createjs.Ticker.RAF;
    createjs.Ticker.addEventListener("tick", handleTick);
   }

  document.addEventListener("keydown", handleJump);
}

const removeDirection = () => {
  stage.removeChild(directionField);
}

const handleTick = e => {
  e.preventDefault();
  const deltaS = e.delta / 1000;
  bg.move(deltaS);

  for(let i = 0; i < 3; i++) {
    carrot = carrots[i];
    carrot.move(deltaS, i);
  }

  score += 1;
  scoreField.text = score.toString();

  for (let i = 0; i < 3; i++) {
    let pt = carrots[i].hitBox.localToLocal(45, 290, rabbit.hitBox);
    if (rabbit.hitBox.hitTest(pt.x, pt.y) && !gotHit) {
      rabbit.body.gotoAndPlay("faint");
      gotHit = true;
      setTimeout(onFaint, 950);
    }
  }
  stage.update(e);
}

const onFaint = e => {
  stage.removeChild(rabbit.body, scoreField);
  stage.update(e)
  messageField.text = `Game Over! Score: ${scoreField.text}\n Click to play again`;
  stage.addChild(messageField);
  watchForRestart();
}

const handleJump = e => {
  e.preventDefault();
  if (e.keyCode === 32 && (rabbit.body.y === 310) && !gotHit) {
    createjs.Sound.play("jump", {volume: 0.025});
    rabbit.jump();
  }
}
