
function init() {
	document.getElementById('lecteur').src="musique/Hold_On_a_Minute.mp3";
    document.getElementById('lecteur').src="musique/Blue_Skies.mp3";
}

function lecture_pause() {
    let lecteur = document.getElementById('lecteur');

    if (lecteur.paused){
        lecteur.play();
    }
else {
    lecteur.pause()
}
}

function volume_moins(){

document.getElementsByClassName("range");
document.getElementById("lecteur").volume -=0.1

}

function volume_plus(){
document.getElementsByClassName("range");
document.getElementById("lecteur").volume +=0.1

}