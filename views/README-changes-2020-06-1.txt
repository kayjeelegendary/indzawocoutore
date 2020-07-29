changes made to app.css line 290 
#ourinteraction-wrapper canvas {
    width: 100%;
    height: 100%
}
is wat oit used to look lije
because we trying to add a link
to our <a></a> elemnts
we removed canvas as is exits in 
index frm starnights

and line 195 
canvas {
    display: inline-block
}
 was removed
 
 
 bootstrap 
 we removed  line 89
 canvas,
video {
  display: inline-block;
  *display: inline;
  *zoom: 1;
}

and line 137 
#map_canvas img,
.google-maps img {
  max-width: none;
}

they clash with canvas in index which belongs to starnights

the whole public/css/style.css
was removed
no eveident change happend


we had to make  a copy of index-copy 
named it index-copy -copy high nav with stars
