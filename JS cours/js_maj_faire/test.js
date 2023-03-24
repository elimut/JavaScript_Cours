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
