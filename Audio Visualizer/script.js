const audioInput = document.getElementById('songUpload')
.addEventListener('change', (event) => {
    const file = event.target.files[0];

    const reader = new FileReader();
    reader.addEventListener('load', (event) => {
        const arrayBuffer = event.target.result;
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();

        audioContext.decodeAudioData(arrayBuffer, (audioBuffer) => {
            make(audioBuffer,audioContext);
        });
    });
    reader.readAsArrayBuffer(file);
});
function make(audioBuffer,audioContext) {
    
    const platform = document.getElementById('line');
    platform.height =  280;
    platform.width = 1200;
    const analyser = audioContext.createAnalyser();
    analyser.fftSize = 256;
    const frequencyBufferLength = analyser.frequencyBinCount;
    const frequencyData = new Uint8Array(frequencyBufferLength);
    const source = audioContext.createBufferSource();
    source.buffer = audioBuffer;
    source.connect(analyser);
    analyser.connect(audioContext.destination);
    source.start();
    const platformContext = platform.getContext('2d');
        
    platformContext.fillStyle = 'black';
    const barCount = 64;
    const startBin = 6;
    const barWidth = platform.width / barCount;
    const prevHeights = new Array(barCount).fill(0);

    function animate() {
        requestAnimationFrame(animate);
        platformContext.clearRect(0, 0, platform.width, platform.height);
        analyser.getByteFrequencyData(frequencyData);

        for (let i = 0; i < barCount; i++) {
            const binIndex = startBin + Math.floor((i / barCount) * (frequencyBufferLength - startBin - 1));
            const value = frequencyData[binIndex] || 0;
            const height = Math.min(platform.height - 10, value * 0.95);
            const smoothedHeight = prevHeights[i] * 0.55 + Math.max(2, height) * 0.45;

            prevHeights[i] = smoothedHeight;
            platformContext.fillRect(i * barWidth, platform.height - smoothedHeight, barWidth - 1, smoothedHeight);
        }
    }

    animate();
}




// const sampleButton = document.getElementById('sampleButton');
// const sampleAudio = document.getElementById('sampleAudio');
// console.log(audioInput);
