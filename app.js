var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();


var routes = require('./routes/index');
var users = require('./routes/users');
var todos = require('./routes/todos');
var groups = require('./routes/groups');

// load mongoose package
var mongoose = require('mongoose');

var bodyParser = require('body-parser');
// include dependencies 

var proxy = require('http-proxy-middleware');
 





var requestProxy = require('express-request-proxy');


 

// Use native Node promises
mongoose.Promise = global.Promise;

// connect to MongoDB
mongoose.connect('mongodb://localhost/todo-api')
  .then(() =>  console.log('connection succesful'))
  .catch((err) => console.error(err));

var app = express();


// proxy middleware options 

  var cookie= proxy({
    target: 'http://localhost:9906/cookie',
    changeOrigin: true,             // for vhosted sites, changes host header to match to target's host
    logLevel: 'debug'
});

var jsonPlaceholderProxy = proxy({
    target: 'http://localhost:9906/',
    changeOrigin: true,             // for vhosted sites, changes host header to match to target's host
    logLevel: 'debug'
});
var signup= proxy({
    target: 'http://localhost:9906/',
    changeOrigin: true,             // for vhosted sites, changes host header to match to target's host
    logLevel: 'debug'
});

var say = proxy({
    target: 'http://localhost:9906/',
    changeOrigin: true,             // for vhosted sites, changes host header to match to target's host
    logLevel: 'debug'
});

var newBackGroundImage = proxy({
    target: 'http://localhost:9906/',
    changeOrigin: true,             // for vhosted sites, changes host header to match to target's host
    logLevel: 'debug'
});

var sendFriendShipInvitation= proxy({
    target: 'http://localhost:9906/',
    changeOrigin: true,             // for vhosted sites, changes host header to match to target's host
    logLevel: 'debug'
});

var sendFriendShipInvitationNotification= proxy({
    target: 'http://localhost:9906/',
    changeOrigin: true,             // for vhosted sites, changes host header to match to target's host
    logLevel: 'debug'
});
var fetchfriend= proxy({
    target: 'http://localhost:9906/',
    changeOrigin: true,             // for vhosted sites, changes host header to match to target's host
    logLevel: 'debug'
});
var chatroom= proxy({
    target: 'http://localhost:9997/',
    changeOrigin: true,             // for vhosted sites, changes host header to match to target's host
    logLevel: 'debug'
});

var sendViewPage= proxy({
    target: 'http://localhost:9906/',
    changeOrigin: true,             // for vhosted sites, changes host header to match to target's host
    logLevel: 'debug'
});

var getViewPage= proxy({
    target: 'http://localhost:9906/',
    changeOrigin: true,             // for vhosted sites, changes host header to match to target's host
    logLevel: 'debug'
});

var getFriendShipPage= proxy({
    target: 'http://localhost:9906/',
    changeOrigin: true,             // for vhosted sites, changes host header to match to target's host
    logLevel: 'debug'
});


var getviewpageFriendShip= proxy({
    target: 'http://localhost:9906/',
    changeOrigin: true,             // for vhosted sites, changes host header to match to target's host
    logLevel: 'debug'
});
var AcceptFriendShip= proxy({
    target: 'http://localhost:9906/',
    changeOrigin: true,             // for vhosted sites, changes host header to match to target's host
    logLevel: 'debug'
});

  var AcceptedNotification= proxy({
    target: 'http://localhost:9906/',
    changeOrigin: true,             // for vhosted sites, changes host header to match to target's host
    logLevel: 'debug'
});
  var SendPost= proxy({
    target: 'http://localhost:9906/',
    changeOrigin: true,             // for vhosted sites, changes host header to match to target's host
    logLevel: 'debug'
});
  var getPost= proxy({
    target: 'http://localhost:9906/',
    changeOrigin: true,             // for vhosted sites, changes host header to match to target's host
    logLevel: 'debug'
});

var getallPostsfromthisuserprofile = proxy({
    target: 'http://localhost:9906/',
    changeOrigin: true,             // for vhosted sites, changes host header to match to target's host
    logLevel: 'debug'
});

var getallcollectionshomeaccount = proxy({
    target: 'http://localhost:9906/',
    changeOrigin: true,             // for vhosted sites, changes host header to match to target's host
    logLevel: 'debug'
});

var getanswer = proxy({
    target: 'http://localhost:9906/',
    changeOrigin: true,             // for vhosted sites, changes host header to match to target's host
    logLevel: 'debug'
});

var homeaccountgetallPost = proxy({
    target: 'http://localhost:9906/',
    changeOrigin: true,             // for vhosted sites, changes host header to match to target's host
    logLevel: 'debug'
});

var getallPost = proxy({
    target: 'http://localhost:9906/',
    changeOrigin: true,             // for vhosted sites, changes host header to match to target's host
    logLevel: 'debug'
});
var getHasliked = proxy({
    target: 'http://localhost:9906/',
    changeOrigin: true,             // for vhosted sites, changes host header to match to target's host
    logLevel: 'debug'
});

var login = proxy({
    target: 'http://localhost:9906/',
    changeOrigin: true,             // for vhosted sites, changes host header to match to target's host
    logLevel: 'debug'
});
var RegisterTeacher = proxy({
    target: 'http://localhost:9906/',
    changeOrigin: true,             // for vhosted sites, changes host header to match to target's host
    logLevel: 'debug'
});
var RegisterSchool = proxy({
    target: 'http://localhost:9906/',
    changeOrigin: true,             // for vhosted sites, changes host header to match to target's host
    logLevel: 'debug'
});
var NewQuestion = proxy({
    target: 'http://localhost:9906/',
    changeOrigin: true,             // for vhosted sites, changes host header to match to target's host
    logLevel: 'debug'
});


var SendComment = proxy({
    target: 'http://localhost:9906/',
    changeOrigin: true,             // for vhosted sites, changes host header to match to target's host
    logLevel: 'debug'
});
var LikePost = proxy({
    target: 'http://localhost:9906/',
    changeOrigin: true,             // for vhosted sites, changes host header to match to target's host
    logLevel: 'debug'
});

var UnLikePost = proxy({
    target: 'http://localhost:9906/',
    changeOrigin: true,             // for vhosted sites, changes host header to match to target's host
    logLevel: 'debug'
});

var getLikes = proxy({
    target: 'http://localhost:9906/',
    changeOrigin: true,             // for vhosted sites, changes host header to match to target's host
    logLevel: 'debug'
});
var getcollectionandcomments = proxy({
    target: 'http://localhost:9906/',
    changeOrigin: true,             // for vhosted sites, changes host header to match to target's host
    logLevel: 'debug'
});
var getPosts = proxy({
    target: 'http://localhost:9906/',
    changeOrigin: true,             // for vhosted sites, changes host header to match to target's host
    logLevel: 'debug'
});

 var  markcollectioncorrect = proxy({
    target: 'http://localhost:9906/',
    changeOrigin: true,             // for vhosted sites, changes host header to match to target's host
    logLevel: 'debug'
});

 var  gettypeofquestion = proxy({
    target: 'http://localhost:9906/',
    changeOrigin: true,             // for vhosted sites, changes host header to match to target's host
    logLevel: 'debug'
});


app.use('/markcollectioncorrect',  markcollectioncorrect);
app.use('/getcollectionandcomments/:name/:name2', getcollectionandcomments);
app.use('/getPosts/:name', getPosts);
app.use('/cookie', cookie);
app.use('/gettypeofquestion', gettypeofquestion);

app.use('/allGroups', jsonPlaceholderProxy);

app.use('/signup',signup );
app.use('/login',login );

app.use('/say/:name', say);

 
 app.use('/newBackGroundImage', newBackGroundImage);

  app.use('/sendFriendShipInvitation', sendFriendShipInvitation);
  app.use('/fetchfriend/:name', fetchfriend);

  app.use('/sendFriendShipInvitationNotification',sendFriendShipInvitationNotification);

 
  
 app.use('/room/chat', chatroom);

  
 
  app.use('/sendViewPage', sendViewPage);
  
  app.use('/getviewpage/:name/:name2', getViewPage);
 
  app.use('/getfriendshipage/:name', getFriendShipPage);
  
  
  app.use('/getviewpageonefriend/:name/:name2', getviewpageFriendShip);
   
  app.use('/sendAcceptFriendShip', AcceptFriendShip);
    app.use('/sendFriendShipAcceptedNotification', AcceptedNotification);
      app.use('/sendpost', SendPost);
       app.use('/allpostfromthisuserfriendspost/:name', getPost);
  
     app.use('/getallPostsfromthisuserprofile/:name', getallPostsfromthisuserprofile);
      app.use('/getallPostshomeaccount/:name',  getallPost);
     app.use('/homeaccount/:name',  homeaccountgetallPost);
  

  app.use('/getallcollectionshomeaccount/:name',  getallcollectionshomeaccount);

app.use('/RegisterSchool', RegisterSchool);
app.use('/NewQuestion', NewQuestion);
app.use('/SendComment', SendComment);
app.use('/LikePost', LikePost);
app.use('/UnLikePost', UnLikePost);
app.use('/getHasliked', getHasliked);
app.use('/getLikes', getLikes);

app.use('/getanswer/:name/:name2', getanswer);






 

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);
app.use('/todos', todos);
app.use('/groups', todos);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
