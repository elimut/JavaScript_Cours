

//Créa sur page vierge d'un input et d'un p

// let affichage1 = document.createElement("input");
// document.body.append(affichage1);
// let affichage2 = document.createElement("p");
// document.body.append(affichage2);

//append car pas de parent
// avant de mettre input dans html, mettre le formulaire
//créer élément de type form qui contient input

// let affichage = document.createElement("form");
// let affichage1 = document.createElement("input");
// affichage.append(affichage1);
// document.body.append(affichage);
// let affichage2 = document.createElement("p");
// document.body.append(affichage2);


// comment se premunir du cptmt par défaut du formulaire, lorsque l'on soumet un form la page se recharge et a tendance à vider l'input?
// il faut un écouteur d'évenement , ici form evnmt submit, sur form
// addevent 2 param : even et fonction callback
// evet sur input est un input

let inputValue = "";
let affichage = document.createElement("form");
let affichage1 = document.createElement("input");
affichage1.setAttribute("type","text");
affichage.append(affichage1);
document.body.append(affichage);
let affichage2 = document.createElement("p");
document.body.append(affichage2);

affichage.addEventListener("submit",e=>{
    e.preventDefault();
});
// 2 param event et fct callback