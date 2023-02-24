var pierre = document.getElementById("pierre").addEventListener("click", function(){
    jouer("pierre");
    }
);
document.getElementById("feuille").addEventListener("click", function(){
    jouer("feuille");
    }
);
document.getElementById("ciseaux").addEventListener("click", function(){
    jouer("ciseaux");
    }
);
function jouer(coup){
    let coupUser = ["pierre", "feuille", "ciseaux"];
    let coupOrdi = coupUser[Math.floor(Math.random()* coupUser.length)];
    var resultat;
if(coup === coupOrdi){
    resultat = "Egalité";
}
else if ((coup === "pierre" && coupOrdi === "ciseaux" ) || (coupUser === "feuille" && coupOrdi === "pierre") || (coup === "ciseaux" && coupOrdi === "feuille")) {
    resultat = "Gagné";
}
else{
    resultat = "perdu";
}
document.getElementById("resultat").innerHTML = "Vous avez choisi "
                                                + coup
                                                + ". Adversaire a choisi "
                                                + coupOrdi
                                                + "."
                                                + resultat;
}