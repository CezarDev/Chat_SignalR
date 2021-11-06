
// var device = navigator.mediaDevices.getUserMedia({audio: true});
// var items = [];
// device.then( stream =>{
//     var gravacao = new MediaRecorder(stream);
//     gravacao.ondataavailable = e=> {
//         items.push(e.data);
//         if (gravacao.state == 'inactive'){
//            var blob = new Blob(items, {type: 'audio/webm'});
//            var audio = document.getElementById('audio');
//            var mainaudio = document.createElement('audio');
//            mainaudio.setAttribute('controls', 'controls');
//            audio.appendChild(mainaudio);
//            mainaudio.innerHTML = '<source src=" ' +URL.createObjectURL(blob)+'" type="video/webm"/>';
//            var audio_gravado =  '<source src=" ' +URL.createObjectURL(blob)+'" type="video/webm"/>';

//            audio.addEventListener("click", function(event){
//                console.log('clicou');
//                alert(audio_gravado);
//            })
                      
//         }
//     }
//     gravacao.start(1000);
//     setTimeout(()=>{
//     gravacao.stop();
//     }, 5000)
})