let canvas = document.querySelector("#canvas");
let context = canvas.getContext("2d");
let video = document.querySelector("#video");
let camera = document.querySelector("#camera");



document.getElementById("snap").addEventListener('click', () => {
    context.drawImage(video, 0, 0, 640, 480);
    video.hidden = true;
    canvas.hidden = false;
    stopStreamedVideo(video);
});

function stopStreamedVideo(videoElem) {
    const stream = videoElem.srcObject;
    const tracks = stream.getTracks();
  
    tracks.forEach(function(track) {
      track.stop();
    });
  
    videoElem.srcObject = null;
  }

camera.addEventListener('click', () => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia){
        navigator.mediaDevices.getUserMedia({video: true}).then(stream => {
            video.srcObject = stream;
            video.play();
        });
    }
    video.hidden = false;
});