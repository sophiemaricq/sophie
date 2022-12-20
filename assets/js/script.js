$(document).ready(function() {
    var playing = false;
    


    $('.audio-btn').click(function() {
        if (playing == false) {
            document.getElementById('myAudio').play();
            playing = true;
            $(this).text("stop sound");

        } else {
            document.getElementById('myAudio').pause();
            playing = false;
            $(this).text("restart sound");
        }
    });

});
