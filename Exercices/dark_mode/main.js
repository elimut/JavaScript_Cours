const bouton = document.querySelector("#dark");
const darkMode = document.querySelector("body");
let dark = localStorage.getItem("dark", "true");

bouton.addEventListener("click", moveDarkMode);
// création événement sur bouton qui appelle fonction moveDarkMode

if(dark === "true"){
    DarkModeOn();
}

// fonction moveDarkMode qui en fonction du clic si active retrait...
function moveDarkMode(){
    if (darkMode.classList == "active"){
        DarkModeOff();
    }
    else{
        DarkModeOn();
    };
}

// function ajout darkMode et retrait, application class ou non et enregistrement de l'information au stockage local
function DarkModeOff(){
    darkMode.setAttribute("class", "" );
    window.localStorage.setItem("dark", "false");
}
function DarkModeOn(){
    darkMode.setAttribute("class", "active");
    window.localStorage.setItem("dark", "true");
}

// https://www.alsacreations.com/article/lire/1402-web-storage-localstorage-sessionstorage.html
// https://www.youtube.com/watch?v=JOik3MMZ_PY&ab_channel=NadfriJS




