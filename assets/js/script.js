
var playingIndex = -1;
var audioTracks = [];
var playButtons = [];

for (let i = 1; i <= 14; i++) {
    audioTracks[i] = document.getElementById(`audio_track${i}`);
    playButtons[i] = document.getElementById(`play${i}`);
    playButtons[i].addEventListener('click', () => playMusic(i));
}

function playMusic(index) {
    if (playingIndex !== -1 && playingIndex !== index) {
        audioTracks[playingIndex].pause();
        playButtons[playingIndex].innerHTML = '<button class="audio-btn text-center" aria-label="Play audio button"><i class="far fa-play-circle"></i></button>';
    }

    if (playingIndex === index && audioTracks[index].paused) {
        audioTracks[index].play();
        playButtons[index].innerHTML = '<button class=" audio-btn text-center" aria-label="Pause audio button"><i class="far fa-pause-circle audio-block centered"></i></button>';
    } else {
        audioTracks[index].pause();
        playButtons[index].innerHTML = '<button class="audio-btn text-center" aria-label="Play audio button"><i class="far fa-play-circle"></i></button>';
    }

    playingIndex = audioTracks[index].paused ? -1 : index;
}