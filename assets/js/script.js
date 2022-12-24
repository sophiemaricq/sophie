
    var playing = false;

    let audio_track1 = document.getElementById("audio_track1");
    let play_button1 = document.getElementById("play1");


    play_button1.addEventListener('click', playMusic);

    function playMusic() {
        console.log("play clicked");
        if (playing == false) {
            audio_track1.play()
            playing = true;
            console.log("playing")
            play_button1.innerHTML = '<button class=" audio-btn" id="pause" aria-label="Pause audio button"><i class="far fa-pause-circle"></i></button>'
        } else {
            audio_track1.pause()
            playing = false;
            console.log("paused")
            play_button1.innerHTML = '<button class="audio-btn text-center" id="play1" aria-label="Play audio button"><i class="far fa-play-circle"></i></button>'
        }
    }

    

