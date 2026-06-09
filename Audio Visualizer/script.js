const audioInput = document.getElementById('songUpload')
.addEventListener('change', (event) => {
    const file = event.target.files[0];

    const reader = new FileReader();
    reader.addEventListener('load', (event) => {
        const arrayBuffer = event.target.result;
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();

        audioContext.decodeAudioData(arrayBuffer, (audioBuffer) => {
            make(audioBuffer);
        });
    });
    reader.readAsArrayBuffer(file);
});
function make(audioBuffer){
    const platform = document.getElementById('line');
    
    const platformContext = platform.getContext('2d');

    const channelData = audioBuffer.getChannelData(0);
    console.log(channelData);
}
// const sampleButton = document.getElementById('sampleButton');
// const sampleAudio = document.getElementById('sampleAudio');
// console.log(audioInput);