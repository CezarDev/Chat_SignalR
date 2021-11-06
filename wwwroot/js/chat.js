"use strict";

var connection = new signalR.HubConnectionBuilder().withUrl("/chatHub").build();

document.getElementById("sendButton").disabled = true;

connection.on("ReceiveMessage", function (user, message) {
    var li = document.createElement("li");
    document.getElementById("messagesList").appendChild(li);
    // We can assign user-supplied strings to an element's textContent because it
    // is not interpreted as markup. If you're assigning in any other way, you 
    // should be aware of possible script injection concerns.
    li.textContent = `${user} : ${message}`;
});

connection.start().then(function () {
    document.getElementById("sendButton").disabled = false;
}).catch(function (err) {
    return console.error(err.toString());
});

document.getElementById("sendButton").addEventListener("click", function (event) {
    var user = document.getElementById("userInput").value;
    var message = document.getElementById("messageInput").value;
    connection.invoke("SendMessage", user, message).catch(function (err) {
        return console.error(err.toString());
    });
    event.preventDefault();
});


var device = navigator.mediaDevices.getUserMedia({audio: true});
var items = [];
device.then( stream =>{
    var gravacao = new MediaRecorder(stream);
    gravacao.ondataavailable = e=> {
        items.push(e.data);
        if (gravacao.state == 'inactive'){
           var blob = new Blob(items, {type: 'audio/webm'});
           var audio = document.getElementById('audio');
           var mainaudio = document.createElement('audio');
           mainaudio.setAttribute('controls', 'controls');
           audio.appendChild(mainaudio);
           mainaudio.innerHTML = '<source src=" ' +URL.createObjectURL(blob)+'" type="video/webm"/>';
           var audio_gravado =  '<source src=" ' +URL.createObjectURL(blob)+'" type="video/webm"/>';

           audio.addEventListener("click", function(event){
               console.log('clicou');
               alert(audio_gravado);
           })
                      
        }
    }
    gravacao.start(1000);
    setTimeout(()=>{
    gravacao.stop();
    }, 5000)
})