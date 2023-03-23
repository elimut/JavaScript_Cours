// comment se premunir du comportement par défaut du formulaire, lorsque l'on soumet un form la page se recharge et a tendance à vider l'input?
// il faut un écouteur d'évenement , ici form evnmt submit, sur form
// addevent 2 param : even et fonction callback
// événement sur input est un input

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
    console.log(affichage1.value);
    inputValue = affichage1.value;
    affichage2.innerHTML = inputValue;
});
// 2 param: event et fonction callback

//essayer de remplir var inputValue par valeur de html
//recup valeursaisie input et stocker dans var inputVlaue
//recup valeur dans input

maDiv.addEventListener("click",()=>{
    maDiv.classList.toggle('active');
});
//toggle vérifie si la class est présente sur l'élément, il check, soit il ajoute, soit il l'enlève
// au clic, check si pas de css , l'ajoute cela permet au css maDiv.active de