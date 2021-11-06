// window.AudioContext = window.AudioContext || window.webkitAudioContext;

// const context = new AudioContext();

// navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
//   const microphone = context.createMediaStreamSource(stream);
//   const filter = context.createBiquadFilter();
//   // microphone -> filter -> destination
//   microphone.connect(filter);
//   filter.connect(context.destination);
// });



// // Fix up prefixing
// window.AudioContext = window.AudioContext || window.webkitAudioContext;
// var context = new AudioContext();

// function playSound(buffer) {
//   var source = context.createBufferSource(); // creates a sound source
//   source.buffer = buffer;                    // tell the source which sound to play
//   source.connect(context.destination);       // connect the source to the context's destination (the speakers)
//   source.start(0);                           // play the source now
//                                              // note: on older systems, may have to use deprecated noteOn(time);
// }


// const context = new AudioContext();

// function playSound() {
//   const source = context.createBufferSource();
//   source.buffer = dogBarkingBuffer;
//   source.connect(context.destination);
//   source.start(0);
// }


// function toggleRecording( e ) {
//     if (e.classList.contains("recording")) {
//         // stop recording
//         audioRecorder.stop();
//         e.classList.remove("recording");
//         audioRecorder.getBuffers( gotBuffers );
//     } else {
//         // start recording
//         if (!audioRecorder)
//             return;
//         e.classList.add("recording");
//         audioRecorder.clear();
//         audioRecorder.record();
//     }
// }
var device = navigator.mediaDevices.getUserMedia({audio: true});
var items = [];
device.then( stream =>{
    var gravacao = new MediaRecorder(stream);
    gravacao.ondataavailable = e=> {
        items.push(e.data);
        if (gravacao.state == 'inactive'){
       //     var blob = new Blob(items, {type: 'audio/webm'});
       //     var audio = document.getElementById('audio');
      //      var mainaudio = document.createElement('audio');
     //       mainaudio.setAttribute('controls', 'controls');
       //     audio.appendChild(mainaudio);
      //      mainaudio.innerHTML = '<source src=" ' +URL.createObjectURL(blob)+'" type="video/webm"/>';            
        }
    }
    gravacao.start(1000);
    setTimeout(()=>{
    gravacao.stop();
    }, 5000)
})