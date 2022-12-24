
    var playing = false;

    /* Audio Tracks */

    let audio_track1 = document.getElementById("audio_track1");
    let audio_track2 = document.getElementById("audio_track2");
    let audio_track3 = document.getElementById("audio_track3");
    let audio_track4 = document.getElementById("audio_track4");
    let audio_track5 = document.getElementById("audio_track5");
    let audio_track6 = document.getElementById("audio_track6");

    let play_button1 = document.getElementById("play1");
    let play_button2 = document.getElementById("play2");
    let play_button3 = document.getElementById("play3");
    let play_button4 = document.getElementById("play4");
    let play_button5 = document.getElementById("play5");
    let play_button6 = document.getElementById("play6");


    play_button1.addEventListener('click', playMusic1);
    play_button2.addEventListener('click', playMusic2);
    play_button3.addEventListener('click', playMusic3);
    play_button4.addEventListener('click', playMusic4);


    function playMusic1() {
        console.log("play clicked");
        if (playing == false) {
            audio_track1.play()
            playing = true;
            console.log("playing")
            play_button1.innerHTML = '<button class=" audio-btn text-center" id="pause" aria-label="Pause audio button"><i class="far fa-pause-circle audio-block centered"></i></button>'
        } else {
            audio_track1.pause()
            playing = false;
            console.log("paused")
            play_button1.innerHTML = '<button class="audio-btn text-center" id="play1" aria-label="Play audio button"><i class="far fa-play-circle"></i></button>'
        }
    }

    function playMusic2() {
        console.log("play clicked");
        if (playing == false) {
            audio_track2.play()
            playing = true;
            console.log("playing")
            play_button2.innerHTML = '<button class=" audio-btn text-center" id="pause" aria-label="Pause audio button"><i class="far fa-pause-circle audio-block centered"></i></button>'
        } else {
            audio_track2.pause()
            playing = false;
            console.log("paused")
            play_button2.innerHTML = '<button class="audio-btn text-center" id="play1" aria-label="Play audio button"><i class="far fa-play-circle"></i></button>'
        }
    }

    function playMusic3() {
        console.log("play clicked");
        if (playing == false) {
            audio_track3.play()
            playing = true;
            console.log("playing")
            play_button3.innerHTML = '<button class=" audio-btn text-center" id="pause" aria-label="Pause audio button"><i class="far fa-pause-circle audio-block centered"></i></button>'
        } else {
            audio_track3.pause()
            playing = false;
            console.log("paused")
            play_button3.innerHTML = '<button class="audio-btn text-center" id="play1" aria-label="Play audio button"><i class="far fa-play-circle"></i></button>'
        }
    }
   
    
    function playMusic4() {
        console.log("play clicked");
        if (playing == false) {
            audio_track4.play()
            playing = true;
            console.log("playing")
            play_button4.innerHTML = '<button class=" audio-btn text-center" id="pause" aria-label="Pause audio button"><i class="far fa-pause-circle audio-block centered"></i></button>'
        } else {
            audio_track4.pause()
            playing = false;
            console.log("paused")
            play_button4.innerHTML = '<button class="audio-btn text-center" id="play1" aria-label="Play audio button"><i class="far fa-play-circle"></i></button>'
        }
    }
   



    

