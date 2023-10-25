let playlist = ["musique/Hold_On_a_Minute.mp3", "musique/Blue_Skies.mp3","musique/Bob Marley - Buffalo soldier.mp3","musique/Castles Made of Sand.mp3","musique/FAUVE ≠ LES HAUTES LUMIÈRES.mp3"];
let index=0;

function init() {       //intialise le tableau let playlist (liste de chanson)
    document.getElementById('lecteur').src = playlist[index];

}

function lecture_pause() { //bouton lecture pause
   
    let autoLecture=  document.getElementById('lecteur');
    autoLecture.autoplay=true;

    if (lecteur.paused) {
        lecteur.play();
    }
    else {
        lecteur.pause()
    }

}




function volume_moins() {

    if (document.getElementById("lecteur").volume.toFixed(1) > 0) { // fixe le volume afin qu'il ne tombe 
        document.getElementById("lecteur").volume -= 0.1;

        document.getElementById("range").value = document.getElementById("lecteur").volume;
    }
}
function volume_plus() {
    if (document.getElementById("lecteur").volume.toFixed(1) < 1) {
        
        document.getElementById("lecteur").volume += 0.1
        document.getElementById("range").value = document.getElementById("lecteur").volume;

    }
}

function volumeChange() {

    document.getElementById("lecteur").volume = document.getElementById("range").value;
}

function button_suivant(){

    


      if (index==playlist.length-1){
        index = 0;
  } else {
    index++; //increment index de + 1 a chaque onclick
   
  }
  document.getElementById('lecteur').src = playlist[index];

}
function button_precedent(){

    if (index == 0){
        index = playlist.length;

}   

index--;
    document.getElementById('lecteur').src = playlist[index];
    
}



function progressionChange(){

   let player = document.getElementById("range_musique").value;
}