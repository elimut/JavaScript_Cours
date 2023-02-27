const cells = document.querySelectorAll("[data-cell]");
/*sélection des div attributs Html data cell*/
const gameStatus = document.getElementById("gameStatus");
const endGameStatus = document.getElementById("endGameStatus");
const playerOne = "X";
const playerTwo = "O";
let playerTurn = playerOne;

const winningPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [3, 4, 6]
    /* cré d'array d'array chaque cellule = index 012 puis ligne suivante 345 ...
    0 1 2 pattern = 3x en haut
    on va faire des tests sur chaque combinaison avec function checkwin et sur chaque index*/
];

cells.forEach(cell=> {
    cell.addEventListener("click", playGame, {once: true});
    /*événements clic entraine fonction playGame pour chaque cellules cells, option once:true = déclencher une seule fois chaque cellule, on ne peut pas reclqiuer sur la même cellule. 9 clics au total*/
})

function playGame(e) {
    e.target.innerHTML = playerTurn;
    /*comportera évenement, dès qu'on clique affiche sur html le x ou o du joueur. e = element qui a déclencé l'action*/
    
    if (checkWin(playerTurn)) {
        udpateGameStatus("wins"+ playerTurn);
        return endGame();
    }
    else if (checkDraw()) {
        udpateGameStatus("draw");
        return endGame();
    }
    
    udpateGameStatus(playerTurn);
    playerTurn == playerOne ? playerTurn = playerTwo : playerTurn = playerOne;
    /*pour changer le tour, vérification si c'est le joueur 1, si c'est lui joueur 2 etc*/
};

/* modification du statu du jeu et vérifier si victoire ou égalité
*commence par vérifier le statut en bas*/

function checkWin(playerTurn){
    return winningPatterns.some(combination=> {
        /* 1 tests de ts les patterns*/
        return combination.every(index=> {
            return cells[index].innerHTML == playerTurn;
            /* on prend cq pattern, on les teste et vérifier sur chacun si = symbole player
            ex pattern [0 1 2] , fonction va vérifier si 0 1 2 X...*/
        });
    })
    /*test de chaque combinaison gagnante, créa de pattern =modèle = chorégraphie */
};
function checkDraw(){
    /*verif chaque cellule, si a le carac de tel ou tel joueur*/
    /* pour faire des tests sur un array on peut utiliser deux fonctions: some = toutes les combinaisons ou every = pour faire un test via ce que l'on va renvoyer dans notre fonction*/
    return [...cells].every(cell=> {
        /*vérifier la cellule si marque joueur un ou deux. et égalité,case toute remplie */
        /* return cells.every(cell=> { modif car cells pas un array mais liste d'éléments, donc on le met dans un array [] et destructure ..., on pourra aisni utiliser .every */
    return cell.innerHTML == playerOne || cell.innerHTML == playerTwo;
    })
};

function udpateGameStatus(status){
     /*status en param*/
     let statusText;
     /*texte en bas*/
     switch(status){
        case "X":
            statusText = "Au tour du joueur 2 (O)";
            break;
        case "O":
            statusText = "Au tour du joueur 1 (X)";
            break;
        case "winsX":
            statusText = "Le joueur 1 a gagné";
            break;
        case "winsO":
            statusText = "Le joueur 2 a gagné";
            break;
        case "draw":
            statusText = "Egalité personne ne gagne";
            break;
     }

    gameStatus.innerHTML = statusText;
    endGameStatus.innerHTML = statusText;
};

function endGame(){ document.getElementById("gameEnd").style.display = "block" };
function reloadGame(){ window.location.reload() };

