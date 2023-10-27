let playlist = [
    {
        titre: "Hold On a Minute",
        artiste: "Silent Partner",
        musique: "musique/Hold_On_a_Minute.mp3",
        image: "image/1.jpg"

    },
    {
        titre: "Blue Skies",
        artiste: "Silent Partner",
        musique: "musique/Blue_Skies.mp3",
        image: "image/2.jpg"

    },

    {
        titre: "Cartoon hoedown",
        artiste: "Silent Partner",
        musique: "musique/Cartoon_Hoedown.mp3",
        image: "image/3.jpg"

    },
]
let index = 0;


function init() {       //intialise le tableau let playlist (liste de chanson)

    document.getElementById('lecteur').src = playlist[index].musique;
    
    for (let i = 0; i < playlist.length; i++) {
    const creationarticle = document.createElement("article");
    creationarticle.addEventListener("click", function () { clickcard(i); });
    creationarticle.classList.add("musique");
    creationarticle.innerHTML = '<img src="' + playlist[i].image + '" "</img><h2>' + playlist[i].titre + '</h2><h3>' + playlist[i].artiste + '</h3>';
    document.getElementById("pochette").appendChild(creationarticle);
    }
}    

function clickcard(i) {
    document.getElementById('lecteur').src = playlist[i].musique;
    index = i;
    lecteur.play();
    
    const nomArtiste=document.querySelector(".lecteur h2");  //recupere le h2 du parent lecteur afin de cibler par la const nom Artiste
    nomArtiste.textContent = playlist[i].artiste; // recupere le nom de l'artiste de dans le tableau en affichant grace a textContent

    const nomChanson =document.querySelector(".lecteur h3");
    nomChanson.textContent = playlist[i].titre;
}



function lecture_pause() { //bouton lecture pause

    let autoLecture = document.getElementById('lecteur');
    autoLecture.autoplay = true;

    if (lecteur.paused) {
        lecteur.play();
        playPause.Btn.textContent ="Pause";
    }
    else {
        lecteur.pause()
        playPause.Btn.textContent ="Play";
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

function button_suivant() {

    if (index == playlist.length - 1) {
        index = 0;
    } else {
        index++; //increment index de + 1 a chaque onclick

    }
    document.getElementById('lecteur').src = playlist[index].musique;

}
function button_precedent() {

    if (index == 0) {
        index = playlist.length;

    }

    index--;
    document.getElementById('lecteur').src = playlist[index].musique;

}



function changeProgress() {
    document.getElementById("range_musique").value = lecteur.currentTime; //valeur de la barre s'aligne sur le temps du lecteur donc de la chanson
}
function changeDuration() {
    document.getElementById("range_musique").setAttribute("max", lecteur.duration); // change la valeur de l'attribue de range_musique  pour s'alingner sur la chanson donc la durée du lecteur
}

function progress() {
    document.getElementById("lecteur").currentTime = document.getElementById("range_musique").value
}

function fin_musique() { //boucle infini le lecteur  a la fin de la chanson grace a  ended dans html on lance la suivante en increment la playliste
    if (index < playlist.length - 1) {
        index++;

    }
    else {
        index == playlist.length - 1;
        index = 0;
    }
    document.getElementById('lecteur').src = playlist[index].musique /*FAIRE UN BOUTON*/
}



