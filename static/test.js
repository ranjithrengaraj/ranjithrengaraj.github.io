

function checkSlience() {
  console.log("-checkSlience----");
  //Microphone demo
 // var getUserMedia = require('getusermedia'); 
  //var attachmediastream = require('attachmediastream');
  //var notification = document.querySelector('#userSpeaking');
 //var log = bows('Microphone Demo');

  const constraints = window.constraints = {
    audio: true,
    video: false
  };
  


navigator.mediaDevices.getUserMedia(constraints).then(handleSuccess).catch(handleError);
 // getUserMedia(function(err, stream) {
   // if (err) throw err

    //attachmediastream(stream, document.querySelector('#mic video'));
    function handleSuccess(stream) {
        
      var speechEvents = hark(stream);
      //speechEvents.setInterval(70);
    speechEvents.on('speaking', function() {
    //  notification.style.display = 'block';
      //log('speaking');
      console.log("---Speaking----");
      document.getElementById('other').classList.remove('green_background');
      document.getElementById('speak').classList.add('green_background');
    });

    speechEvents.on('volume_change', function(volume, threshold) {
     // log(volume, threshold)
     // streamVolumes.push(volume);
      //streamVolumes.shift();
    });

    speechEvents.on('stopped_speaking', function() {
     // notification.style.display = 'none';
     // log('stopped_speaking');
     console.log("Stop speaking----");
     document.getElementById('speak').classList.remove('green_background');
     document.getElementById('other').classList.add('green_background');
    
    });
    
}
function handleError(){
    console.log("error");
}
} 
