

function Jeux(titre, console, annee) {
this.titre = titre;
this.console = console;
this.annee = annee;
}
//constructeur objet
function randombg(element){
    var random= Math.floor(Math.random()*2);
    var bigSize = ["url('img/pop1.png')",
                   "url('img/pop2.png')"
                ];
    element.style.backgroundImage=bigSize[random];
}
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
    let container = document.createElement("div");
    let affichage1 = document.createElement("h2");
    affichage1.innerHTML = Jeux.titre;
    affichage1.style.color = "green";
    container.appendChild(affichage1);
    let affichage2 = document.createElement("h3");
    affichage2.innerHTML = `Console: ${Jeux.console}`;
    affichage2.style.color = "black";
    affichage2.style.margin = "10px";
    container.appendChild(affichage2);
    let affichage3 = document.createElement("h3");
    affichage3.innerHTML = `Année de sortie: ${Jeux.annee}`;
    affichage3.style.color = "black";
    affichage3.style.margin = "10px";
    container.appendChild(affichage3);
    let button1 = document.createElement("button");
    button1.setAttribute("class", "open");
    button1.setAttribute("id", `${index}`)
    // dollar entre deux bactiq=< lit remplace dollar index par valeur de l'index, concatènation
    button1.innerText = "En savoir plus";
    // button1.style.position = "relative";
    button1.style.borderRadius = "50px";
    button1.style.width = "250px";
    button1.style.height = "40px";
    // button1.style.backgroundImage = "url('img/pop.png')";
    container.appendChild(button1);
    document.querySelector(".mario").appendChild(container);
});
document.querySelectorAll(".open").forEach(element => {
    // console.log(element.id);
    element.addEventListener("click", (event) => {
        let key = "jeux" + event.target.id;
        // console.log(maCollection[key]);
        document.body.style.backgroundColor = "rgb("+Math.floor(Math.random()*256)+","+ Math.floor(Math.random()*256)+","+ Math.floor(Math.random()*256)+")";
        let popUp = document.createElement("div");
        popUp.style.fontSize = "15px";
        popUp.style.fontWeight = "bold";
        popUp.innerText = `${maCollection[key].titre} 
            
            Dans la culture populaire, Mario est connu pour être plombier. Cependant, Miyamoto aurait d'abord choisi de faire de Mario un charpentier dans Donkey Kong. C'est dans le jeu Mario Bros. sorti sur borne d'arcade en 1983 qu'il devint un plombier, combattant les créatures des égouts de New York avec son frère Luigi.`;
        popUp.setAttribute("class", "pop");
        popUp.style.border = "1px solid green";
        popUp.style.padding = "10px"
        popUp.style.width = "40%";
        popUp.style.height = "220px";
        popUp.style.zIndex = "1";
        popUp.style.position = "absolute";
        popUp.style.top = `${10 + 25 * (event.target.id - 1)}%`;
        popUp.style.borderRadius = "20px";
        popUp.style.backgroundColor = "white";
        popUp.style.backgroundImage = randombg(popUp);
        popUp.style.backgroundSize = "50px";
        popUp.style.backgroundRepeat = "no-repeat";
        popUp.style.backgroundPosition = "25% 75%"
        document.querySelector(".mario").appendChild(popUp);
        popUp.addEventListener("click", (event) => {
            popUp.style.visibility = "hidden";
        });
    });
});
const btn3 = document.getElementById("3");
console.log(" btn3 ",btn3);
// retirer button 1
// img
//https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
//paragraphe pops
// faire style
// responsive
//carousel carte


// pour cet apres midi avec la methode fetch et les promesse sur lesquels vous avez fait une veille en combinent ce que vous avez vu cette semaine pour pouvoir recuperer la valeur d'un input faite une page qui affiche la meteo de la ville que l'utilisateur a entrer dans l'input en utilisant l'api meteo de votre choix