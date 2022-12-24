
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
            this.find('i').classList.add("far fa-pause-circle")
            this.find('i').classList.remove("far fa-play-circle")
        } else {
            audio_track1.pause()
            playing = false;
            console.log("paused")
        }
    }

    

