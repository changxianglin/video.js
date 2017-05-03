var myPlayer = videojs('my-video');
    console.log('e', myPlayer.volume())
myPlayer.volume(0.5);
videojs("my-video", {}, function(){
  // Player (this) is initialized and ready.
});
console.log('er', myPlayer.volume())
