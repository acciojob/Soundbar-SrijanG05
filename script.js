//your JS code here. If required.
let currentAudio = null;
function playSound(soundName) {
    stopSongs();
 const folderPath = 'sounds/';
    const filePath = `${folderPath}${soundName}.mp3`;
   currentAudio = new Audio(filePath);
    currentAudio.play();
}
function stopSongs() {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
        currentAudio = null;
    }
}