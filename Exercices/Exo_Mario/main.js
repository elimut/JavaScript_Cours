function Jeux(titre, console, annee) {
this.titre = titre;
this.console = console;
this.annee = annee;
}
//constructeur objet

let jeux1 = new Jeux("Super Mario Bros", "Nintendo", 1985);
let jeux2 = new Jeux("Mario Bros", "Nintendo", 1983);
let jeux3 = new Jeux("Super Mario Bros .3", "Nintendo", 1988);
let jeux4 = new Jeux("New Super Mario Bros. U", "Wii", 2012);
let jeux5 = new Jeux("Super Mario 64", "Nintedo 64", 1996);
let jeux6 = new Jeux("Super Mario World", "Super Nintendo", 1990);
let jeux7 = new Jeux("Super Mario Bros.: The Lost Levels", "Nintendo", 1986);
let jeux8 = new Jeux("New Super Mario Bros. U Deluxe", "Switch", 2019);
let jeux9 = new Jeux("New Super Mario Bros", "Wii", 2009);
let jeux10 = new Jeux("Super Mario Bros. 2", "Nintendo", 1988);
// console.log(superMarioBros);
// console.log(`${superMarioBros.titre} est sorti sur ${superMarioBros.console} en ${superMarioBros.annee}`);

/*Créer un objet contenant les objets précédents:*/
let maCollection = {...{jeux1}, ...{jeux2}, ...{jeux3}, ...{jeux4},...{jeux5}};
/*spread operator*/
console.log(maCollection);

for (const key in maCollection){
    console.log(maCollection[key]);
}
/*affiche titre des propriété = key dans maCollection
key = attribut
maCollection[key]->dynamique on évite maCollection.propriété
    
*Faire méthode map sur objet : pour chaque objet de l' objet maCollection, créer une div qui aura comme h2: nom du jeu, h3: nom de la console, et h3: année de sortie. Div qui doit appraître sur HTML.
    méthode document.createElement() = créer un nouvel élément
let exo = document.createElement("h2");
    création h2, précise nom balise en paramètre, élément créé
exo.innerText = "hello";
    ajout de texte, inner text car texte et non balises, innerHTML plutôt quand la div va contenir d'autres balises
exo.style.color = "red";
exo.classList.add("maClasse");
    modification style, ajout classe
document.querySelector("div").appendChild(exo);
    permet d'ajouter la création dans le DOM, méthode qui permet d'ajouter un élément enfant dans un élémnet sélectionné
    le nouvel élément est ajouté à la fin
let exo = document.createElement("h2");
exo.innerHTML = "hello";
document.querySelector("div").appendChild(exo);
    méthode map compatible avec tableaux,ne peut pas être utilisée comme sur un tableau avec objet.
    recuperer val objet comme tableau : Object.value*/
Object.values(maCollection).map(
(Jeux, index, key) => {
    console.log(Jeux.console);
    console.log(Jeux.name);
    console.log(Jeux.year);
    console.log("jeux" + (index+=1));
//recup objet
    let affichage1 = document.createElement("h2");
    affichage1.innerHTML = Jeux.titre;
    affichage1.style.color = "green";
    document.querySelector(".mario").appendChild(affichage1);
    let affichage2 = document.createElement("h3");
    affichage2.innerHTML = `Console: ${Jeux.console}`;
    affichage2.style.color = "black";
    affichage2.style.margin = "10px";
    document.querySelector(".mario").appendChild(affichage2);
    let affichage3 = document.createElement("h3");
    affichage3.innerHTML = `Année de sortie: ${Jeux.annee}`;
    affichage3.style.color = "black";
    affichage3.style.margin = "10px";
    document.querySelector(".mario").appendChild(affichage3);
    let button1 = document.createElement("button");
    button1.setAttribute("class", "open");
    button1.setAttribute("id", `${"jeux" + (index+=1)}`)
    button1.innerText = "En savoir plus";
    document.querySelector(".mario").appendChild(button1);
    let popUp = document.createElement("div");
    popUp.innerText = "a remplir"
    popUp.setAttribute("id", "pop");
    popUp.style.visibility = "hidden";
    popUp.style.border = "1px solid green";
    popUp.style.width = "40%";
    popUp.style.height = "60px";
    popUp.style.backgroundColor = "white";
    document.querySelector(".mario").appendChild(popUp);
});
// function openPop() {
//     document.getElementById("pop").style.display = "block";
// }
// function closePop() {
//     document.getElementById("pop").style.display = "none";
// }
button1 = document.getElementsByClassName('open');
document.querySelectorAll(".open").forEach(element => {
    // console.log(element.id);
    element.addEventListener("click", (event) => {
        let key = event.target.id;
        console.log(maCollection[key]);
        // button1.addClass('active');
        // openPop();
        document.getElementById("pop").style.visibility = "visible";
    });
});
// voir pour active;
//  un seul s'affiche
// voir function pour open close
// voir close
// faire style
