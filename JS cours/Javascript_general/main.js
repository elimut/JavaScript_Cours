/*
alert("Une première instruction js");
alert("Une deuxième instruction js");
*/



/*
window.prompt: 

*console.log(userAge);
*Si vous exécutez cette instruction, votre navigateur va ouvrir une petite fenêtre avec un champ de texte en vous posant cette question « Quel âge avez-vous ? » Vous allez entrer par exemple « 22 » dans le champ, valider, et la console affichera alors "22".
window.prompt a pour fonction de demander quelque chose à l'utilisateur, et de renvoyer la réponse ainsi reccueillie sous forme de String. Ici nous stockons directement cette valeur de retour dans la variable userAge pour ensuite l'afficher.
window.prompt renvoie toujours, toujours une String.
*voir exos MM
 */



 /*
 Objet date:

*L’objet Date est un objet intégré en JavaScript qui stocke la date et l’heure. Il offre un *certain nombre de méthodes *intégrées de formater et de gérer ces données.
Par défaut, une nouvelle instance Date sans arguments crée un objet correspondant à la date et à l’heure actuelle. Il sera créé en fonction des paramètres du système de l’ordinateur *actuellement *utilisé.
Une fois que nous avons une *date, nous pouvons accéder à tous les composants de la date *avec diverses méthodes intégrées. Les *méthodes *retourneront chaque partie de la *date en fonction du *fuseau *horaire local. Chacune de ces *méthodes commence par get *et *renvoie le numéro correspondant. *Le tableau ci-dessous *détaille *les méthodes get de l’objet Date.
*Voir exo MM
 */



/*
elementToString:

 *element.toString: convertir un nombre en une chaîne de caractère en utilisant la fonction toString(base) qui permet de convertir un nombre donné en une chaîne de caractère. La base en paramètre est optionnelle, qui peut être utilisée pour spécifier la base  dans laquelle le nombre sera représenté.
 *Exo MM
*/



/*
typeof:

*alert("Variable x : " + typeof(x) +
    "\nVariable y : " + typef(y) +
    "\nVariable a : " + typeof(a));
*\n -> retour à la ligne
affichage du texte "" 
+ : concatène texte + type de la variable (résultat de la fonction typeOf)


let heure = 19;
console.log(typeof(heure));
if (typeof(heure) == "number" == true) {
    alert("c'est le matin");
}
*/


/*
document.getElementById(id):

Une note pour les plus curieux d’entre vous : vous pouvez retenir
que document.getElementById(id) nous permet d’accéder à l’élément HTML qui possède
l’id précisé. Ensuite, innerHTML nous permet d’injecter du texte dans l’élément.
par typeof.
*/





/*
fonction:


function name(param){
    code exécuté
}


/*Calcul de surface:
function calculSurface(longueur, largeur){
    let resultat = longueur * largeur;
    console.log(resultat);
}
calculSurface(10, 3);
ou:                                   
function calculSurface(longueur, largeur){
    return longueur * largeur;
}
console.log(calculSurface(10, 3));
->console log pour afficher

const calculSurface(longueur, largeur) => {
    console.log(longueur * largeur);
}
->retrait mot function: => et const
*/



/*
Array:

Array.push():

Reprenez tablo qui contient 1, 2 et 3 de l'exercice précédent,
Ajoutez une ligne de code qui ajoute la valeur 13 à la fin du tableau,
Ajoutez une autre ligne de code qui ajoute la valeur 14 à la fin du tableau,
let tablo = [1, 2, 3];
tablo.push(13);
tablo.push(14);



Array.splice():

Reprenez tablo qui contient 1, 2 et 3 de l'exercice précédent
Accédez au 2ème élément du tableau tablo et rangez la valeur dans une variable nommée item
Remplacez le 2ème élément du tableau par le nombre 5:
let tablo = [1, 2, 3];
let item = tablo[1];
tablo.splice(1, 1, 5);


*/




function puissance(x, n){
    for (let i=0; i<n; i++)
    {
       return x^n;
    }
}

/* 
Objet:

/Exercice :
création constructeur objet,
cet objet doit posséder plusieurs propriétés : titre,console, année,
le jeu mario bros,
annee de sortie sur chaque console,
faire instance de l'objet avec mario bross est sorti sur en telle année.
*/

function Jeux(titre, console, annee) {
    this.titre = titre;
    this.console = console;
    this.annee = annee;
}

let superMarioBros = new Jeux("Super Mario Bros", "Nintendo", 1985);
let marioBros = new Jeux("Mario Bros", "Nintendo", 1983);
let superMarioBros3 = new Jeux("Super Mario Bros .3", "Nintendo", 1988);
let newSuperU = new Jeux("New Super Mario Bros. U", "Wii", 2012);
let superMario64 = new Jeux("Super Mario 64", "Nintedo 64", 1996);
let superMarioWorld = new Jeux("Super Mario World", "Super Nintendo", 1990);
let superMarioBrosTheLost = new Jeux("Super Mario Bros.: The Lost Levels", "Nintendo", 1986);
let newSuperMarioBrosu = new Jeux("New Super Mario Bros. U Deluxe", "Switch", 2019);
let newsuperMarioBros = new Jeux("New Super Mario Bros", "Wii", 2009);
let superMarioBros2 = new Jeux("Super Mario Bros. 2", "Nintendo", 1988);

console.log(superMarioBros);
console.log(`${superMarioBros.titre} est sorti sur ${superMarioBros.console} en ${superMarioBros.annee}`);
console.log(superMarioBros.titre + " " + "est sorti sur" + " " + superMarioBros.console + " " + superMarioBros.annee)


/*création d'objets dans un objet*/
let maCollection = {...{superMarioBros}, ...{marioBros}, ...{superMarioBros3}, ...{newSuperU}};
/*spread operator*/
console.log(maCollection);

for (const key in maCollection){
    console.log(maCollection[key]);
}
/*key = attribut // maCollection[key]->dynamique on évite maCollection.propriété*/

/*méthode map sur objet : pour chaque objet de l' objet maCollection, créer une div qui aura comme h2: nom du jeu, h3: nom de la console, et h3: année de sortie. Div qui doit appraître sur HTML.
*/

/*méthiode document.createElement() = créer un nouvel élément
let exo = document.createElement("h2");
précise nom balise en paramètre, élément créé
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
*/

// let maCollection1 = maCollection.map("titre");
// console.log(maCollection1);
// let affichage = document.createElement("h2");
// affichage.innerHTML = maCollection1;
// document.querySelector("div").appendChild(affichage);
  



let affichage = new Map();
affichage.set(maCollection);
console.log(affichage);
let affichage1 = document.createElement("h2");
affichage1.innerHTML = affichage;
document.querySelector("div").appendChild(affichage1);
  