
var currentAudio = null;

function playAudio(audioFile) {
            if (currentAudio) {
                currentAudio.pause();
            }
            currentAudio = new Audio(audioFile);
            currentAudio.play();
        }