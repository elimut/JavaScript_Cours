// Exercices boucles for:

//  Écrire une boucle for qui affiche chaque lettre d'une chaîne de caractères.
let chat = "bahamut";

for (let index = 0; index < chat.length; index++) {
    console.log(chat[index]);    
}

// Écrire une boucle for...of qui calcule la somme des éléments d'un tableau de
// nombres.
let calcul = [10, 20, 30];
let sum = 0;

for(const value of calcul){
    sum += value;
    console.log(sum);
}

// Écrire une boucle for...in qui affiche chaque propriété d'un objet.
let bonjour = {
    nom: "anneso",
    prenom: "chat",
    age: 34
};

for(let property in bonjour){
    console.log(property);
    // propriété
    console.log(bonjour[property]);
    // valeur
}

// Utiliser la méthode forEach pour ajouter 10 à chaque élément d'un tableau de nombres:
let forAjout = [10, 20, 30];
forAjout.forEach(element => {
    element += 10;
    console.log(element);
});

// Créez un tableau contenant les nombres 1 à 5,
// Utilisez une boucle for pour afficher chaque élément du tableau,
// Utilisez une boucle for...in pour afficher chaque index du tableau et sa valeur,
// Utilisez une boucle for...of pour afficher chaque valeur du tableau,
// Utilisez la méthode forEach() pour afficher chaque valeur du tableau:
let exercice = [1, 2, 3, 4, 5];
for (let index = 0; index < exercice.length; index++) {
    console.log(exercice[index]);
};
for(const key in exercice){
    console.log(`${key} : ${exercice[key]}`);
}
// la boucle for..of qui combine la concision de forEach avec la capacité de stopper les itérations. Elle fonctionne sur tous les objets itérables (incluant Array, Map, Objet…).
// la boucle for..of qui combine la concision de forEach avec la capacité de stopper les itérations. Elle fonctionne sur tous les objets itérables (incluant Array, Map, Objet…).
for(const value of exercice){
    console.log(value);
}
//la methode forEach permet d’itérer sur les propriétés d’un tableau.
// Attention toutefois, la méthode n’utilise pas une copie du tableau lorsqu’elle est appelée, elle manipule le tableau directement. Donc si on modifie le tableau en cours de route alors les boucles pourront être impactées.
exercice.forEach(element => {
    console.log(element)
});




// Exercices méthode map:
// Rappel: La méthode map() est une méthode de tableau qui crée un nouveau tableau
// avec les résultats d'une fonction appelée sur chaque élément du tableau d'origine. Elle
// retourne toujours un tableau de la même longueur que l'original, avec des éléments
// transformés par la fonction

// Écrire une fonction qui prend un tableau de nombres en entrée et renvoie un nouveau tableau avec les éléments multipliés par 10:
let mapBase = [10, 20, 30];
let newArr = mapBase.map(multiplie);

function multiplie(num){
    return num * 10;  
}
console.log(newArr);



// Écrire une fonction qui prend un tableau de chaînes de caractères en entrée et renvoie un nouveau tableau avec les chaînes de caractères en majuscules:
let maj = ["a", "b", "c"];
let maj2 = maj.map(upperCas);

function upperCas(element){
    return element.toUpperCase();
}
console.log(maj2);

// Écrire une fonction qui prend un tableau d'objets en entrée et renvoie un nouveau tableau avec les propriétés "name" de chaque objet:
let tableauObjet = [
    {
        name: "anne-so",
        age: 34
    },
    {
        name: "anne",
        age: 30
    }
];
console.log(tableauObjet);
let tablObj = tableauObjet.map(propName);
 function propName(element){
    return element.name;
}
console.log(tablObj);

// Écrire une fonction qui prend un tableau d'objets en entrée et renvoie un nouveau tableau avec les objets  filtrés selon une propriété. Ex: nous filtrons tous les objets qui ont une propriété age dont la valeur est supérieure à 30:
let picasso = [
    {
        name: "anne-so",
        age: 34
    },
    {
        name: "anne",
        age: 30
    }
];
// let picassoMap = picasso.map((el)=>{
//     return(el.age > 30)? el:null;
// });
// console.log(picassoMap);
// Ici m' affiche les autres résultats en null
let picassoMap = picasso.filter(el => el.age > 30);
console.log(picassoMap);
// La méthode filter() crée et retourne un nouveau tableau contenant tous les éléments du tableau d'origine qui remplissent une condition déterminée par la fonction callback.

// Créez un tableau contenant les nombres 1 à 5,
// Utilisez la méthode map() pour créer un nouveau tableau contenant chaque élément multiplié par 2,
// Utilisez la méthode map() pour créer un nouveau tableau contenant chaque élément converti en chaîne de caractères. (ex: 5 doit devenir “5”),
// Utilisez la méthode map() pour créer un nouveau tableau contenant chaque élément au carré,
// Utilisez la méthode map() pour créer un nouveau tableau contenant chaque élément inversé (ex: 1 devient 1/1, 2 devient 1/2, etc.).
let exercice2 = [1, 2, 3, 4, 5];
let newExo = exercice.map(el => {
    return el*2;
});
console.log(newExo);
let newExo2 = exercice.map(el => {
    return String(el);
});
console.log(newExo2);
let newExo3 = exercice.map(el => {
    return el**2;
});
console.log(newExo3);
let newExo4 = exercice.map(el => {
    return el;
});
console.log(`1/${newExo4[0]} 1/${newExo4[1]} 1/${newExo4[2]} 1/${newExo4[3]} 1/${newExo4[4]} `);
