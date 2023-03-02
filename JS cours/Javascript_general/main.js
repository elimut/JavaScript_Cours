/*
alert("Une première instruction js");
alert("Une deuxième instruction js");
*/


/*
window.prompt: 

*console.log(userAge);
 *Si vous exécutez cette instruction, votre navigateur va ouvrir une petite fenêtre avec un champ de texte en vous posant cette question « Quel âge avez-vous ? » Vous allez entrer par exemple « 22 » dans le champ, valider, et la console affichera alors "22".
 *window.prompt a pour fonction de demander quelque chose à l'utilisateur, et de renvoyer la réponse ainsi reccueillie sous forme de String. Ici nous stockons directement cette valeur de retour dans la variable userAge pour ensuite l'afficher.
 *window.prompt renvoie toujours, toujours une String.
 Exos MM
 */



 /*
 Objet date:

 *L’objet Date est un objet *intégré en JavaScript qui stocke *la *date et l’heure. Il offre un *certain nombre de méthodes *intégrées de formater et de *gérer ces données.
 Par défaut, une nouvelle *instance Date sans arguments *crée un *objet correspondant à *la date et à l’heure actuelle. *Il sera *créé en fonction des *paramètres du système de *l’ordinateur *actuellement *utilisé.
 Une fois que nous avons une *date, nous pouvons accéder à *tous *les composants de la date *avec diverses méthodes *intégrées. Les *méthodes *retourneront chaque partie de la *date en fonction du *fuseau *horaire local. Chacune de ces *méthodes commence par get *et *renvoie le numéro correspondant. *Le tableau ci-dessous *détaille *les méthodes get de l’objet Date.
 *Exo MM
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





