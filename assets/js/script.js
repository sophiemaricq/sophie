
var playing = false;

    /* Audio Tracks */

    let audio_track1 = document.getElementById("audio_track1");
    let audio_track2 = document.getElementById("audio_track2");
    let audio_track3 = document.getElementById("audio_track3");
    let audio_track4 = document.getElementById("audio_track4");
    let audio_track5 = document.getElementById("audio_track5");
    let audio_track6 = document.getElementById("audio_track6");
    let audio_track7 = document.getElementById("audio_track7");
    let audio_track8 = document.getElementById("audio_track8");
    let audio_track9 = document.getElementById("audio_track9");
    let audio_track10 = document.getElementById("audio_track10");
    let audio_track11 = document.getElementById("audio_track11");
    let audio_track12 = document.getElementById("audio_track12");
    let audio_track13 = document.getElementById("audio_track13");
    let audio_track14 = document.getElementById("audio_track14");

    /* Audio Buttons */

    let play_button1 = document.getElementById("play1");
    let play_button2 = document.getElementById("play2");
    let play_button3 = document.getElementById("play3");
    let play_button4 = document.getElementById("play4");
    let play_button5 = document.getElementById("play5");
    let play_button6 = document.getElementById("play6");
    let play_button7 = document.getElementById("play7");
    let play_button8 = document.getElementById("play8");
    let play_button9 = document.getElementById("play9");
    let play_button10 = document.getElementById("play10");
    let play_button11 = document.getElementById("play11");
    let play_button12 = document.getElementById("play12");
    let play_button13 = document.getElementById("play13");
    let play_button14 = document.getElementById("play14");

    /* Event Listeners */

    play_button1.addEventListener('click', playMusic1);
    play_button2.addEventListener('click', playMusic2);
    play_button3.addEventListener('click', playMusic3);
    play_button4.addEventListener('click', playMusic4);
    play_button5.addEventListener('click', playMusic5);
    play_button6.addEventListener('click', playMusic6);
    play_button7.addEventListener('click', playMusic7);
    play_button8.addEventListener('click', playMusic8);
    play_button9.addEventListener('click', playMusic9);
    play_button10.addEventListener('click', playMusic10);
    play_button11.addEventListener('click', playMusic11);
    play_button12.addEventListener('click', playMusic12);
    play_button13.addEventListener('click', playMusic13);
    play_button14.addEventListener('click', playMusic14);

    /* Audio Controls */

    function playMusic1() {
        console.log("play clicked");
        if (playing == false) {
            audio_track1.play();
            playing = true;
            console.log("playing");
            play_button1.innerHTML = '<button class=" audio-btn text-center" aria-label="Pause audio button"><i class="far fa-pause-circle audio-block centered"></i></button>'
        } else {
            audio_track1.pause()
            playing = false;
            console.log("paused");
            play_button1.innerHTML = '<button class="audio-btn text-center" aria-label="Play audio button"><i class="far fa-play-circle"></i></button>'
        }
    }


    function playMusic2() {
        console.log("play clicked");
        if (playing == false) {
            audio_track2.play()
            playing = true;
            console.log("playing")
            play_button2.innerHTML = '<button class=" audio-btn text-center" aria-label="Pause audio button"><i class="far fa-pause-circle audio-block centered"></i></button>'
        } else {
            audio_track2.pause()
            playing = false;
            console.log("paused")
            play_button2.innerHTML = '<button class="audio-btn text-center" aria-label="Play audio button"><i class="far fa-play-circle"></i></button>'
        }
    }


    function playMusic3() {
        console.log("play clicked");
        if (playing == false) {
            audio_track3.play()
            playing = true;
            console.log("playing")
            play_button3.innerHTML = '<button class=" audio-btn text-center" aria-label="Pause audio button"><i class="far fa-pause-circle audio-block centered"></i></button>'
        } else {
            audio_track3.pause()
            playing = false;
            console.log("paused")
            play_button3.innerHTML = '<button class="audio-btn text-center" aria-label="Play audio button"><i class="far fa-play-circle"></i></button>'
        }
    }
   
    
    function playMusic4() {
        console.log("play clicked");
        if (playing == false) {
            audio_track4.play()
            playing = true;
            console.log("playing")
            play_button4.innerHTML = '<button class=" audio-btn text-center" aria-label="Pause audio button"><i class="far fa-pause-circle audio-block centered"></i></button>'
        } else {
            audio_track4.pause()
            playing = false;
            console.log("paused")
            play_button4.innerHTML = '<button class="audio-btn text-center" aria-label="Play audio button"><i class="far fa-play-circle"></i></button>'
        }
    }


    function playMusic5() {
        console.log("play clicked");
        if (playing == false) {
            audio_track5.play()
            playing = true;
            console.log("playing")
            play_button5.innerHTML = '<button class=" audio-btn text-center" aria-label="Pause audio button"><i class="far fa-pause-circle audio-block centered"></i></button>'
        } else {
            audio_track5.pause()
            playing = false;
            console.log("paused")
            play_button5.innerHTML = '<button class="audio-btn text-center" aria-label="Play audio button"><i class="far fa-play-circle"></i></button>'
        }
    }


    function playMusic6() {
        console.log("play clicked");
        if (playing == false) {
            audio_track6.play()
            playing = true;
            console.log("playing")
            play_button6.innerHTML = '<button class=" audio-btn text-center" aria-label="Pause audio button"><i class="far fa-pause-circle audio-block centered"></i></button>'
        } else {
            audio_track6.pause()
            playing = false;
            console.log("paused")
            play_button6.innerHTML = '<button class="audio-btn text-center" aria-label="Play audio button"><i class="far fa-play-circle"></i></button>'
        }
    }


    function playMusic7() {
        console.log("play clicked");
        if (playing == false) {
            audio_track7.play()
            playing = true;
            console.log("playing")
            play_button7.innerHTML = '<button class=" audio-btn text-center" aria-label="Pause audio button"><i class="far fa-pause-circle audio-block centered"></i></button>'
        } else {
            audio_track7.pause()
            playing = false;
            console.log("paused")
            play_button7.innerHTML = '<button class="audio-btn text-center" aria-label="Play audio button"><i class="far fa-play-circle"></i></button>'
        }
    }


    function playMusic8() {
        console.log("play clicked");
        if (playing == false) {
            audio_track8.play()
            playing = true;
            console.log("playing")
            play_button8.innerHTML = '<button class=" audio-btn text-center" aria-label="Pause audio button"><i class="far fa-pause-circle audio-block centered"></i></button>'
        } else {
            audio_track8.pause()
            playing = false;
            console.log("paused")
            play_button8.innerHTML = '<button class="audio-btn text-center" aria-label="Play audio button"><i class="far fa-play-circle"></i></button>'
        }
    }   


    function playMusic9() {
        console.log("play clicked");
        if (playing == false) {
            audio_track9.play()
            playing = true;
            console.log("playing")
            play_button9.innerHTML = '<button class=" audio-btn text-center" aria-label="Pause audio button"><i class="far fa-pause-circle audio-block centered"></i></button>'
        } else {
            audio_track9.pause()
            playing = false;
            console.log("paused")
            play_button9.innerHTML = '<button class="audio-btn text-center" aria-label="Play audio button"><i class="far fa-play-circle"></i></button>'
        }
    }


    function playMusic10() {
        console.log("play clicked");
        if (playing == false) {
            audio_track10.play()
            playing = true;
            console.log("playing")
            play_button10.innerHTML = '<button class=" audio-btn text-center" aria-label="Pause audio button"><i class="far fa-pause-circle audio-block centered"></i></button>'
        } else {
            audio_track10.pause()
            playing = false;
            console.log("paused")
            play_button10.innerHTML = '<button class="audio-btn text-center" aria-label="Play audio button"><i class="far fa-play-circle"></i></button>'
        }
    }


    function playMusic11() {
        console.log("play clicked");
        if (playing == false) {
            audio_track11.play()
            playing = true;
            console.log("playing")
            play_button11.innerHTML = '<button class=" audio-btn text-center" aria-label="Pause audio button"><i class="far fa-pause-circle audio-block centered"></i></button>'
        } else {
            audio_track11.pause()
            playing = false;
            console.log("paused")
            play_button11.innerHTML = '<button class="audio-btn text-center" aria-label="Play audio button"><i class="far fa-play-circle"></i></button>'
        }
    }


    function playMusic12() {
        console.log("play clicked");
        if (playing == false) {
            audio_track12.play()
            playing = true;
            console.log("playing")
            play_button12.innerHTML = '<button class=" audio-btn text-center" aria-label="Pause audio button"><i class="far fa-pause-circle audio-block centered"></i></button>'
        } else {
            audio_track12.pause()
            playing = false;
            console.log("paused")
            play_button12.innerHTML = '<button class="audio-btn text-center" aria-label="Play audio button"><i class="far fa-play-circle"></i></button>'
        }
    }


    function playMusic13() {
        console.log("play clicked");
        if (playing == false) {
            audio_track13.play()
            playing = true;
            console.log("playing")
            play_button13.innerHTML = '<button class=" audio-btn text-center" aria-label="Pause audio button"><i class="far fa-pause-circle audio-block centered"></i></button>'
        } else {
            audio_track13.pause()
            playing = false;
            console.log("paused")
            play_button13.innerHTML = '<button class="audio-btn text-center" aria-label="Play audio button"><i class="far fa-play-circle"></i></button>'
        }
    }


    function playMusic14() {
        console.log("play clicked");
        if (playing == false) {
            audio_track14.play()
            playing = true;
            console.log("playing")
            play_button14.innerHTML = '<button class=" audio-btn text-center" aria-label="Pause audio button"><i class="far fa-pause-circle audio-block centered"></i></button>'
        } else {
            audio_track14.pause()
            playing = false;
            console.log("paused")
            play_button14.innerHTML = '<button class="audio-btn text-center" aria-label="Play audio button"><i class="far fa-play-circle"></i></button>'
        }
    }