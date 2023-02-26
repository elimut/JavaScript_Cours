/*console.log("Hello world");
 *Exercice:
 *afficher dans console*/


/*let color;
 *création variable mot clef : let et nom : color
*color = "rouge";
 *assignation valeur rouge à variable color
*console.log(color); 
 *affichage contenu de la var *color
 *Exercice:
 *Déclarer une variable avec le mot-clé let ayant comme nom « color ».
 * Puis, sur la ligne suivante, *lui assigner la valeur « rouge * ».*/


/*const msg = "chat";
*console.log(msg);
 *Déclarer une variable « msg » avec le mot-clé `const` en lui assignant une
 *valeur de votre choix, telle qu'un message ou un nombre.
 *Afficher la valeur de cette variable dans la console du navigateur.
 *une constante doit être initialisée ne même temps que sa déclaration.
 *valeur immodifiable*/


/*let chat;
*chat = "bahamut";
*console.log(chat);
 *Déclarer une variable ayant pour type String.
 *Afficher la valeur de cette variable dans la console du navigateur.*/


/*let x = 66;
*let y = 12;
*let result = x + y;
*console.log(result);
 * Déclarer une variable `x` dont la valeur est égale à `66`.
 * Déclarer une variable `y` dont la valeur est égale à `12`.
 * Déclarer une variable `result` dont la valeur est égale à la somme de `x`
 et `y`.
 * Afficher la valeur de la variable `result` dans la console du navigateur.*/

/*let hello = "Bonjour";
*const userName = window.prompt("Quel est votre prénom ?");
*let interaction = "hello" + " " + userName;
*alert(interaction);
*const userName = window.prompt("Quels sont vos nom et prénom?");
*let userAnnee = window.prompt("Quelle est votre année de naissance ?");
*userAnnee = parseInt(userAnnee);
*console.log(userAnnee);
*const currentYear = 2023;
*let age = currentYear - userAnnee;
*let interaction = "Salut" + " " + userName + "," + "cette année tu as" + " "
*+ age + " " + "ans";
*alert(interaction);
 *projet - hello you
 *Nous allons construire ensemble un programme capable de vous saluer avec votre prénom.
 *Pour cela, nous allons d'abord devoir apprendre à interagir avec l'utilisateur.
 *window.prompt
 *Jusqu'à maintenant, nous ne connaissons qu'une seule fonction : console.log. Apprenons-en une deuxième :
 *const userAge = window.prompt("Quel âge avez-vous ?");
 *console.log(userAge);
 *Si vous exécutez cette instruction, votre navigateur va ouvrir une petite fenêtre avec un champ de texte en vous posant cette question « Quel âge avez-vous ? » Vous allez entrer par exemple « 22 » dans le champ, valider, et la console affichera alors "22".
 *window.prompt a pour fonction de demander quelque chose à l'utilisateur, et de renvoyer la réponse ainsi reccueillie sous forme de String. Ici nous stockons directement cette valeur de retour dans la variable userAge pour ensuite l'afficher.
 *window.prompt renvoie toujours, toujours une String. Même si l'utilisateur entre le nombre 12, window.prompt renverra en fait la chaîne "12".
 *Cette information aura son importance en temps voulu. Vous n'en aurez pas besoin pour cet exercice.
 *Nous voulons un programme qui demande à l'utilisateur son prénom, disons par exemple « Jacques », pour ensuite afficher dynamiquement dans la console "Salut Jacques !".
 *Petit indice : vous allez avoir besoin de concaténer des Strings.
 ***Bonus 1***
 *Notre programme va désormais demander à l'utiliseur son prénom, son nom de famille et son année de naissance. Nous afficherons ensuite dans la console la phrase suivante : "Salut Jacques Dumont, cette année tu 42 ans !"
 *Afin de calculer l'âge de l'utilisateur, vous allez avoir besoin d'effectuer un calcul à partir de l'année. Pour ce bonus, vous êtes autorisés à la spécifier en dur dans le code, sans forcément chercher à la dynamiser. Par exemple, en 2021, vous pourrez simplement déclarer une variable const currentYear = 2023;.
*/


/*let date = new Date();
*p1.innerHTML = date;
 *Sun Feb 26 2023 11:12:51 GMT*+0100 (heure normale d’Europe *centrale)
 *L’objet Date est un objet *intégré en JavaScript qui stocke *la *date et l’heure. Il offre un *certain nombre de méthodes *intégrées de formater et de *gérer ces données.
 *Par défaut, une nouvelle *instance Date sans arguments *crée un *objet correspondant à *la date et à l’heure actuelle. *Il sera *créé en fonction des *paramètres du système de *l’ordinateur *actuellement *utilisé.
 *Une fois que nous avons une *date, nous pouvons accéder à *tous *les composants de la date *avec diverses méthodes *intégrées. Les *méthodes *retourneront chaque partie de la *date en fonction du *fuseau *horaire local. Chacune de ces *méthodes commence par get *et *renvoie le numéro correspondant. *Le tableau ci-dessous *détaille *les méthodes get de l’objet Date.
*let jour = date.getDate();
*let mois = date.getMonth();
*let annee = date.getFullYear();
*console.log(jour);
*console.log(mois);
*console.log(annee);
*jour = jour.toString();
*mois = mois.toString();
*annee = annee.toString();
 *element.toString :  convertir un nombre en une chaîne de caractère en utilisant la fonction toString(base) qui permet de convertir un nombre donné en une chaîne de caractère. La base en paramètre est optionnelle, qui peut être utilisée pour spécifier la base  dans laquelle le nombre sera représenté.
*date = ( jour + " " + mois + " " + annee);
*console.log(date);
*p1.innerHTML = "Nous sommes le" + " " + date + ".";
 *Nous sommes le 26 1 2023.
 *->correction : 
*let date1 = new Date();
*let dateLocale = date1.*toLocaleDateString('fr-FR',{
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
});
 *La méthode toLocaleDateString() renvoie la partie «jour-mois-année » d’une date,formatée en fonction d’une locale et d’options.
*document.getElementById('p1').innerHTML =  'Nous sommes le' + " " + dateLocale +".";
 *ou
*p1.innerHTML = 'Nous sommes le' + " " + dateLocale +".";
 *Exercice:
 *Date du jour. Afficher dynamiquement la date du jour en Html sous la forme de nous sommes le mardi 23 évrier 2023.
*/


/*let HT = window.prompt("Saisissez le montant HT");
*HT = parseFloat(HT);
*let TVA = (20*(HT/100));
*let TTC = HT + TVA;
*p2.innerHTML = "Montant hors taxe:" + " " + HT + " " + "euros";
*p3.innerHTML = "Montant TVA:" + " " + TVA + " " + "euros ( 20%)";
*p4.innerHTML = "Montant TTC:" + " " + TTC + " " + "euros";
 *Exercice :
 *L' user saisit un montant HT, le résultat TTC s'affiche en HTML.
 Il faut réafficher toutes les informations.
 Le montant HT est à virgules.*/


/*let listeDesPassagers = [];
*let voiture = {
    marque : "",
    anneeDeFabrication : "",
    dateDAchat : "",
    listeDesPassagers 
}
*voiture.marque = "Renault";
*voiture.anneeDeFabrication = 2016;
*voiture.dateDAchat = "05/04/2017";
*listeDesPassagers[0] = "anneso";
*listeDesPassagers[1] = "bahamut";
*document.getElementById("li1").innerHTML = "Marque:" + " " + voiture["marque"];
*document.getElementById("li2").innerHTML = "Année de fabrication:" + " " + voiture["anneeDeFabrication"];
*document.getElementById("li3").innerHTML = "Date d' achat:" + " " + voiture["dateDAchat"];
*document.getElementById("li4").innerHTML = "Liste des passagers:" + " " + voiture.listeDesPassagers;
 *Marque: Renault
 *Année de fabrication: 2016
 *Date d' achat: 05/04/2017
 *Liste des passagers: anneso,bahamut
 *ÉNONCÉ
 Créer puis afficher en HTML un objet représentant une voiture :
 La marque de la voiture
 Son année de fabrication
 Sa date d'achat
 La liste des passagers (au moins 2), avec le prénom de chacun des passagers
 *DÉTAILS
 Afficher les propriétés de l'objet voiture sous la forme d'une liste HTML
 On peut représenter n'importe quelle date en JavaScript en donnant une
 chaîne de caractères à la création d'une instance de la classe Date :
 Représente la date du 5 avril 2014, format américain YYYY-MM-DD. var
 myBirthday = new Date('2014-04-05');
 *RAPPELS
 On peut stocker un objet dans un tableau tout comme on peut stocker un tableau dans un objet...*/


/* let colors = ["rouge", "bleu"];
console.log(colors[1]);
 *Déclarer une variable colors      contenant les valeurs "Rouge" et "Bleu".Afficher "Bleu" dans la console. En utilisant le tableau, hein !*/


/*let colors = new Array();
*colors[0] = "rouge";
*colors[1] = "bleu";
*console.log(colors[0]);
 *Déclarer une variable « colors » contenant un tableau vide.
 Puis un second temps, ajouter "Rouge" et "Bleu" à ce tableau.
 Enfin, afficher "Rouge" sur la page web, toujours en utilisant le tableau.*/


function verification(x){
    if (isNaN(x) == true){
        window.prompt("Ceci n'est pas un chiffre, veuillez-saisir un chiffre");
    }
};

let nombre1User = window.prompt("veuillez saisir un chiffre");
verification(nombre1User);
let operateur = window.prompt("veuillez saisir un opérateur: +, -, *, /");
let nombre2User = window.prompt("veuillez saisir un chiffre");
verification(nombre2User);
console.log(nombre1User,operateur,nombre2User);
let user1 = parseInt(nombre1User);
let user2 = parseInt(nombre2User);
let operator = operateur.textContent;
let resultat = user1 + operator + user2;
document.write(resultat);
















 



