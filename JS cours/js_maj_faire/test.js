console.log("anneso");
// afficher dans la console

const chat = "bahamut";
// décla ConstantSourceNode, val ne changera pas
console.log(chat);
// afficher console nav val constante
console.log(typeof chat);
// afficher type de données contenues dans const chat 
const nom = "vandingenen ";
// espace après car concaténation ne le prend pas ou const phrase = "Bonjour, je m'appelle " + prenom+ " " + nom + " et j'ai " + age + " ans.";

const prenom = "anneso";
const age = 35;

console.log(" Bonjour,je m'appelle " + " " + nom + " " + prenom + " et j'ai " + age + " ans ");
// concatenation
alert("Bonjour, je m'appelle" + nom + prenom + "et j' ai" + age + "ans");
console.log(prenom.length);
// permet de renvoyer longueur chaine carac const prenom

var today = new Date ();
alert(today);
// afficher date brute 

var jour=today.getDate();
var mois=today.getMonth()+1;
var an=today.getFullYear();
// Méthode getDate() : elle renvoie le numéro du jour dans le mois, donc un nombre entier entre 1 et 31.
// Méthode getMonth() : elle renvoie le numéro du mois dans l'année, mais attention ce numéro est un entier entre 0 (pour janvier) et 11 (pour décembre); il faudra donc ajouter 1 pour obtenir le numéro usuel.
// Méthode getFullYear() : elle renvoie le numéro de l'année en 4 chiffres.
// Méthode getHours() : elle renvoie le numéro de l'heure.
// Méthode getMinutes() : elle renvoie le numéro des minutes.
// Méthode getSeconds() : elle renvoie le numéro des secondes.
alert(jour + " " + mois + " " + an );


var tableau1 = ["tata" ,"tutu"];
console.log(tableau1);
// indice 0 à n
// comment se déplacer dans un tableau ou un objet
// Un tableau  est numéroté ['0', '1', '2'...];
// Pour récupérer une valeur contenue dans le tableau, il faut noter:
// nomdelavariable[index] pour obtenir la valeur correspondant à l'index.
// Un objet utilise des clé : { clé1 : valeur1, clé2 : valeur2 ... }
// Et pour accéder aux valeurs, on fera:
// nomdelavariable.clé pour obtenir la valeur correspondant à la clé.
// array
console.log(tableau1[1]);


// accolades objet 
// Les tableaux associatifs sont des objets dynamiques que l'utilisateur redéfinit selon ses besoins. Quand on assigne des valeurs à des clés dans une variable de type Array, le tableau se transforme en objet, et il perd les attributs et méthodes de Array. L'attribut length n'est plus disponible car la variable n'a plus le type Array.

// tabl asso sans objet 
var monTableau = [];
monTableau["enfant"] = "toto";
monTableau["maman"] = "tutu";
monTableau["papa"] = "titi";
console.log(monTableau);
// array 

// tabl asso avec objet 
var monTableau2 = { enfant : "toto",maman : "tutu",papa : "titi"};
console.log(monTableau2);
// objet 

// tab indexé une seule ligne
var monTableau3 = ["toto", "tati", "tutu"];
console.log(monTableau3);
// array 
var carré = document.getElementsByClassName("carré");
var rond = document.getElementsByClassName("rond");
// (Le className renvoie un tableau de tout les éléments ayant cette classe)
console.log(carré);
console.log(rond);

// (Le className renvoie un tableau de tout les éléments ayant cette classe)
// Renvoie un objet de type tableau de tous les éléments enfants qui ont tous les noms de classe donnés. Lorsqu'il est appelé sur l'objet document, le document complet est recherché, y compris le nœud racine. Vous pouvez également appeler getElementsByClassName () sur n'importe quel élément; il retournera uniquement les éléments qui sont les descendants de l'élément racine spécifié avec les noms de classes donnés.

function maFonction() {
    console.log('click');
}
for ( var i=0; i < carré.length; i++) {
     carré[i].addEventListener('click', maFonction);
} ;
// Si on passe une fonction dans un paramètres, ça s'appelle une fonction callback


function maFonction1(long, larg) {
    console.log("la surface est de " + long*larg + " m²");
}
maFonction1(3, 5);
// test 


var a = 42;
var b = 4.2;
var c = -42;
var d = "42";

alert("ma variable a est de type : " + typeof(a) +
"\nma variable b : " + typeof(b) +
"\nma variable c : " + typeof(c) +
"\nma variable d : " + typeof(d));

var maChaine = "exemple";
var maChaine1 = new String("exemple");

alert("ma variable maChaine est de type : " + typeof(maChaine) +
"\nma variable maChaine1 : " + typeof(maChaine1));

var n = null;
// objet 
var u = undefined;
var nn = NaN;
// number or Not a Number,var censée contenir un nb mais qui n'en est pas un

alert("ma variable n est de type : " + typeof(n) +
"\nma variable u : " + typeof(u) +
"\nma variable nn : " + typeof(nn));

var x = 32;
var y = 5;
var z = 2;
alert(
    y*z
);
alert(
    y/z
);
alert(
    y+z
);
alert(
    y-z
);
alert(
    y%z
);
alert(
    y+z*x
);
alert(
    y
);
// y= 5
y = y*z
alert(
    y
);
// y=10 réaffectation ou écrasement valeur var y


var heureDOuverture = 9;
var heureDeFermeture = 17;
var heureActuelle = 8;

if(heureActuelle<heureDOuverture){
    alert("Trop tôt");
}
else if(heureActuelle>=heureDOuverture && heureActuelle<=heureDeFermeture){
    if(heureactuelle<=12){
        alert("Bienvenue c'est le matin");
    }
    else{
        alert("Bienvenue c'est l' après-midi");
    }
}
else{
    alert("Revenez demain");
}
// imbrication condition dans condition 

var note = 5;
var noteAmericaine = "";

// switch (key) = note 
// switch(noteAmericaine){
//     case "A++":
//         alert("Excellent travail");
//         break;
//     case 10:
//         alert("A revoir");
//         break;
//     default:
//         ("Nous ne connaissons pas votre note");
//     break;
// }
// un cas un break 
// Exercice :
if(note > 19){
    noteAmericaine = "A++";
}
else if(note >= 18 && note <= 19){
    noteAmericaine = "A";
}
else if(note >= 15 && note < 18){
    noteAmericaine = "B";
}
else if(note >= 12 && note < 15){
    noteAmericaine = "C";
}
else if(note >= 9 && note < 12){
    noteAmericaine = "D";
}
else if(note >= 6 && note < 9){
    noteAmericaine = "E";
}
else if(note < 6){
    noteAmericaine = "F";
}
else{
    noteAmericaine = "ABS";
}

switch(noteAmericaine){
    case "A++":
        alert("Excellent travail");
        break;
    case "A":
        alert("TB");
        break;
    case "B":
        alert("Bien");
        break;
    case "C":
        alert("CORRECT");
        break;
    case "D":
        alert("MOYEN");
        break;
    case "E":
        alert("Peu mieux faire");
        break;
    case "F":
        alert("NUL");
        break;
    default:
        alert("ABS");
    break;
}


// Exercice : Afficher la valeur d'une réduction déterminée par calcul. Ce calcul tiendra compte du montant introduit dans une fenêtre pop-up. Elle sera nulle tant que le montant de la facture n'atteint pas les 1000 €, de 5 % si le montant est compris entre 1000 et 2500 € et de 10 % si le total facture dépasse les 2500 €.

var facture = 2600;
var reduction = 0;

if(facture > 2500){
    reduction = 10;
}
else if(1000 <= facture && facture <= 2500){
    reduction = 5;
}
else{
    reduction = 0;
}

var total = facture-((facture*reduction)/100);

// mise ici pour la lecture prio 

switch(reduction){
    case 0:
       alert(facture);
        break;
    default:
        alert(total);
}


var arrayNbr = [1, 2, 3];
// 3 de longueur 
arrayNbr.push(4);
// rajoute 4 dans le tableau à la fin 
console.table(arrayNbr);
// [1, 2 , 3, 4] affichage
arrayNbr.pop();
console.table(arrayNbr);
// [1, 2, 3]
var arrayNbr = [1, 2, 3];
// 3 de longueur 
arrayNbr.push(4);
// rajoute 4 dans le tableau à la fin 
// ajoute valeur indiquée à la fin du tableau
console.table(arrayNbr);
// [1, 2 , 3, 4] affichage
arrayNbr.pop();
// [1, 2, 3] retire dernière valeur
arrayNbr.shift();
// [2 , 3] Retire la première valeur 
console.table(arrayNbr);
arrayNbr.unshift(0);
// [0, 2 , 3] Ajoute valeur indiquée au début du tableau
console.table(arrayNbr)

// var arrayCopy = arrayStr.concat("d");
// création copie
// console.log(arrayStr.concat("d"));
// renvoie   [a, b, c, d]

// var arrayCopy = arrayStr.concat(arrayNbr);
// console.log(arrayStr.concat(arrayNbr));
// concat permet de fusionner deux tableaux sans toucher au tableau eux mêmes / crée copie du tableau
//  ['a', 'b', 'c', 1, 2, 3]


// var arrayCopy = arrayStr.concat(arrayNbr);

// console.log(arrayStr[1]);
// renvoie b

// chaine de carac considérées comme des tableaux 

// arrayStr.join('-');
// // joint les valeurs avec tiret a-b-c sans changr les valeurs initiales
// console.log(arrayStr.join("-"));

// arrayStr.slice(1);
// console.log(arrayStr.slice("2"));
// permet de faire une copie et retire les deux premières valeurs en partant du début et sans toucher au tableau initial


// console.log(arrayStr.slice(-1));
// retire toutes les valeurs en partant de -1(fin) donc affiche c 


// Différence push et concat : 
// push tableau dans tableau

var arrayNbr = [1, 2, 3];
var arrayStr = ["a", "b", "c"];
 arrayNbr.push(4); //[1, 2, 3, 4] ajoute la valeur indiqué à la fin du tableau
 arrayNbr.pop(); //[1, 2] retire la dernière valeur
 arrayNbr.shift(); //[2, 3] retire la première valeur
 arrayNbr.unshift(0); //[0, 1, 2, 3] ajoute la valeur indiqué au début du tableau
 arrayStr.concat("d"); //fusionne des tableaux sans changer les valeurs du tableau initial
 arrayStr.join('-'); // a-b-c joindre les valeurs du tableau sans changer les valeurs du tableau initial
 arrayStr.slice(1); // ["b", "c"] retire le nombre d'éléments indiqué du tableau en partant du début sans changer les valeurs du tableau initial
 arrayStr.slice(-1); // ["b", "c"] retire le nombre d'éléments indiqué du tableau en partant du début et en comptant depuis la fin sans changer les valeurs du tableau initial
 arrayStr.includes("c"); //true vérifie si la valeur existe
 arrayStr.indexOf("c"); //2 renvoi le position (index) de la valeur dans le tableau
 arrayNbr.reduce((acc, cou)=> acc + cou ) //6 additionne tous les éléments du tableau

 // arrayNbr.reduce((acc,cou)=> acc + cou );
// console.log(arrayNbr.reduce((acc,cou)=> acc + cou ));
// fonction fléchée, voir cahier

// arrayStr.includes("c");
// console.log(arrayStr.includes("c"));
// renvoie true car est dans le tab 
// valeur existe ou pas dans un tab renvoie à un booléen

// console.log(arrayStr.indexOf("c"));
// renvoie index de c 

// arrayNbr.find(el => el > 4);
// el est l param puis maFonction,callback 
// console.log(arrayNbr.find(el => el > 4));
// renvoie undefined si non trouvé sinon renvoie l'élément 
// renvoie la valeur du premier élément sinon undefined 




// console.log(arrayNbr.findIndex(el => el > 2));
// index de la premiere valeur >4 , index 2

// arrayNbr.map(el => el *2);
// console.log(arrayNbr.map(el => el *2));
// on isole chaque éléments du tableau est  mappé  [2, 4, 6] créa d'un nouveau tableau
// La méthode map() crée un nouveau tableau avec les résultats de l'appel d'une fonction fournie sur chaque élément du tableau appelant.
// La manière la plus simple de manipuler et transporter de gros blocs de données en Javascript (ainsi que dans plusieurs autres langages de programmation) est via les tableaux unidimensionnels et multidimensionnels. La modification et le tri de ces données requiert souvent des procédés d’itérations qui peuvent êtres lourds et relativement fastidieux. Heureusement, Javascript propose un ensemble de méthodes qui facilite plusieurs processus de manière assez élégante.


// console.log(arrayNbr.keys());
// permet d' itérer

// console.log(arrayNbr.some(el => el > 2));
// renvoie true car renvoie si au moins un  élément respecte la condition renvoie un booléen

// console.log(arrayNbr.filter(el => el > 1));
// renvoie que ce qui respecte la condition. Apeu près comme find et SVGGeometryElement, mais ne s'arrête pas à la première valeur, renvoie tous les éléments qui respectent la condition. renvoie [2, 3]

// console.log(arrayNbr.filter(el => el > 5));
// renvoie []

// console.log(arrayNbr.every(el => el > 1));
// renvoie booleen car tous les éléments la condition false
// console.log(arrayNbr.every(el => el > 0));
// true

// console.log(arrayNbr.reverse());
// arrayNbr.reverse()
// [3, 2, 1] inverse le tableau



arrayNbr.find(el => el > 2) //3 renvoie la valeur du premier élément trouvé dans le tableau qui respecte la condition
 arrayNbr.findIndex(el => el > 2) //2 renvoie l'index du premier élément trouvé dans le tableau qui respecte la condition
arrayNbr.map(el => el * 2); //[2, 4, 6] crée un nouveau tableau avec les résultats de l'appel d'une fonction fournie sur chaque élément du tableau appelant.
 arrayNbr.some(el => el > 2); //true passe le test implémenté par la fonction fournie. Elle renvoie un booléen indiquant le résultat du test.
 arrayNbr.filter(el => el > 1) // [2,3] renvoi tous les éléments qui respectent la condition
 arrayNbr.every(el => el > 1);
 arrayNbr.reverse();

 var arrayNbr = [1, 2, 3];
var arrayStr =  ["a", "b", "c"];

// arrayNbr.reduce((acc,cou)=> acc + cou );
// console.log(arrayNbr.reduce((acc,cou)=> acc + cou ));
// fonction fléchée, voir cahier

// arrayStr.includes("c");
// console.log(arrayStr.includes("c"));
// renvoie true car est dans le tab 
// valeur existe ou pas dans un tab renvoie à un booléen

// console.log(arrayStr.indexOf("c"));
// renvoie index de c 

// arrayNbr.find(el => el > 4);
// el est l param puis maFonction,callback 
// console.log(arrayNbr.find(el => el > 4));
// renvoie undefined si non trouvé sinon renvoie l'élément 
// renvoie la valeur du premier élément sinon undefined 




// console.log(arrayNbr.findIndex(el => el > 2));
// index de la premiere valeur >4 , index 2

// arrayNbr.map(el => el *2);
// console.log(arrayNbr.map(el => el *2));
// on isole chaque éléments du tableau est  mappé  [2, 4, 6] créa d'un nouveau tableau
// La méthode map() crée un nouveau tableau avec les résultats de l'appel d'une fonction fournie sur chaque élément du tableau appelant.
// La manière la plus simple de manipuler et transporter de gros blocs de données en Javascript (ainsi que dans plusieurs autres langages de programmation) est via les tableaux unidimensionnels et multidimensionnels. La modification et le tri de ces données requiert souvent des procédés d’itérations qui peuvent êtres lourds et relativement fastidieux. Heureusement, Javascript propose un ensemble de méthodes qui facilite plusieurs processus de manière assez élégante.


// console.log(arrayNbr.keys());
// permet d' itérer

// console.log(arrayNbr.some(el => el > 2));
// renvoie true car renvoie si au moins un  élément respecte la condition renvoie un booléen

// console.log(arrayNbr.filter(el => el > 1));
// renvoie que ce qui respecte la condition. Apeu près comme find et SVGGeometryElement, mais ne s'arrête pas à la première valeur, renvoie tous les éléments qui respectent la condition. renvoie [2, 3]

// console.log(arrayNbr.filter(el => el > 5));
// renvoie []

// console.log(arrayNbr.every(el => el > 1));
// renvoie booleen car tous les éléments la condition false
// console.log(arrayNbr.every(el => el > 0));
// true

// console.log(arrayNbr.reverse());
// arrayNbr.reverse()
// [3, 2, 1] inverse le tableau

// const div = document.getElementsByClassName("carré");
// les éléments de cette class sont stockés dans la const div 
// collection d'éléments html 
// console.log(div);

// div[0];
// récup première div

// div[0].style.backgroundColor = "rgb(255, 255, 0)";
// met le premier élément index 0 en backgroundjaune 

// var div = document.getElementsByClassName("carré");

// for(var i= 0; i < div.length; i++)
// {
//     if(i % 2 == 0){
//         div[i].style.backgroundColor = "rgb(255, 0, 0)";
//     }
//     else{
//         div[i].style.backgroundColor = "rgb(0, 255, 0)";
//     }
// }
// boucle pour parcourir chaque case du tableau1,i indexed, si index paire (modulo 2) rouge sinon vert 

// ou 

// for(let index = 0; index > div.length; index++)
// {
//     if(index % 2 != 0){
//         div[index].style.backgroundColor = "rgb(255, 0, 0)";
//     }
//     else{
//         div[index].style.backgroundColor = "rgb(0, 255, 0)";
//     }
// }

// div[0].stylebackground = "rgb(255, 0, 0)";
// div[].stylebackground = "rgb(0, 0, 255)";
// div[2].stylebackground = "rgb(255, 0, 0)";
// div[3].stylebackground = "rgb(0, 0, 255)";
// div[4].stylebackground = "rgb(255, 0, 0)";
// A éviter car si rajout div non pris en compte 

// var arrayDiv = Array.from(div);
// faire d'une liste un tab pour appliquer méthode
// console.log(arrayDiv);

// map : tableau arr =[1, 2, 3];
// arr[0]; accèder au premier élément du tableau 
// arrayDiv.map(el=>element); chaque élément devient individuel
// arrayDiv.map(el => {console.log(el)});
// méthode map isole et crée un nv tab 

// arrayDiv.map((element, index) => {
//     if (index %2 == 0) {element.style.background = "rgb(255, 0, 0)";}
//     else{element.style.background = "rgb(0, 0, 255)";}
//     console.log(element)
//     }
// );
// condition à ajouter pour appliquer 

// arrayDiv.map((element, index) => index %2 != 0 
// ? 
// element.style.background = "rgb(255, 0, 0)"
// : 
// element.style.background = "rgb(0, 0, 255)"
// ); 
// var div = document.getElementsByClassName("carré");

// var arrayDiv = Array.from(div);




// function getRandomInt(){
//     return Math.floor(Math.random() * 256)
// };
// function nom param ou non 

// div[0].style.backgroundColor = "rgb("+Math.floor(Math.random()*256)+","+ Math.floor(Math.random()*256)+","+ Math.floor(Math.random()*256)+")";

// div[1].style.backgroundColor = `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`;

// var bouton = document.getElementByClassName("bouton");
const body = document.getElementsByTagName("body");

const button = document.getElementById("button");

// procédural 

// puis fonctionnel

function getRandomInt()
{
    return Math.floor(Math.random() * 256);
}

function getBodyBg(){
body[0].style.backgroundColor = "rgb("+getRandomInt()+","+  getRandomInt()+","+ getRandomInt()+")";
}

getBodyBg();
// appel fonction 
// background-color: rgb(64, 0, 255); = css , entre les valeurs

button.addEventListener("click", getBodyBg);
// cibe add type action 



// id renvoie un seul élément / class tableau 

// function getRandomInt(){
//     return Math.floor(Math.random() * 256)
// };
// function nom param ou non 

// div[0].style.backgroundColor = "rgb("+Math.floor(Math.random()*256)+","+ Math.floor(Math.random()*256)+","+ Math.floor(Math.random()*256)+")";

// div[1].style.backgroundColor = `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`;

// var bouton = document.getElementByClassName("bouton");
// const body = document.getElementsByTagName("body");

// const button = document.getElementById("button");

// procédural 

// puis fonctionnel

// function getRandomInt()
// {
//     return Math.floor(Math.random() * 256);
// }

// function getBodyBg(){
// body[0].style.backgroundColor = "rgb("+getRandomInt()+","+  getRandomInt()+","+ getRandomInt()+")";
// }

// getBodyBg();
// appel fonction 
// background-color: rgb(64, 0, 255); = css , entre les valeurs

// button.addEventListener("click", getBodyBg);
// cible add type action 



// id renvoie un seul élément / class tableau 







// laisser src img vide dans HTML et l'afficher / comment donner val à src

// const img = document.querySelector("#img"); 
// préciser id car si plusieurs images seule la première sera prise
// La méthode querySelector() de l'interface Document retourne le premier Element dans le document correspondant au sélecteur - ou groupe de sélecteurs - spécifié(s), ou null si aucune correspondance n'est trouvée. 
// img.src = "img/Capture2.PNG";

// id src alt = attributs 
// recherche : envoyer un attribut = set  attribute js 
// autre façon 
// const img = document.querySelector("#img"); 
// image.setAttribute("src", "img/Capture2.PNG"" )







// 3 div même classe et chacune son propre id 
// selection par la classe et affichage de l'id dans la console 

// var test = document.getElementsByClassName("test");


// for (let index = 0; index < test.length; index++) {
//     console.log(test[index].getAttribute("id"));
// }




// clic sur une des div l'id doit être logué
// var test = document.getElementsByClassName("test");

// Array.from(test).forEach(element =>{
//     element.addEventListener(
//         "click",
//         function (e){
//             console.log(e.currentTarget.id)
//         }
//     )
// })
// ou 
const test = document.querySelectorAll(".test");
test.forEach((div) => {
    div.addEventListener("click",function(event){
        console.log(event.currentTarget.id);
    });
})


/* 
récup élément du tableu et affichage en html: 
dns html -> section id exercice + tab objet results

let results = [
    {
        "adult": false,
        "backdrop_path": "/5DCIRgOrCTayoCGggVn1kyqs1Vh.jpg",
        
        "genre_ids": [
        53,
        27
        ],
        "id": 945657,
        "original_language": "en",
        "original_title": "Titanic 666",
        "overview": "After a mammoth cruise ship sails over the site of the Titanic’s disaster, dark and deadly events start to occur on board. As the ship’s captain investigates the tragic occurrences, it becomes clear that the passengers and crew from the original Titanic have returned.",
        "popularity": 471.762,
        "poster_path": "/EX0ITg5YqDgFHjujpTNhEPaJSL.jpg",
        "release_date": "2022-04-15",
        "title": "Titanic 666",
        "video": false,
        "vote_average": 6.1,
        "vote_count": 71
    },
    {
        "adult": false,
        "backdrop_path": "/3WjbxaqYB4vAbdUfdr5vbglD2JZ.jpg",
        
        "genre_ids": [
            18,
            10749
        ],
        "id": 597,
        "original_language": "en",
        "original_title": "Titanic",
        "overview": "101-year-old Rose DeWitt Bukater tells the story of her life aboard the Titanic, 84 years later. A young Rose boards the ship with her mother and fiancé. Meanwhile, Jack Dawson and Fabrizio De Rossi win third-class tickets aboard the ship. Rose tells the whole story from Titanic's departure through to its death—on its first and last voyage—on April 15, 1912.",
        "popularity": 144.133,
        "poster_path": "/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg",
        "release_date": "1997-11-18",
        "title": "Titanic",
        "video": false,
        "vote_average": 7.9,
        "vote_count": 21491
    },
    {
    "adult": false,
    "backdrop_path": "/e9XRikkyth0GtG8RkU3XNm0oMsA.jpg",
    
    "genre_ids": [
    28,
    12,
    53
    ],
    "id": 44918,
    "original_language": "en",
    "original_title": "Titanic II",
    "overview": "On the 100th anniversary of the original voyage, a modern luxury liner christened \"Titanic 2,\" follows the path of its namesake. But when a tsunami hurls an ice berg into the new ship's path, the passengers and crew must fight to avoid a similar fate.",
    "popularity": 67.881,
    "poster_path": "/3m12UeP1DMfhYZyvpLftaJGsyp3.jpg",
    "release_date": "2010-08-07",
    "title": "Titanic II",
    "video": false,
    "vote_average": 4.9,
    "vote_count": 316
    },
    
    {
    "adult": false,
    "backdrop_path": "/3oShsRvAyZiQQ5lP2hszWN9Ri0b.jpg",
    
    "genre_ids": [
    18,
    10749
    ],
    "id": 16535,
    "original_language": "en",
    "original_title": "Titanic",
    "overview": "Unhappily married, Julia Sturges decides to go to America with her two children on the Titanic. Her husband, Richard also arranges passage on the luxury liner so as to have custody of their two children. All this fades to insignificance once the ship hits an iceberg.",
    "popularity": 16.185,
    "poster_path": "/rEPzO9I6LCk6Mxg1X4BsBk6oA3V.jpg",
    "release_date": "1953-04-11",
    "title": "Titanic",
    "video": false,
    "vote_average": 6.5,
    "vote_count": 89
    },
    
    {
    "adult": false,
    "backdrop_path": "/edHgXEtPbyVIQ7xKb1cvJJqTVhA.jpg",
    
    "genre_ids": [
    28,
    18,
    36
    ],
    "id": 11021,
    "original_language": "de",
    "original_title": "Titanic",
    "overview": "This little-known German film retells the true story of the British ocean liner that met a tragic fate. Ernst Fritz Fürbringer plays the president of the White Star Line, who unwisely pressed the Titanic's captain (Otto Wernicke) to make the swiftest possible crossing to New York.",
    "popularity": 16.881,
    "poster_path": "/Al7oIXQ4dZAofBTZWm6OiXS3MEa.jpg",
    "release_date": "1943-11-10",
    "title": "Titanic",
    "video": false,
    "vote_average": 6.1,
    "vote_count": 46
    },
    
    {
    "adult": false,
    
    "backdrop_path": null,
    
    "genre_ids": [
    35
    ],
    "id": 996280,
    "original_language": "en",
    "original_title": "Titanic 2",
    "overview": "The long-awaited sequel to Titanic (1997).",
    "popularity": 26.601,
    "poster_path": "/s0jFNW3SBcOUjKsHazlkjzWbGNz.jpg",
    "release_date": "2017-04-04",
    "title": "Titanic 2",
    "video": false,
    "vote_average": 2,
    "vote_count": 1
    },
    
    {
    "adult": false,
    
    "backdrop_path": null,
    
    "genre_ids": [
    35,
    27
    ],
    "id": 4240,
    "original_language": "en",
    "original_title": "Titanic 2000",
    "overview": "The luxury liner Titanic 2000 has set sail on its maiden voyage, and one of the passengers is the vampire Vladamina. Vladamina is searching for a woman she can turn into a vampire queen, and frustrated rock groupie Shari looks to be a perfect target. As various people get seduced and/or killed as the liner continues on its doomed voyage, Shari must chose between eternity as a living dead sex slave or a frigid grave at the bottom of the ocean.",
    "popularity": 10.618,
    "poster_path": "/91p8xU2nykmw8psADIJOlBLdlXK.jpg",
    "release_date": "1999-01-01",
    "title": "Titanic 2000",
    "video": false,
    "vote_average": 3.3,
    "vote_count": 10
    },
    
    {
    "adult": false,
    "backdrop_path": "/82tRA7Vdf7TwdyJYILUh6FuY88L.jpg",
    
    "genre_ids": [
    99
    ],
    "id": 198901,
    "original_language": "en",
    "original_title": "Titanic: 100 Years On",
    "overview": "The \"unsinkable\" floating palace set sail from Southampton on 10th April 1912 on her maiden voyage to New York. An iceberg ended this monumental journey 5 days later. Only 705 of the passengers and crew survived. This program features an exclusive look at the Sea City Museum Titanic Exhibit in Southampton, interviews from both survivors and the cast of the blockbuster film.",
    "popularity": 11.763,
    "poster_path": "/uAaXfaJpKjmsA3F1KgowcRJPKPM.jpg",
    "release_date": "2012-06-01",
    "title": "Titanic: 100 Years On",
    "video": false,
    "vote_average": 6.9,
    "vote_count": 18
    },
    
    {
    "adult": false,
    "backdrop_path": "/q3b8Vi2W6j72aXKggiVoDnEyDgU.jpg",
    
    "genre_ids": [
    12
    ],
    "id": 24575,
    "original_language": "en",
    "original_title": "Raise the Titanic",
    "overview": "To obtain a supply of a rare mineral, a ship raising operation is conducted for the only known source, the Titanic.",
    "popularity": 9.795,
    "poster_path": "/a8u1FiMXdOlNfhHlpjAr48seQ2g.jpg",
    "release_date": "1980-08-01",
    "title": "Raise the Titanic",
    "video": false,
    "vote_average": 5.5,
    "vote_count": 63
    },
    
    {
    "adult": false,
    "backdrop_path": "/8k0pR1v9WcVviJ7NdfiKh8FqlJt.jpg",
    
    "genre_ids": [],
    "id": 136331,
    "original_language": "en",
    "original_title": "Titanic: 100 Years in 3D",
    "overview": "100 years after an iceberg defeated the 882-foot luxury liner on its maiden voyage, scientists and historians are still exploring the Titanic. Armed with modern camera technology, submersibles were sent down to the ship's final resting place with the hope of capturing HD 3D visuals of the wreckage, in order to support or even confirm theories about the damage that took the boat down. Now, History Channel has brought some of that footage home in this 45-minute TV special, presented in 3D so that future generations can see it for themselves.",
    "popularity": 9.986,
    "poster_path": "/ciWUbeu5GdMFY0phRUjLms8ar0K.jpg",
    "release_date": "2012-09-10",
    "title": "Titanic: 100 Years in 3D",
    "video": false,
    "vote_average": 6.3,
    "vote_count": 5
    },
    
    {
    "adult": false,
    
    "backdrop_path": null,
    
    "genre_ids": [
    18
    ],
    "id": 357517,
    "original_language": "de",
    "original_title": "Titanic",
    "overview": "",
    "popularity": 4.388,
    "poster_path": "/yi73me6Jl3zDelS9pQK5jtMRhsc.jpg",
    "release_date": "1984-01-01",
    "title": "Titanic",
    "video": false,
    "vote_average": 7,
    "vote_count": 1
    },
    
    {
    "adult": false,
    "backdrop_path": "/dxdN3RxJRVYzFxVSR0fNhSBqBSL.jpg",
    
    "genre_ids": [
    99
    ],
    "id": 682666,
    "original_language": "en",
    "original_title": "Back to the Titanic",
    "overview": "Back to the Titanic documents the first manned dives to Titanic in nearly 15 years. New footage reveals fresh decay and sheds light on the ship’s future.",
    "popularity": 8.935,
    "poster_path": "/wqa5qTTX547R9RIsiLbvQww1wkL.jpg",
    "release_date": "2020-02-23",
    "title": "Back to the Titanic",
    "video": false,
    "vote_average": 7,
    "vote_count": 5
    },
    
    {
    "adult": false,
    "backdrop_path": "/sdtfwZulErbQ7y9RVbaOuWVouD6.jpg",
    
    "genre_ids": [
    36,
    18,
    53
    ],
    "id": 86938,
    "original_language": "en",
    "original_title": "S.O.S. Titanic",
    "overview": "The Titanic disaster is depicted as seen through the eyes of one couple in each of the three classes on board.",
    "popularity": 4.333,
    "poster_path": "/wy5ut2GVpPaNxxXFRdkIywjRpeO.jpg",
    "release_date": "1979-09-23",
    "title": "S.O.S. Titanic",
    "video": false,
    "vote_average": 6.1,
    "vote_count": 28
    },
    
    {
    "adult": false,
    "backdrop_path": "/4Sddw1BFQFHOIQZ3DY7QS0mGnVe.jpg",
    
    "genre_ids": [
    16,
    10751
    ],
    "id": 71235,
    "original_language": "it",
    "original_title": "Titanic: La leggenda continua",
    "overview": "An animated retelling of the worst passenger ship disaster in history. In this version, love blossoms between the upper-class Sir William and the blue-collar Angelica, who is hoping to find romance in America. At the same time, there are also a number of animal passengers, including talking dogs, cats and mice, who are also looking forward to arriving in the New World.",
    "popularity": 4.957,
    "poster_path": "/s1PHRSlos2hIFrtA8Ze0JybJTGb.jpg",
    "release_date": "2000-09-15",
    "title": "Titanic: The Legend Goes On...",
    "video": false,
    "vote_average": 2.4,
    "vote_count": 51
    },
    
    {
    "adult": false,
    "backdrop_path": "/4F9sK5R1P9L21msosfWXSXOJJIg.jpg",
    
    "genre_ids": [
    99
    ],
    "id": 438579,
    "original_language": "en",
    "original_title": "Titanic: The New Evidence",
    "overview": "This documentary draws on new evidence to reveal that a fire was raging in Titanic's boiler rooms before she left port, that it was kept secret and, it's now believed, that it led to the tragedy",
    "popularity": 6.636,
    "poster_path": "/AsgGmzPQdtUBba7eUYXuXOmSq56.jpg",
    "release_date": "2017-01-21",
    "title": "Titanic: The New Evidence",
    "video": false,
    "vote_average": 7,
    "vote_count": 5
    },
    
    {
    "adult": false,
    "backdrop_path": "/9PolVogZuHd07JIPOPTDnFAFj1p.jpg",
    
    "genre_ids": [
    99
    ],
    "id": 489493,
    "original_language": "en",
    "original_title": "Titanic: 20 Years Later with James Cameron",
    "overview": "For the 20th anniversary of \"Titanic,\" James Cameron reopens the file on the disaster.",
    "popularity": 13.455,
    "poster_path": "/5w18P8qU9sHRcW6pH3NVGVVIKFw.jpg",
    "release_date": "2017-11-26",
    "title": "Titanic: 20 Years Later with James Cameron",
    "video": false,
    "vote_average": 6.4,
    "vote_count": 28
    },
    
    {
    "adult": false,
    
    "backdrop_path": null,
    
    "genre_ids": [
    99,
    36
    ],
    "id": 530108,
    "original_language": "en",
    "original_title": "The Unsinkable Titanic",
    "overview": "On April 10, 1912, the RMS Titanic embarked on its maiden voyage, sailing from Southampton, England, to New York City. One of the largest and most luxurious passenger liners at the time, the Titanic was also equipped with watertight compartments, which led many to consider the ship unsinkable; an anonymous deckhand famously claimed that “God himself could not sink this ship.” On April 14, however, the ship struck an iceberg, and early the next day it sank. Some 1,500 people perished.",
    "popularity": 5.837,
    "poster_path": "/m3py1JoOPM3s3RTRv965tMC8Fqy.jpg",
    "release_date": "2008-11-03",
    "title": "The Unsinkable Titanic",
    "video": false,
    "vote_average": 7,
    "vote_count": 3
    },
    
    {
    "adult": false,
    
    "backdrop_path": null,
    
    "genre_ids": [
    99
    ],
    "id": 46940,
    "original_language": "en",
    "original_title": "Secrets of the Titanic",
    "overview": "Dr. Robert Ballard of Woods Hole Oceanographic Institute and his research team become the first undersea explorers to locate, photograph, and explore the wreckage of the ill-fated HMS Titanic, which sank on its maiden voyage 2 1/2 mile deep in the icy waters of the Atlantic in 1912, taking 1500 passengers and crew with it to a watery grave. Utilizing dazzling state-of-the art equipment and cutting edge expertise they record the decaying remains of the ocean liner once thought \"unsinkable.\"",
    "popularity": 5.363,
    "poster_path": "/yEvumAoCB9Z7o9dAzjxrjcwo2FQ.jpg",
    "release_date": "1986-08-07",
    "title": "Secrets of the Titanic",
    "video": false,
    "vote_average": 6.5,
    "vote_count": 4
    },
    
    {
    "adult": false,
    "backdrop_path": "/dRBZAGRSzAnr8PPZblhjaGPbj0w.jpg",
    
    "genre_ids": [
    99
    ],
    "id": 777797,
    "original_language": "fr",
    "original_title": "Titanic, au cœur de l’épave",
    "overview": "",
    "popularity": 4.695,
    "poster_path": "/cxfse8qoGEQ6KsIfp3SXtzkT6b1.jpg",
    "release_date": "2020-12-17",
    "title": "Titanic, au cœur de l’épave",
    "video": false,
    "vote_average": 6.8,
    "vote_count": 2
    },
    
    {
    "adult": false,
    "backdrop_path": "/hDfaa3Nj3K3SkXBr8eALYfPT5pF.jpg",
    
    "genre_ids": [
    99
    ],
    "id": 428950,
    "original_language": "en",
    "original_title": "Drain the Titanic",
    "overview": "Computer-generated imagery and other visualization techniques reveal how it would look if all the water was removed from RMS Titanic's final resting place.",
    "popularity": 3.462,
    "poster_path": "/68Fppsnpc3OmQK8kIustffrxHbq.jpg",
    "release_date": "2016-05-05",
    "title": "Drain the Titanic",
    "video": false,
    "vote_average": 7.3,
    "vote_count": 16
    }
]

let exercice = document.getElementById("exercice");


results.map((film)=>(
//     console.log(film.original_title)
//     (film.vote_average>=5)?console.log("Bon film, note: "+film.vote_average):console.log("Mauvais film, note: "+film.vote_average)));
permet de maper l'attribut film du tableau objet results

<img src url image${film.poster.path}.join("");
join car tableau chaque élément séparé par une virgule



Boucle for

map ne prend pas ; ni {} donc ternaire!!

ternaire :
il fait beau ? casquette : parapluie


*/