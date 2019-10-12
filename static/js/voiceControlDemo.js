let VoiceControlDemo = (function(){
    let keywordIDs = {
        'ok lamp': new Uint8Array([
              0x02, 0xf3, 0x72, 0xe4, 0x71, 0x36, 0x29, 0x30, 0x1a, 0x67, 0xd3, 0x37,
              0xb4, 0x29, 0x83, 0x52, 0x0b, 0x84, 0xb6, 0x25, 0xa2, 0xf3, 0x98, 0x66,
              0xc5, 0x3c, 0x20, 0x20, 0xb7, 0xc0, 0x79, 0x4f, 0xd4, 0xbb, 0xa9, 0x77,
              0x7b, 0xaa, 0x50, 0x6c, 0x99, 0x23, 0x5e, 0xb3, 0xe7, 0xfb, 0x80, 0x4a,
              0xb3, 0xcc, 0x4f, 0x12, 0x16, 0x1e, 0x31, 0x5e, 0x9b, 0x03, 0x20, 0xbc,
              0xf7, 0x08, 0xa2, 0xc4, 0xb1, 0xde, 0x8c, 0xfb, 0x9c, 0x64, 0xc7, 0x2c,
              0x16, 0x52, 0xdb, 0xa0, 0x7e, 0xf4, 0x0d, 0x37, 0xbd, 0xd3, 0x3e, 0xac,
              0x06, 0xa7, 0x16, 0xa7
            ]),
      	'yellow': new Uint8Array([
              0xa8, 0xa9, 0x76, 0x41, 0xba, 0xb0, 0xf7, 0x02, 0x4e, 0xb1, 0xf9, 0x61,
              0xcc, 0x4f, 0x72, 0x4d, 0x6c, 0xda, 0x55, 0x03, 0xcd, 0x47, 0xe7, 0xc0,
              0x62, 0xdc, 0xdc, 0x68, 0x5a, 0x68, 0x05, 0x2b, 0x7c, 0x28, 0x61, 0x32,
              0x3c, 0x5d, 0x3b, 0x26, 0x95, 0x72, 0x4c, 0x6f, 0x82, 0xf2, 0x13, 0xe4,
              0x00, 0xd5, 0x6e, 0xb3, 0x6a, 0xea, 0x43, 0x31, 0xe2, 0x61, 0xce, 0x40,
              0xf2, 0xf1, 0xe1, 0xa1, 0xa1, 0x89, 0xc9, 0xb0, 0x36, 0x27, 0xf6, 0xb5]),	  
        'orange': new Uint8Array([
              0xd2, 0xe8, 0xe8, 0xbc, 0xee, 0x44, 0xd1, 0xc7, 0x8c, 0x96, 0x78, 0x04,
              0x68, 0x4c, 0x21, 0x17, 0xd9, 0x2e, 0x8e, 0xd3, 0xa1, 0xf8, 0xad, 0x48,
              0xd8, 0x3a, 0x52, 0x37, 0x0a, 0xc5, 0xe1, 0x5a, 0xa9, 0xc5, 0x73, 0xf9,
              0x51, 0x7d, 0xc8, 0x6c, 0x5c, 0x70, 0x5f, 0xed, 0x0f, 0xbe, 0xea, 0x76,
              0x11, 0x26, 0x4f, 0x5c, 0x04, 0xb4, 0x97, 0x3f, 0x9b, 0xec, 0xb1, 0x19,
              0x19, 0xe6, 0xe3, 0x1e, 0x2b, 0xc0, 0x2e, 0x0e, 0xbe, 0x9a, 0xcb, 0x03,
              0xef, 0x39, 0x4d, 0x42]),

        'purple': new Uint8Array([
              0x18, 0xfd, 0xb9, 0x93, 0x0a, 0xef, 0xc4, 0x2b, 0x06, 0x80, 0x9c, 0x91,
              0x6e, 0xbc, 0xe2, 0x72, 0x23, 0xe2, 0x13, 0xb0, 0xa3, 0xce, 0x35, 0x1f,
              0xfc, 0x35, 0xae, 0x86, 0x18, 0x9c, 0xdd, 0x2d, 0xc2, 0x60, 0x80, 0x81,
              0x75, 0xd3, 0xa3, 0x6d, 0xa9, 0xf0, 0x4d, 0x35, 0x55, 0x0a, 0x1c, 0xcc,
              0x9d, 0x7f, 0xe7, 0x45, 0x10, 0x2c, 0x5e, 0x93, 0x6c, 0x23, 0x54, 0x5b,
              0x59, 0x7d, 0x3d, 0x56, 0x1e, 0xf1, 0xd6, 0xe8, 0x0c, 0x3c, 0xce, 0x94,
              0x76, 0xda, 0x43, 0x2f]),
        'navy blue': new Uint8Array([
              0x10, 0x58, 0xbb, 0xa7, 0x73, 0xb7, 0xe0, 0xa9, 0x3f, 0x47, 0x2d, 0x0a,
              0x98, 0x96, 0x89, 0x13, 0x0f, 0x8a, 0x1b, 0x1a, 0x71, 0x49, 0x7a, 0x70,
              0x7b, 0xa1, 0xbe, 0x97, 0x0e, 0x0b, 0xa9, 0x5e, 0x3a, 0x1e, 0x2c, 0x66,
              0x9c, 0x8f, 0x94, 0x36, 0x6c, 0xcc, 0xdf, 0x95, 0xf5, 0xeb, 0xac, 0x8a,
              0x6d, 0x9f, 0x21, 0x8f, 0xaf, 0x79, 0x28, 0xc3, 0x18, 0x65, 0xf5, 0xb3,
              0xc7, 0xfe, 0x55, 0xb4, 0x51, 0xc9, 0xfc, 0x2e, 0x37, 0x88, 0x5c, 0xa4,
              0x74, 0x25, 0x51, 0x9b, 0x79, 0x2a, 0x84, 0xb0, 0xeb, 0x18, 0x5b, 0xaa,
              0x95, 0xd6, 0x63, 0x50]),
        'white': new Uint8Array([
              0x74, 0x40, 0x1c, 0xb6, 0x3a, 0xb9, 0x38, 0x6f, 0xea, 0xce, 0x12, 0xe8,
              0x63, 0x15, 0x27, 0x3c, 0x05, 0xa1, 0x03, 0x65, 0x67, 0x12, 0x17, 0x6d,
              0x48, 0x52, 0xad, 0xb9, 0xa1, 0x6d, 0xcf, 0xc5, 0x2d, 0xc5, 0x0b, 0xb6,
              0xbd, 0x8e, 0xf1, 0xe2, 0x90, 0x92, 0xd7, 0x17, 0x3f, 0xb8, 0x9b, 0xa2,
              0xfb, 0xf1, 0x87, 0x99, 0xf0, 0x00, 0x41, 0xdf, 0xdd, 0x72, 0x72, 0x85,
              0xd9, 0x72, 0x8a, 0x21, 0x96, 0xb7, 0x63, 0x05, 0x36, 0x80, 0x19, 0xb1]),
		   
    };

    let sensitivities = new Float32Array([0.5, 1, 1, 1, 1, 1]);

    let keywordNames = Object.keys(keywordIDs);

    let currentTimeSeconds = function() { return new Date().getTime() / 1000 };

    let is_listening = false;
    let listeningStartSeconds;
    let processCallback = function(keywordIndex) {
        if (keywordIndex === -1) {
            if (is_listening && (currentTimeSeconds() - listeningStartSeconds) > 5) {
                document.querySelector("#light_bulb").setAttribute("src", "NeutronConceptLogoBlue.gif");
                is_listening = false;
            }
            return;
        }

        let keyword = keywordNames[keywordIndex];
        if (is_listening) {
			console.log("Keyword",keyword);
            if (keyword === "yellow") {
                document.querySelector("#light_bulb").setAttribute("style", "background-color:yellow")
            }
            if (keyword === "orange") {
                document.querySelector("#light_bulb").setAttribute("style", "background-color:orange")
            }
            if (keyword === "purple") {
                document.querySelector("#light_bulb").setAttribute("style", "background-color:purple")
            }
            if (keyword === "navy blue") {
                document.querySelector("#light_bulb").setAttribute("style", "background-color:blue")
            }
            if (keyword === "white") {
                document.querySelector("#light_bulb").setAttribute("style", "background-color:white")
            }
           // document.querySelector("#light_bulb").setAttribute("src", "NeutronConceptLogoBlue.gif");
            is_listening = false;
        }
        if (keyword === "ok lamp") {
			console.log("Ok Lamp");
			 //document.querySelector("#light_bulb").setAttribute("src", "light_bulb_blue.svg");
			document.getElementById("light_bulb").src = "NeutronConceptLogoRed.gif";
			 console.log("logo change");
			var audio = document.querySelector('audio');
			var audioBlobsContainer = document.querySelector('#audio-blobs-container');
			var recorder; 
			    navigator.mediaDevices.getUserMedia({ audio: true }).then(function(microphone) {
				recorder = RecordRTC(microphone, {
				recorderType: StereoAudioRecorder,
				mimeType: 'audio/wav',
				timeSlice: parseInt(3000), // pass this parameter
				ondataavailable: function(blob) {
				console.log("data ok?");
				
				
				 if ("WebSocket" in window) {
              // alert("WebSocket is supported by your Browser!");
               
               // Let us open a web socket
             //  var ws = new WebSocket("wss://hldv0434.hydc.sbc.com:28443/audio");
				//var ws = new WebSocket("ws://localhost:38080/audio");
			   //var ws = new WebSocket("wss://zld06013.vci.att.com:9008/audio");
			   var ws = new WebSocket("ws://hldh103.hydc.sbc.com:31233/audio");
			  
			 //   var ws = new WebSocket("wss://shoplist.webfactional.com:13808/audio");
				
               ws.onopen = function() {
                 ws.send(blob);
                 // alert("Message is sent...");
               };
				
               ws.onmessage = function (evt) { 
                  var received_msg = evt.data;
                  console.log('type:' + typeof received_msg);
                  if(typeof received_msg == "string"){
                	  console.log("String msg");
                var textId= document.getElementById('text');
                textId.innerHTML =received_msg;
                
                  }else{
                  var blob = new Blob([received_msg], {type: 'audio/wav'});
				 console.log("Message is received...",received_msg);
				/* var audio = document.createElement('audio');
                audio.controls = true;
                audio.srcObject = null;
                audio.src = URL.createObjectURL(blob);
                audioBlobsContainer.appendChild(audio);
                audioBlobsContainer.appendChild(document.createElement('hr'));
				audio.play();*/
				 var audio = document.getElementById("audio");
				 audio.src= URL.createObjectURL(blob);
				 audio.play();
                  }
               };
				
               ws.onclose = function() { 
                  
                  // websocket is closed.
                //  alert("Connection is closed..."); 
               };
            } else {
              
               // The browser doesn't support WebSocket
               //alert("WebSocket NOT supported by your Browser!");
            }
				
            }
        });
		 recorder.startRecording();
		   recorder.microphone = microphone;
		  setTimeout(() => {
        // this will trigger one final 'ondataavailable' event and set recorder state to 'inactive'
			recorder.microphone.stop();
			document.querySelector("#light_bulb").setAttribute("src", "NeutronConceptLogoBlue.gif");
    }, 3000);
			}).catch(function(error) {
			alert('Unable to capture your microphone. Please check console logs.');
			console.error(error);
    });
		
           // document.querySelector("#light_bulb").setAttribute("src", "NeutronConceptLogoBlue.gif");
            is_listening = true;
            listeningStartSeconds = currentTimeSeconds();
        }
    };

    let audioManager;

    let audioManagerErrorCallback = function(ex) {
        alert(ex.toString());
        document.querySelector("#light_bulb").setAttribute("style", "background-color:white");
        document.querySelector("#light_bulb").setAttribute("src", "NeutronConceptLogoBlue.gif");
        document.querySelector("#demo_button").setAttribute("onclick", "VoiceControlDemo.start()");
        document.querySelector("#demo_button").innerText = "Start Demo";
    };

    let start = function() {
    	 var audio = document.getElementById("audio");
         audio.play();
        audioManager = new PicovoiceAudioManager();
        audioManager.start(Porcupine.create(Object.values(keywordIDs), sensitivities), processCallback, audioManagerErrorCallback);

        document.querySelector("#demo_button").setAttribute("onclick", "VoiceControlDemo.stop()");
        document.querySelector("#demo_button").innerText = "Stop Demo";
    };
    
    

    let stop = function() {
        audioManager.stop();

        document.querySelector("#light_bulb").setAttribute("style", "background-color:white");
        document.querySelector("#light_bulb").setAttribute("src", "NeutronConceptLogoBlue.gif");
        document.querySelector("#demo_button").setAttribute("onclick", "VoiceControlDemo.start()");
        document.querySelector("#demo_button").innerText = "Start Demo";
    };

    return {start: start, stop: stop}
})();
