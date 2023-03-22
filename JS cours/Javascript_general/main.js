/*
alert("Une première instruction js");
alert("Une deuxième instruction js");
*/



/*
window.prompt: 
    *Si vous exécutez cette instruction, votre navigateur va ouvrir une petite fenêtre avec un champ de texte en vous posant cette question « Quel âge avez-vous ? » Vous allez entrer par exemple « 22 » dans le champ, valider, et la console affichera alors "22".
    window.prompt a pour fonction de demander quelque chose à l'utilisateur, et de renvoyer la réponse ainsi reccueillie sous forme de String. Ici nous stockons directement cette valeur de retour dans la variable userAge pour ensuite l'afficher.
    window.prompt renvoie toujours, toujours une String.
    ->voir exos MM
*/



/*
Objet date:
    *L’objet Date est un objet intégré en JavaScript qui stocke la date et l’heure. Il offre un *certain nombre de méthodes *intégrées de formater et de gérer ces données.
    Par défaut, une nouvelle instance Date sans arguments crée un objet correspondant à la date et à l’heure actuelle. Il sera créé en fonction des paramètres du système de l’ordinateur *actuellement *utilisé.
    Une fois que nous avons une *date, nous pouvons accéder à tous les composants de la date *avec diverses méthodes intégrées. Les *méthodes *retourneront chaque partie de la *date en fonction du *fuseau *horaire local. Chacune de ces *méthodes commence par get *et *renvoie le numéro correspondant. *Le tableau ci-dessous *détaille *les méthodes get de l’objet Date.
    ->Voir exo MM
*/



/*
elementToString:
    *element.toString: convertir un nombre en une chaîne de caractère en utilisant la fonction toString(base) qui permet de convertir un nombre donné en une chaîne de caractère. La base en paramètre est optionnelle, qui peut être utilisée pour spécifier la base  dans laquelle le nombre sera représenté.
    ->Voir exo MM
*/



/*
typeof:

*alert("Variable x : " + typeof(x) +
    "\nVariable y : " + typef(y) +
    "\nVariable a : " + typeof(a));
    //\n -> retour à la ligne
    //affichage du texte "" 
    //+ : concatène texte + type de la variable (résultat de la fonction typeOf)


    *Afficher dans console le type la valeur 19, puis si ce type de valeur est un number doit afficher en alert c'est le matin:
let heure = 19;
console.log(typeof(heure));
if (typeof(heure) == "number" == true) {
    alert("c'est le matin");
}
*/


/*
document.getElementById(id):
    *Une note pour les plus curieux d’entre vous : vous pouvez retenir
    que document.getElementById(id) nous permet d’accéder à l’élément HTML qui possède
    l’id précisé. Ensuite, innerHTML nous permet d’injecter du texte dans l’élément.
    par typeof.
    ->exo MM
*/



/*
fonction et fonction fléchée:
*function name(param){
    code exécuté
}

    *Exercices: 

    *calcul de surface:
function calculSurface(longueur, largeur){
    let resultat = longueur * largeur;
    console.log(resultat);
}
calculSurface(10, 3);
    ->ou:                                   
function calculSurface(longueur, largeur){
    return longueur * largeur;
}
console.log(calculSurface(10, 3));
    //console log pour afficher
    //ou en fléchée:
const calculSurface(longueur, largeur) => {
    console.log(longueur * largeur);
}
    ->retrait mot function: => et const
*/


/*
Array:

*Boucle for:

    *Exercices:

    *Afficher tous les éléments d' un tableau avec une boucle for:
let exempleArray = ["A", "B", "C"];
for(let i = 0; i < exempleArray.length; i++ ){
    console.log(exempleArray[i]);
};

    *Avec boucle for, tant que la dernière valeur est < 50, on ajoute la somme des deux dernières valeurs du tableau:
let fibo = [0, 1];
for (i=1; fibo[i-1] + fibo[i] < 50; i++){
    fibo.push(fibo[i-1] + fibo[i]);    
};
console.log(fibo);
    ->for(init, cdt arrêt, exécution)
    ->fibo[] = valeur
    ->i = 1 car ne pas aller avant index 0


*Array.push() (ajout élément fin de tableau):

    *Exercices: 

    *Reprenez tablo qui contient 1, 2 et 3 de l'exercice précédent,
    Ajoutez une ligne de code qui ajoute la valeur 13 à la fin du tableau,
    Ajoutez une autre ligne de code qui ajoute la valeur 14 à la fin du tableau:
let tablo = [1, 2, 3];
tablo.push(13);
tablo.push(14);
monArray.push(4,5);
    ->Méthode push prend en paramètre ce qu' on souhaite mettre à la fin.

    *Faire push de la somme des deux dernières valeurs:
let monArray1 =[0, 1, 2, 3];
monArray1.push(4,5);
console.log(monArray1);
let somme = monArray1[4] + monArray1[5];
monArray1.push(somme);
    ->ou
monArray1.push(monArray1[4] + monArray1[5]);
console.log(monArray1);


/*Array.splice():

    *Exercices:

    *Reprenez tablo qui contient 1, 2 et 3 de l'exercice précédent
    Accédez au 2ème élément du tableau tablo et rangez la valeur dans une variable nommée item
    Remplacez le 2ème élément du tableau par le nombre 5:
let tablo = [1, 2, 3];
let item = tablo[1];
tablo.splice(1, 1, 5);

*/


/* 
Objet:
*var apprenant = {
    nom(attribut) : "DOE"(valeur),
    prénom : "John",
};
->objet nom = apprenant qui contient deux attributs nom et prenom de type string
->objet littéral
->log valeur attribut nom de l'objet:
    console.log(apprenant.nom); => valeur attribut nom
->log de l'objet:
    console.log(apprenant);


    *Exercices:

    *création constructeur objet, cet objet doit posséder plusieurs propriétés : titre,console, année,
    le jeu mario bros,annee de sortie sur chaque console, faire instance de l'objet avec mario bross est sorti sur en telle année.
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
    ->ou 
console.log(superMarioBros.titre + " " + "est sorti sur" + " " + superMarioBros.console + " " + superMarioBros.annee)
    *Créer un objet contenant les objets précédents:
let maCollection = {...{superMarioBros}, ...{marioBros}, ...{superMarioBros3}, ...{newSuperU}};
    ->spread operator
console.log(maCollection);
for (const key in maCollection){
    console.log(maCollection[key]);
}
    ->affiche titre des propriété = key dans maCollection
    ->key = attribut // maCollection[key]->dynamique on évite maCollection.propriété.
    *Faire méthode map sur objet : pour chaque objet de l' objet maCollection, créer une div qui aura comme h2: nom du jeu, h3: nom de la console, et h3: année de sortie. Div qui doit appraître sur HTML.
    ->méthode document.createElement() = créer un nouvel élément
let exo = document.createElement("h2");
    ->précise nom balise en paramètre, élément créé
exo.innerText = "hello";
    ->ajout de texte, inner text car texte et non balises, innerHTML plutôt quand la div va contenir d'autres balises
exo.style.color = "red";
exo.classList.add("maClasse");
    ->modification style, ajout classe
document.querySelector("div").appendChild(exo);
    ->permet d'ajouter la création dans le DOM, méthode qui permet d'ajouter un élément enfant dans un élémnet sélectionné
    le nouvel élément est ajouté à la fin
=>  let exo = document.createElement("h2");
    exo.innerHTML = "hello";
    document.querySelector("div").appendChild(exo);
->méthode map compatible avec tableaux,ne peut pas être utilisée comme sur un tableau avec objet.
->recuperer val objet comme tableau : Object.value 
    Object.values(maCollection).map(
    (Jeux) => {
        console.log(Jeux.console)
        console.log(Jeux.name)
        console.log(Jeux.year)
        let affichage1 = document.createElement("h2");
        affichage1.innerHTML = Jeux.titre;
        affichage1.style.color = "green";
        document.querySelector("div").appendChild(affichage1);
        let affichage2 = document.createElement("h3");
        affichage2.innerHTML = `Console: ${Jeux.console}`;
        affichage2.style.color = "black";
        affichage2.style.margin = "10px";
        document.querySelector("div").appendChild(affichage2);
        let affichage3 = document.createElement("h3");
        affichage3.innerHTML = `Année de sortie: ${Jeux.annee}`;
        affichage3.style.color = "black";
        affichage3.style.margin = "10px";
        document.querySelector("div").appendChild(affichage3);
    }
);
->La méthode Object.entries() renvoie un tableau des paires de propriétés [key, value] énumérables d'un objet donné . C'est la même chose que l'itération avec une boucle for...in , sauf qu'une boucle for...in énumère également les propriétés de la chaîne de prototypes.
->L'ordre du tableau renvoyé par Object.entries() est le même que celui fourni par une boucle for...in .Si un ordre différent est nécessaire, le tableau doit être trié en premier, comme Object.entries(obj).sort((a, b) => a[0].localeCompare(b[0])); .

*let courses = {
    "fruits": [
      { "kiwis": 3,
        "mangues": 4,
        "pommes": null
      },
      { "panier": true },
    ],
    "legumes":
      { "patates": "amandine",
        "figues": "de barbarie",
        "poireaux": false
      }
};
console.log(courses);
for (const propertyOf(courses) in courses){
    document.getElementById("fruits").innerHTML = propertyOf(courses);
};
Object.entries(courses.legumes).map(
    (legumes) => {
        let affichage1 = document.createElement("li");
        affichage1.innerHTML = legumes.join(": ");
        affichage1.style.color = "green";
        document.querySelector("div").appendChild(affichage1);
    }
);



/*
Condition initiale "ou" :

*Exercice:

*var result = 8 % 2 > 0 || !(3 % 2 < 1);
->Condition décomposée en trois parties :
var result1 = 8 % 2 > 0,
result2 = !(3 % 2 < 1),
result3 = result1 || result2;
->La condition ainsi décomposée est déjà plus facile à cerner :
->Pour result1 on fait le calcul 8 % 2 = 0 et on obtient ainsi la comparaison 0 > 0 qui renvoie donc false.
->Pour result2 on fait le calcul 3 % 2 = 1 et on obtient ainsi la comparaison 1 > 1 qui renvoie donc false. En revanche là on constate que la condition est entourée de parenthèses et est précédée de l'opérateur NON, il nous faut donc inverser le résultat de la condition, ainsi, false devient true !
->Et pour terminer, dans result3, nous utilisons l'opérateur logique OU qui renvoie true si l'une des valeurs soumises vaut true elle aussi. Ainsi, false || true = true !*/







// let input = document.querySelector('input[type="email"]');
// récupere element input de type email, faisable en CSS

//let input = document.querySelector('input[type="text"]');
//problème plusieurs de type text
let input = document.querySelectorAll('input[type="text"]');
//renvoie tout les éléments input de type text, renvoie une liste
//En fonction des navigateurs renvoie un objet






