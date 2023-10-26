let playlist = [
    {
        titre: "Hold_On_a_Minute",
        artiste: "Silent Partner",
        musique: "musique/Hold_On_a_Minute.mp3",
        image: "image/1.jpg",

    },
    {
        titre: "Blue Skies",
        artiste: "Silent Partner",
        musique: "musique/Blue_Skies.mp3",
        image: "image/2.jpg",

    },

    {
        titre: "Cartoon hoedown",
        artiste: "Silent Partner",
        musique: "musique/Cartoon_Hoedown.mp3",
        image: "image/3.jpg",

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

function lecture_pause() { //bouton lecture pause

    let autoLecture = document.getElementById('lecteur');
    autoLecture.autoplay = true;

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


function galerie_image() {


    document.getElementById('pochette')

    let img = document.createElement('img');
    img.src = "image/annie.jpg";

    document.getElementById('pochettes').append(img);


}

