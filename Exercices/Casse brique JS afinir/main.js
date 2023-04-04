// https://developer.mozilla.org/fr/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
// Ici nous avons enregistré la référence à l'élément <canvas> dans une variable nommée canvas. Ensuite, nous créons la variable ctx pour stocker le contexte de rendu 2D — l'outil réel que nous pouvons utiliser pour peindre sur Canvas.

// Voyons un exemple de code qui imprime un carré rouge sur le canevas. Ajoutez ceci en dessous de vos lignes précédentes de JavaScript.
/*ctx.beginPath();
ctx.rect(10, 40, 50, 30);
ctx.fillStyle = "#FF0001";
ctx.fill();
ctx.closePath();*/
// Toutes les instructions sont entre les méthodes beginPath() et closePath() . Nous définissons un rectangle en utilisant rect() : les deux premières valeurs spécifient les coordonnées du coin supérieur gauche du rectangle tandis que les deux suivantes spécifient la largeur et la hauteur du rectangle. Dans notre cas, le rectangle est peint à 20 pixels du côté gauche de l'écran et à 40 pixels du haut, et a une largeur de 50 pixels et une hauteur de 50 pixels, ce qui en fait un carré parfait. La propriété fillStyle stocke une couleur qui sera utilisée par la méthode fill() pour peindre le carré en rouge.

/*ctx.beginPath();
ctx.arc(240, 160, 10, 0, Math.PI*2, false);
ctx.fillStyle = "pink";
ctx.fill();
ctx.closePath();*/
// Nous ne sommes pas limités aux rectangles, voici un code pour imprimer un cercle vert. 
// Comme nous pouvons le voir, nous utilisons à nouveau les méthodes beginPath() et closePath() . Entre elles, la partie la plus importante du code ci-dessus est la méthode arc() . Elle comporte six paramètres :
// les coordonnées x et y du centre de l'arc
// rayon de l'arc
// l'angle de départ et l'angle de fin (pour finir de dessiner le cercle, en radiant)
// direction du dessin (false (faux) pour le sens des aiguilles d'une montre, la valeur par défaut, ou true (vrai) pour le sens inverse). Ce dernier paramètre est facultatif.

/*ctx.beginPath();
ctx.rect(160, 10, 100, 40);
ctx.strokeStyle = "rgba(0, 0, 235, 0.5)";
ctx.stroke();
ctx.closePath();*/
// Le code ci-dessus affiche un rectangle vide avec des traits bleus. Grâce au canal alpha de la fonction rgba (), la couleur bleue est semi transparente.
var x = canvas.width/2;
var y = canvas.height-30;
var dx = 2;
var dy = -2;
var ballRadius = 10;
// Pour détecter la collision, nous vérifierons si la balle touche (entre en collision avec) le mur et, si c'est le cas, nous modifierons la direction de son mouvement en conséquence.Pour faciliter les calculs, nous allons définir une variable appelée ballRadius qui contiendra le rayon du cercle dessiné et sera utilisée pour les calculs. Ajoutez cette variable à votre code, quelque part en dessous des déclarations de variables existantes

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}
  
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    x += dx;
    y += dy;
}
setInterval(draw, 10);
//   Afin que le dessin soit mis à jour sur le canevas à chaque image, nous allons définir une fonction draw() qui sera exécutée en continu et qui utilisera des variables pour les positions des sprites, etc. Pour qu'une fonction s'exécute de façon répétée avec JavaScript, on pourra utiliser les méthodes setInterval() (en-US) ou requestAnimationFrame().
// La fonction draw() sera exécutée toutes les 10 millisecondes (environ) grâce à setInterval .Sans arrêt, infinie.

