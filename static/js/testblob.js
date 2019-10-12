function createAudioElement(blobUrl) {
    const downloadEl = document.createElement('a');
    downloadEl.style = 'display: block';
    downloadEl.innerHTML = 'download';
    downloadEl.download = 'audio.wav';
    downloadEl.href = blobUrl;
    const audioEl = document.createElement('audio');
    audioEl.controls = true;
    const sourceEl = document.createElement('source');
    sourceEl.src = blobUrl;
    sourceEl.type = 'audio/wav';
    audioEl.appendChild(sourceEl);
    document.body.appendChild(audioEl);
    document.body.appendChild(downloadEl);
}

function test(){
	
	 var audio = document.getElementById("audio");
     audio.play();
     setTimeout(function(){ trigger() }, 3000);
}

function trigger(){
	var audio1=document.getElementById("audio");
	audio1.controls = true;
	audio.src="QCTest.wav"
		audio1.play();
}