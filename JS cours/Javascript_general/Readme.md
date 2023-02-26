#JavaScript

##Introduction au JS

JavaScript est un langage de programmation du Web. Il a été créé en 1995. Avec les comportements dynamiques qu’il introduit, comme les boîtes de dialogue qui s’affichent à
l’écran, les formulaires interactifs ou encore les changements d’image au survol de la souris, le
succès de JavaScript est immédiat. Depuis, le JavaScript fait l’objet de nombreuses évolutions et
la dernière version a été officialisée en 2016 et constitue la septième édition du standard ECMA (ECMAScript est un ensemble de normes concernant les langages de programmation de type script et standardisées par Ecma International dans le cadre de la spécification ECMA-262).
Son objectif est de dynamiser les pages Web et de les rendre interactives. Exemple un
slider, grâce à JavaScript, nous pouvons réaliser un défilement automatique des images. Avec JS,
toute la page (ou le **DOM**) est manipulable et suite à des évènements créés par l’utilisateur, il est
possible de modifier le code HTML et CSS.
>Le DOM (Document Object Model) est une API 5Une API (Application Programming Interface) est un ensemble de fonctionnalités et de règles existant dans un logiciel permettant d'intéragir avec celui-ci de manière automatisée (plutôt que de passer par une interface utilisateur). L'API peut être vue comme un contrat simple passé entre le logiciel qui la propose et d'autres entités, telles que des logiciels ou matériels tiers. qui représente et interagit avec tous types de documents HTML ou XML. Le DOM est un modèle de document chargé dans le navigateur. La représentation du document est un arbre nodal. Chaque nœud représente une partie du document (par exemple, un élément, une chaîne de caractères ou un commentaire).Voir chapitre DOM.

>Le terme DOM est, au contraire du BOM, un terme standardisé et donc défini de manière officielle. Le DOM est une interface de programmation pour des documents HTML ou XML qui représente le document (la page web actuelle) sous une forme qui permet aux langages de script comme le JavaScript d’y accéder et d’en manipuler le contenu et les styles.
Le DOM est ainsi une représentation structurée du document sous forme « d’arbre » crée automatiquement par le navigateur. Chaque branche de cet arbre se termine par ce qu’on appelle un nœud qui va contenir des objets. On va finalement pouvoir utiliser ces objets, leurs propriétés et leurs méthodes en JavaScript.
Le DOM contient ou correspond à un ensemble d’APIs qui font partie du BOM comme l’interface Document par exemple qui représente une page et sert de point d’entrée dans l’arborescence du DOM.
Pour utiliser les propriétés et méthodes de l’interface.Le terme interface est généralement utilisé en informatique pour désigner un programme permettant un échange de données : Il peut s'agir d'un échange entre deux logiciels : l'interface est, par exemple, un programme qui reformate les données pour assurer la compatibilité entre ces deux logiciels.) Document, nous allons tout simplement utiliser la propriété document de Window. Nous avons déjà utilisée cette propriété de nombreuses fois dans ce cours, notamment lorsqu’on souhaitait injecter du texte dans un paragraphe avec le code document.                       getElementById('#').innerHTML.
Lorsqu’on demande à un navigateur d’afficher une page Web, celui-ci va automatiquement créer un modèle objet de la page ou du document. Ce modèle objet correspond à une autre représentation de la page sous forme d’arborescence contenant des objets qui sont de type Node (nœuds).
![DOM](img/interpretation.png)

Tous les navigateurs sur le marché sont capables d’exécuter JavaScript mais attention, ils
n’ont pas tous le même moteur. C’est pourquoi il est important de tester son programme sur les
principaux navigateurs.
Pour le moment, vous avez appris à taper des lignes de HTML et de CSS, ce sont des
langages de description, c'est-à-dire que vous décrivez, par le biais de ces langages, ce que vous
voulez voir apparaître dans le navigateur… et le navigateur vous suit…
Le JavaScript est quand à lui un **langage de programmation impératif**, c'est-à-dire qu’il
donne des ordres au navigateur :
• Affiche ceci !
• Passe à l’image suivante
• Si l’utilisateur clique là, alors tu fais ça !!
Ces ordres vont constituer un programme qui est en fait une liste d’instructions qui vont
être lues et interprétées par un navigateur = **scripts**.
Script = suite d'instructions qui vont être interprétées par un programme.
Pour lire le JS il faut un **interpréteur**, tous les nav en possèdent.
>JavaScript est un langage de programmation de script largement utilisé pour animer les sites web.
Un langage de script est un langage interprété.
Sa syntaxe est dite de haut niveau, plus proche du langage naturel que du langage machine : par conséquent, il est relativement simple à apprendre et est indépendant de l'aspect matériel de la machine sur lequel il est lancé.
Langage interprété
Un langage interprété est un langage qui est exécuté par un autre programme : l'interpréteur.
Celui-ci lit une ligne de code, l'analyse, l'exécute si elle est correcte et passe à la suivante ; il répète ce processus pour chaque instruction du programme. Un programme en langage interprété est donc exécuté au fur et à mesure de sa lecture.
![interpréteur](img/interpretation.png)

Langage de programation majoritairement **client-side**
>client side: exécuté du côté de l'ordi de la personne qui demande la page (server-side=exécuté côté serveur(ordi puissant qui stocke les pages et l'envoie quand elles sont demandés par le client).
Client intéragit très rarement avec le server-side(php par exemple, traitement des données en arrière plan).
Client demande page stockée sur serveur,le serveur reçoit demande, le langage server-side est exécuté côté serveur, des calculs sont fait..., une fois exécutation terminée serveur envoie la page qui ne contient que du langage client-side dont JS.Exécution client-side se fait lorsque l'on reçoit la page.
(node.JS projet pour avoir JS côté serveur?)

**Langage orienté objet à prototype**= JS va utiliser des objets dans son fonctionnement global et ces objets sont prototypés.
Objet= bloc cohérent de code qui sert à effectuer telle ou telle opération.

Js utilisé pour manipuler dynamiquement le code HTML d'un page.
>Attention différence JAVA et JS, concepts totalement différents, tâches différentes.

##L'environnement de travail

Pour coder en JS:

- Editeur de texte(VS,Komodo?,notepad++...)
- Sites pour tester

##Ou écrire le code JS

- Dans élément head d'une page HTML
- Dans élément body ""
- Dans un fichier séparé, portant extension .js (surtout gros projet)

###Dans head:

Placer un élément script à la fin de head.

    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script>
        alert("Ceci est affiché en JavaScript");
        // boite de dialogue
    </script>
    <title>JavaScript</title>
    </head>

##Dans body:

    <body>
    <script>
        alert("Ceci est affiché en JavaScript");
        // boite de dialogue
    </script>
    </body>


>**Quand écrit dans fichier Html,on peut utiliser autant de script que nécessaire dans head,body, ou les deux, mais par souci de clarté et performance, on le place dans un même élément.
Ceci seront lu linéairement (ordre d'écriture)**.

###Dans fichier séparé:

Avec **extension.js**
Meilleure maintenabilité du code grâce à la séparation des langages, réutilisation du code dans plusieurs fichiers Html.

Il faudra lier les fichiers html et js:
**on utilise la balise script avec son attribut "src" (chemin relatif du fichier js par rapport au fichier html)**.(:/si dossier parent)

    <script src=""></script>
Placé en fin de l'élément body de préférence (permet de charger la page html avant lancement du script).

Méthode de préférence.

##Syntaxes générales et commentaires

###Généralités:

####Afficher des informations:
- alert("Une deuxième instruction js"); boîte de dialogue (pop-up).
- document.write("hello"); Affiche une information directement sur notre page, dans le navigateur à l’endroit où le lien vers
le fichier script est fait.
- console.log("hello"); Affiche info dans la console (F12),affiche les erreurs, vérification du contenu d'une variable.

**Chaque instruction doit être terminée par un ";"**.

- Texte entre guillemets: "" ou ''
- Chiffres: rien
- Chiffres décimaux: pas de virgule, mais "."(5.40)

ex:

    alert("Une deuxième instruction js");
    alert(5);

**Indentation** : pour plus de clarté
Quand : hiérarchie?
nouvelle indentation à l'intérieure, si instruction en contient sinon même indentation.

####Les commentaires en JS:
Il existe des commentaires monoligne et des commentaires multilignes.
On peut utiliser la syntaxe des commentaires multi pour les mono.
**// -> mono
/ * début et * / fin -> multi (on peut rajouter une étoile sur les lignes du milieu).**

##Gestion des données

###Les variables:

![schéma](img/variables_schéma.png)

Sorte de petite boîte qui possède un nom et contient une valeur.
Comme son nom l'indique peut changer de valeur à tout moement.
Doit être déclarée une et une seule fois dans un programme.
Il existe deux types de variables:
- **Globales**: utilisées dans tout le programme, déclarées à la base du code, en dehors de toute fonction.
- **Locales**:
qui ne servent que pour un programme ou fonction particuliers, déclarées au sein de ce programme ou cette fonction.

####Déclaration

Pour déclarer une variable on utilise la syntaxe : **var ou let**.
var ancienne syntaxe
let nouvelle, à privilégier.

Règle de nommage (valable pour les fonctions)= **CamelCase** :

- aucune ponsctuation
- mise en capitale de la première lettre des mots, sauf le premier
- doit commencer par une lettre
- doit contenir uniquement des lettres, _,chiffres
- aucun espace
- est sensible à la casse (Se dit de tout programme qui fait une distinction entre les lettres majuscules et les lettres minuscules, et qui ne traite donc pas de la même façon les données ou les commandes selon qu'elles sont entrées en majuscules ou en minuscules).

exemple: la variable prénom est déclarée ainsi: 

    let prenom;

exemple :

    let ma PremiereVariable = "Bonjour";
    console.log(maPremiereVariable);
    

####Initialisation

Initialiser= assigner une valeur pour la première fois.
On utilise le signe **=**.

Elle peut se faire:
- en même temps que la déclaration
- après la déclaration
- on peut déclarer plusieurs variables sur une ligne en les séparant par une virgule.

Exemples:

    let prenom = "paul;
Initialisation en même temps que déclaration.

    let nom;
    nom = "paul;
Déclaration puis initialisation.

    let titre = "chat", production = "universal", annee = 2013;
Déclaration de plusieurs variables sur une même ligne.

####Remontée ou hoisting des variables

Une variable déclarée avec var peut-être manipulée en haut de code et être déclarée en fin de code car le JS va traiter les déclarations avant le reste du code JS.Ce comportement est appelé **remontée ou hoisting**, il est dorénavant jugé inadapté.
Avec let, il faut déclarer la variable avant de l'utiliser.

exemples:

    prenom = "paul";
    var = prenom;
Initialisation suivi de déclaration avec var, ok.
Avec let ne fontionne pas!

####La redéclaration de variable

Avec var, il est possible de redéclarer, plusieurs fois, la même variable pour modifier sa valeur.
Avec let, on ne déclare qu'une seule fois.Pour changer sa valeur, il faut lui affecter une autre valeur.

Exemples:

    var prenom= "paul";
    var prenom= "julien";

    let prenom= "david";
    prenom= "nicolas";

###Constante

Pour créer ou déclarer une cosntante en JS, il faut utiliser le mot clef : **const**.
On la déclare de la même façon que let.
**Il faut obligatoirement l' initialiser lors de sa déclaration sinon une erreur sera retournée.**
**Valeur inchangeable**.

ex:

    const x = 5;

##Les types

###Quelles valeurs peuvent prendre mes variables?

- **String** : chaîne de caractères, texte mis entre "" ou '' ou quotes.
- **Number** :entiers, réels, float (attention au point).
- **Booléen**: contient deux valeurs true ou false.
- **Tableau** : = **array** en JS, il contient plusieurs valeurs classées dans un tableau.
- **Objet**: contient des propriétés et des méthodes.
![objet schéma](img/objets_schéma.png)

>JavaScript est conçu autour d'un paradigme simple, basé sur les objets. Un objet est un ensemble de propriétés et une propriété est une association entre un nom (aussi appelé clé) et une valeur. La valeur d'une propriété peut être une fonction, auquel cas la propriété peut être appelée « méthode ». En plus des objets natifs fournis par l'environnement, il est possible de construire ses propres objets. Ce chapitre aborde la manipulation d'objets, l'utilisation des propriétés, fonctions et méthodes, il explique également comment créer ses objets.

##Concaténation

Consiste en l' assemblage de textes et de variables.
On utilise le signe "+", utilisé également pour additionner, JS fait la différence en focntion du type de valeurs qui entourent le +.
S'il s' agit de nombres: addition, s'il s'agit de textes : concatène.

exemple:

    let nom = "chat";
    let prenom = "bahamut";
    console.log(nom+prenom);
affichage : chatbahamut
**Attention aux espaces**

    let nom = "chat ";
**espace après le nom**

##Calculs sur variables

Il est possible de faire des claculs sur des variables de type number :

|Opération|Symbole|
|:-------|:------|
|addition|+|
soustraction|-|
multiplication|*|
|division|/|
|modulo (reste division euclidienne|%|
|incrémenter var de 1|++|
|décrementer var de 1|--|
|incrémenter une var de la valeur d'une seconde var|+=|
|décrémenter une var de la valeur d'une seconde var|-=|

exemple:

    let x = 6;
    let y = 7;
    let addition = x + y;

##Prompt

**Fonction** qui permet de demander à l' utilisateur une information.
Va ouvrir une boîte de dialogue qui contiendra une question et un champ vide de réponse.

exemple:

    let age = window.prompt("Quel âge avez-vous?");
Pour stocker la valeur saisie par l'User dans une variable, il faut attribuer ce prompt à une variable.
La valeur saisie sera enregistrée dans la variable age.

**Attention, le prompt, renvoie toujours une chaîne de caractères.Ce qui signifie que pour faire des calculs avec cette variable, il va falloir modifier le type de la variable obtenue avec le prompt**.


##Conversion

Les fonctions **parentInt** et **parseFloat** servent à convertir une chaîne de caractères en nombre entier pour le premier, et à virgule pour le second.

exemple :

    age = parseInt(age);
    age ++;
conversion de la var age en type number, et incrémentation possible.

##Les tableaux : l'objet array

![tableaux](img/tableaux.png)

###Les propriétés

|Propriété|Description|
|:--------|:----------|
|lenght|contient le nombre d' éléments du tableau|
|input|permet de faire une recherche dans le tableau à l'aide d'un expression régulière|
|prototype|permet d' ajouter des propriétés personnalisées à l'objet|

###Les méthodes standards

|Méthode|Description|
|:--------|:----------|
|concat(tab1,tab2[,tab3,...])|permet de concaténer plusieurs tableaux, créer un tableau à partir de plusieurs tableaux|
|tableau.join(",")|renvoie une chaîne de caractères contenant tous les éléments du tableau séparé par le séparateur mis en paramètre : vat tab=newArray("pommes","poires")document.write(tab.join(",")renvoie pommes,poires)|
|tableau.pop()|supprime le dernier élément du tableau et retourne sa valeur|
|tableau.shift()|supprime le premier élément du tableau |
|tableau.push(valeur1,valeur2,...)|ajoute un ou plusieurs éléments  en fin de tableau et retourne la nouvelle taille du tableau|
|tableau.unshift()|supprime le premier élément du tableau|
|tableau.splice(debut,nbr_elements,"new_1","new-2")|Ajoute/retire des éléments d'un tableau en fonction de la position indiqué.Paramètres: **début**L'indice à partir duquel commencer à changer le tableau (l'indice du premier élement étant 0). Si sa valeur est supérieure à la longueur du tableau array.length, début est ramené à la longueur du tableau array.length. S'il est négatif, le changement commencera d'autant d'éléments à partir de la fin du tableau, c'est à dire à partir de l'index array.length + début. Si array.length + début est inférieur à 0, le changement commencera à l'index 0.**nbASupprimer**Un entier indiquant le nombre d'anciens éléments à remplacer. Si ce paramètre est absent ou si sa valeur est supérieure ou égale à array.length - début, alors les éléments entre début et la fin du tableau seront supprimés. Si nbASupprimer vaut 0, aucun élément ne sera supprimé. Dans ce cas, il est nécessaire de spécifier au moins un nouvel élément.**élemN**Les éléments à ajouter au tableau à partir de début. Si vous ne spécifiez pas de nouvel élément, les anciens éléments seront simplement supprimés du tableau.|
|tableau.slice(debut,fin)|Renvoie un tableau contenant une partie extraction) des éléments d'un tableau.Le paramètre fin est exclu|
|Tableau.sort() |trie les éléments d'un tableau.|
|Tableau.includes(valeur recherché,position)|Permet de savoir si un élément se trouve dans un le tableau elle recoit en paramètre l'element recherché et la position dans le tableau a partir de laquelle la recherche commence, elle retourne true ou false.|
|Tableau.toString()|Renvoie la chaîne de caractères correspond à l'instruction qui a permis de créer l'objet Array|
|Tableau.indexOf(valeur,position) |Retourne la position de l'élément mis en paramètre la recherche commence en fonction du deuxième paramètre si ce deuxième paramètre est omis la recherche commence en début de tableau si l'élément n'est pas trouvé elle retourne -1.|
|Tableau.lastIndexOf(valeur,position)|similaire a indexOf la recherche se faisant à partir de la dernière position.|
|Tableau.valueOf |Retourne tout simplement la valeur de l'objet Array auquel elle fait référence.|
|Tableau.reverse()|Inverse l'ordre des éléments du tableau|

Exemples :

    let array3 = ["Javascript", "Php", "Python"];
    let array4 = ["Ruby", "Solidity"];

concat():

    let newArray = array3.concat(array4);

join() :  

    console.log(array3.join(' -> '));
->Javascript -> Php -> Python

    console.log(array3.join(' '));
->Javascript Php Python

.slice():

    console.log(array3.slice(1));
    ["Php", "Python"]
->l’extraction commence à l’index 1 jusqu’au dernier index inclus

    console.log(newArray.slice(1, 4));
->l’extraction commence à l’index 1 et
s’arrete à l’index 4 (index 4 exclu)

.indexOf() et .forEach():

    console.log(array3.indexOf("Python"));
->donne l’index de « python » soit 2

    array3.forEach((languages) => console.log(languages));
->applique un forEach au tableau 3 et renvoi les valeurs de
chaque index

.every() et .some():

    console.log(array3.every((language) => language == "Php"));
->renvoie false car tous les index ne sont pas « php »

    console.log(array3.some((language) => language == "Php"));
->renvoie true car aux moins un index contient « php »

.shift():

    let shift = array3.shift();
->supprime le premier element du tableau

.pop():

    console.log(array3.pop());
->supprime le dernier element du tableau et renvoie sa valeur

.splice():
.splice(index de depart, nb à supprimer, element à ajouter)

    var mesPoissons = ["scalaire", "clown","mandarin","chirurgien"]; 

    var enleves = mesPoissons.splice(2, 0, "tambour");
    // supprime 0 élément à partir de l'index 2, et insère "tambour"
    // mesPoissons est ["scalaire", "clown", "tambour", "mandarin", "chirurgien"]
    // enleves est 0, aucun élément supprimé

    enleves = mesPoissons.splice(3, 1);
    // supprime 1 élément à partir de l'index 3
    // mesPoissons est ["scalaire", "clown", "tambour","chirurgien"]
    // enleves est ["mandarin"]
    
    enleves = mesPoissons.splice(2, 1, "trompette");
    // supprime 1 élément à partir de l'index 2, et insère "trompette"

    enleves = mesPoissons.splice(0, 2, "perroquet", "anémone", "bleu");
    // mesPoissons est ["perroquet", "anémone", "bleu", "trompette", "chirurgien"]
    // enleves est ["scalaire", "clown"]

    enleves = mesPoissons.splice(mesPoissons.length - 3, 2);
    // supprime 2 éléments à partir de l'indice 2
    // mesPoissons est ["perroquet", "anémone","chirurgien"]
    // enleves est ["bleu", "trompette"]

    var mesPoissons = ["perroquet", "anémone", "bleu", "trompette", "chirurgien"];
    enleves = mesPoissons.splice(2);
    // on retire les éléments à partir de l'indice 2
    // mesPoissons vaut ["perroquet", "anémone"]
    // enleves vaut ["bleu", "trompette", "chirurgien"]

    var mesAnimaux = ["cheval", "chien", "chat", "dauphin"];
    enleves = mesAnimaux.splice(-2, 1);
    // mesAnimaux vaut ["cheval", "chien", "dauphin"]
    // enleves vaut ["chat"]

.reduce():
Reduce permet de calculer toutes les valeurs du tableau

   let arrayNumber = [4, 74, 28, 12, 1];
    arrayNumber.reduce((x, y) => x + y);
->donne 119
 
filter():
permet de filtrer les éléments d’un tableau

    let arrayNumber = [4, 74, 28, 12, 1, 17 , 8];
    arrayNumber.filter((number) => number > 10);
->donne (4) [74, 28, 12, 17]

sort():
permet de trier les éléments d’un tableau

    arrayNumber.sort();
sans autre précision la méthode tri selon la dizaine ce qui donne :
->(7) [1, 12, 17, 28, 4, 74, 8]

    arrayNumber.sort((a, b) => a - b);
->en passant deux paramètres a et b et en indiquant a – b , le tri se fera
par ordre croissant
(7) [1, 4, 8, 12, 17, 28, 74]

  arrayNumber.sort((a, b) => b - a);
->en passant deux paramètres a et b et en indiquant b – a , le tri se fera
par ordre décroissant
(7) [74, 28, 17, 12, 8, 4, 1]

##Les objets

![objet](img/objets.png)

Tout comme les tableaux, les objets permettent de stocker beaucoup d'informations dans une seule et même variable.
Mais contrairement aux tableaux, on ne va pas utiliser un index.

###Création d'un objet

Prenons un tableau qui contient les informations concernant une personne:

    const client = ["jean","pierre","0687440005,"vandingenenannesophie@gmail.com"];

Toutes les informations sont enregistrées dans une seule et même variable,mais ça n'est pas clair.

Pour pouvoir donner une étiquette aux données présentes dans une variable, nous allons utiliser un objet:

    const client= {
        prenom : "jean",
        nom : "pierre",
        telephone : "0687440005",
        mail : "vandingenenannesophie@gmail.com
    };
**Un objet s'ouvre avec des accolades, le nom des propriétés sera suivi de  :puis d'une valeur.**

####Ajout d'une propriété à un objet existant:

Ajoutons la ville ->

    const client = {
        prenom:"",
        nom : "",
        telephone : "",
        mail :""
    };
    cleint.ville = "Lille";
**Pour ajouter un champ, une nouvelle instruction, le nom de la variable qui contient l'objet, un "." est égal à une valeur.**

####Modification d'une valeur d'une propriété existante:

**On appelle la clé dont nous souhaitons changer la valeur, puis nous lui affectons une nouvelle valeur.**

    client.telephone = "nvl val";

###Lire un objet

Pour accèder à la valeur d'une des étiquettes, il suffit de faire ceci :

    console.log(client.nom);
nomvar.propriété de la valeur souhaitée.
>console.log() est une méthode de l’objet console en JavaScript qui est utilisée pour afficher tout type de variables ou bien des messages devant être affichés à l’utilisateur dans la console d’un navigateur ou dans le terminal.Pour afficher le contenu des variables en JavaScript, on utilise la méthode console.log en passant autant de variables qu’on veut en paramètres : console.log(permiere_variable, deuxieme_variable, ...).

##Les boucles

Faire répèter à l'ordinateur une série d'instructions tant qu'une condition est respectée.

- while
- for
- ...
  
###While

Exemple:
Demander à l'user de saisir son âge

    let age = window.prompt("Quel est votre âge?");

    while (isNaN(age)) {
        age = window.prompt("Merci de répondre un nombre. Quel est votre âge?);
    }

    console.log("vous avez " + age + " ans.");
Age demandé, puis :
"tant que l' âge n'est pas un nombre (is NaN),alors on demande l'âge de nouveau.
La boucle ne s'arrêtera qu'une fois que la condition, dans parenthèse du while, n'est plus respectée : âge sera un nombre.

Exemple :
Exécuter la boucle un nombre défini de fois.

    let cpt = 0;

    while(cpt<=20){
        cpt++;
        console.log(cpt);
    }
La boucle s' exécute tant que le compteur est plus petit que 20.On incrémente le compteur de 1 à chaque tour.

**Attention à bien penser à incrémenter,sion boucle infinie!**.

###For

![for](img/for.png)

Cette boucle est un peu particulière, elle a dans ses paramètres un **index, une condition,et une incrémentation**.
C'est la boucle utilisée pour parcourir un tableau bien souvent.

    for(let i=0; i<liste.lenght ; i++){
        console.log(liste[i]);
    }
->initialisation : let i=0 = initialisation de l'index qui va être incrémenté.
->condition : i<liste.lenght = condition qui doit être respectée pour que la boucle continue.
->incrémentation : i++ = incrémentaiton de l'index.
Cette boucle passe par chaque case du tableau liste et afficher ce qu'il contient en console.

####Portée de la variable ou scope:

Dans l'exemple précédent nous déclarons la variable i dans la boucle for.Les variables déclarées avec let ne sont utilisables que dans la structure dans laquelle elles sont déclarées.

Exemple:

    for(let i=0; i<liste.lenght ; i++){
        console.log(liste[i]);
    }
    console.log(i);
->console va retourner une erreur! "i is not defined"
**Elle ne connaît pas i car déclarée dans for donc non utilisable en dehors.**
**Valable pour tous les blocs, if, while,...**

##Les conditions

![if](img/if.png)
![if else](img/else_if.png)
![switch](img/switch.png)

Structures de contrôle, qui permettent de contrôler les instructions en fonction de l'évolution du programme.

Il en existe deux sortes : conditions et boucles.

Une conditon est un test que va effectuer le programme, et nous allons lui indiquer ce qu'il doit faire si cette condition est vraie,ou faire si fausse.

Exemple:
Si l'user a plus de 18 ans, on va lui dire qu'il est majeur, sinon, on lui dira qu'il est mineur.

    let age = window.prompt("Quel âge avez-vous?");
    console.log(age);

    age = parseInt(age);
->on parse l' age pour le considérer comme un nombre.

    if(age === 18){
        console.log("vous êtes majeur);
    }
    else{
        console.log("vous êtes mineur");
    }
->dans ca cas, si age=19, le programme nous dira que nous sommes mineur,il faut utiliser un autre opérateur.

###Les opérateurs

Voici les différents opérateurs possibles pour effectuer une comparaison entre deux variables :

|Opérateurs|Signification|
|:------|:------|
|==|égal à|
|!=|différent de|
|===|strictement égal à|
|!==|strictement différent|
|>|supérieur|
|>=|supérieur ou égal|
|<|inférieur|
|<=|inférieur ou égal|

###If Else

Structure conditionnelle qui va permettre de tester une condition et de rélaiser des instructions différentes selon qu'elle est vraie ou fausse.

    if(condition){
        instruction si vraie;
    }
    else{
        instruciton si fausse;
    }
Le programme effectuera les instrucitons présentes entre les accolades du if si la condition entre parenthèse retourne true,inon du else si retourne false.

Else non obligatoire.

L'on peut enchaîner les if:

    if(age >= 100){
        console.log();
    }
    else if(age >= 18){
        console.log();
    }
    else{
        console.log();
    }

###Conditions multiples

Les conditions dans les structure de contrôle peuvent être multiples.
C'est là qu'interviennent les **ET et OU**/.

####&&, et
Exemple:

    let prenom = "paul";
    if(age >= 100 && prenom === "paul"){
        console.log("Bonjour paul");
    }
**&& = et**
Il faut que les deux conditions retournent true pour que les instructions puissent être exécutées.

####|| ou

    let prenom = "paul";
    if(age >= 100 || prenom === "paul"){
        ;
    }
**|| = ou**
Il faut que l'une des deux conditions retourne true pour l'exécution.

###Switch

Permet de comparer la valeur d'une variable avec une multitude de valeurs possibles et d'agir en fonction.
Pratique lors de la comparaison d'une variable à plusieurs valeurs.
**Elle ne teste que l'égalité**.

Exemple:

    let nombre = window.prompt("choississez un nombre entier entre 1 et 8");
    nombre = parseInt(nombre);

    switch(nombre){
        case 1 :
        console.log("");
        break;
        case 2 :
        console.log("");
        break;
        default :
        ;
        break;
    }
->Chaque valeur possible se trouve avec un case, ici comparaison var nombre à des chiffres donc pas de "", si chaîne de caractères ne pas les oublier.

**Default permet de définir une action si aucune des valeurs des case ne correspond au contenu de la variable.Il est optionnel**.

L'on peut définir une même action pour plusieurs valeurs différentes :

    switch(){
        case : case :
        ;
        break;
    }

##Les fonctions

![fonctions](img/fonctions.png)

Lorsque le code devient trop long et répétitif, il est possible de l'organiser en petites unités appelées **fonctions**, qui vont s'occuper d'une tâche précise.

Leurs avantages:
- Raccourcir le code en évitant de répéter des lignes de code identiques
- Appeler une fonction suite à une action de l'user
- ...
  
Exemple:

    function sayHello(nom,prenom){
        const hello = "bonjour ${prenom} ${nom};
        returnhello;
    }
->cette fonction retourne une chaîne de caractère
**function**: création de fonction
sayHello: nom de la fonction
(nom,prenom): **arguments**,permettent de spécifier que pour utiliser notre fonction,il faudra lui apporter ces deux arguments, ces deux données
**return**hello: la fonction va répondre quelque chose

###Les arguments

Optionnels,une fonction peut ne pas avoir besoin de données d'entrée.La parenthèse sera vide.
Il peut y avoir autant que nécessaire.

###Le retour

**Return** optionnel.
Permet aussi de stopper une fonction,si un bout de code est écrit après il ne sera pas exécuté.

###Réutiliser la fonction

Exemple:

      function sayHello(nom,prenom){
        const hello = "bonjour ${prenom} ${nom};
        returnhello;
    }
    console.log(sayHello("vilport","cecile"));

###Valeurs par défaut

Il est possible de spécifier des valeurs par défaut pour nos arguments, aisni si un user oublie  ou ne connaît pas un des arguments demandés,une valeur par défaut lui sera attribuée.
De ce fait, ceci permet également, de rendre cet argument optionnel:

      function sayHello(nom,prenom = "M/Me"){
        const hello = "bonjour ${prenom} ${nom};
        returnhello;
    }
    console.log sayHello("vilport");
-> M/Me vilport

##Le DOM

###Window

L'objet window est l'objet global qui représente votre fenêtre.Tout code JS qui est exécuté sur une page à accès à cet objet.
On peut avoir accès à des informations de l'historique window.history de l'onglet, ainsi que différentes informations comme la largeur window.interface...

test : console.log(window);

###Le DOM

![DOM](img/DOM.png)

Document Object Model, structure du fichier HTML, il nous permet d'atteindre les différents éléments et de pouvoir agir dessus.

###La sélection d'éléments

Il existe plusieurs façon de sélectionner des éléments:

####getElementById

Sélection par l'id

Exemple:

    let divUne = document.getElementById("id");
On peut ainsi agir dessus pour lui apporter des modifications:

    divUne.style.backgroundColor = "color";
    divUne.style.padding = "1em";

Remarque: les propriétés CSS qui sont habituellement en plusieurs mots sont transformés en camelCase pour la manipulation JS.

####QuerySelector

Sélecteur plus souple, il permet de sélectionner n' importe quel élément du DOM avec un simple sélecteur CSS.

exemple:

    let divUne = document.querySelector("#id");

    let divUne = document.querySelector("div:nth-child(1)");

####QuerySelectorAll

Sélection de plusieurs éléments en même temps.

Exemple :

    let divs = document.querySelectorAll("div");
Sélection de toutes les div du doc.

###AddEventListener

Sert à ajouter un événement à un élément du DOM.**Un événement est une action de l'user ou du programme**.

    monElement.addEventListener("evenement",functionALancer);

####DOMContentLoaded

Evénement qui se produit quand la page web est chargée, et qui indique que tous les éléments sont prêts, et donc que l'on peut agir sur la page avec  le code JS.

    document.addEventListener('DOMcontentLoaded",function()){
    action
    }   

####Exemple sur les boutons 

    function onClick2(){
    alert("coucou");
    }

    function onClick1(){
        let titre = document.querySelectorAll("h2");
        for(i=0;i<=titre.lenght;i++){
            titre[i].classList.toggle("blue");
        }
    }

    function changerDeCouleur(){
        var maDiv = document.getElementById("id");
        maDiv.classList.toggle("backgroundfonce");
    }

    document.addEventListener("DOMcontentLoaded",function(){
        let button2 = querySelector("#idbutton");
        let button1 = document.getElementById("changerBackground");

        button2.addEventListener("click",onClick1);
        button1.addEventListener("click",changerCouleur);
    })

####RemoveEventListener

Retirer un événement, par exemple désactiver un bouton.

button1.removeEventListener("click",changerCouleur);

Il est important que la fonction de **callback** ainsi que l' événement soient les mêmes que lors de l'ajout.
>En Javascript (est comme c’est le cas dans d’autres langage de programmation), les fonctions sont des entités d’ordre supérieur ou de classe supérieure. De telles fonctions permettent d’abstraire les valeurs et les actions, c’est-à-dire qu’elles peuvent accepter des fonctions en guise d’arguments au même titre que les variables et elles peuvent aussi retourner des fonctions. Une fonctions passée en argument d’une autre fonction est appelée fonction de rappel ou callback function.

###classList

La propriété classList sert à gérer les classes des balises Html
.
Voici quelques-unes de ses méthodes :

- monElement.classList.add("maClasse) -> ajoute une classe
- monElement.classList.remove("maClasse) -> retire une classe
- monElement.classList.toggle("maClasse) -> ajoute ou enlève une classe
- monElement.classList.lenght("maClasse) -> retourne le nombre de classe que l'élément contient  

###Variable this

Dans un gestionnaire d'événement; la variable **this** représente l'objet DOM qui a déclenché l'événement.

Exemple :
On passe la souris sur une div du DOM, le bakground va changer de couleur.
On commence par sélectionner les divs et par leur affecter un événement:

    let divs = document.querySelectorAll("div");
    divs.addEventListener("mouseover",changerText);

Puis on crée la fonction :

    function changerText(){
    this.classList.add("green");
    }
Au sein de la fonction, this représentera uniquement la div sur laquelle nous avons passé la souris,celle qui a déclénché l'événement.

###TextContent

Modifie le contexte textuel d'un noeud du DOM.

Exemple :

    <div id="maDiv">Hello</div>

    let maDiv = document.getElementById("maDiv");
    alert(maDiv.textContent);
->renvoie hello

    maDiv.textContent = "Bonjour";
->modifie contenu de la div

###InnerHTML

Equivalent de textContent en HTML:
**monElement.innerHTML**.
Contrairement à textContent, il va interpréter le code HTML compris dans la variable.

Exemple:

    monElement.textContent = "<strong>Coucou</strong>
->retourne une valeur qui ne sera pas en gras alors qu'avec innerHTML si.

##Les timers

JavaScript s' exécute sur le navigateur du client et permet d' intéragir vec lui.
Il va donc pouvoir détecter les événements éventuels qui se produisent sur la page.

L'on a vu deux types d' événements : 
- Evénements lancés par la navigateur lui-même:
- - j'ai fini de charger et de lire le HTML (DOMContentLoaded)
- - j'ai fini de charger toute la page et ses dépendances (load)
- Evénements lancés par le client (user):
- - click
- - mouseover...

Nous pouvons intéragir facilement avec ce qu'il se passe sur la page.Mais il manque une notion importante pour compléter ce panel d' événements:
-> comment déterminer le temps qui passe et s' en servie pour lancer des actions?

La gestion du temps en JS, va nous servr à gérer les animations, temporiser des actions...

###SetTimeout et clearTimeout

###setTimeout

Cette méthode va nous permettre de définir un intervalle en millisecondes avant le déclenchement d'une action.

    let timeoutld = window.setTimeout(callBackFunction[,delay,param1,param2,...]);
->paramètres:
- callBackFunction : fonction appelée lors du dépassement de délai. On peut soit fournir une fonction définie ailleurs dans notre code ou une fonction anonyme.
- delay(optionnel) : le délai en millisecondes avant que la fonction callBack soit appelée.Par défaut, vaut 0.**1000ms = 1s**.
- param1,param2 (optionnels) : les paramètres(valeurs) qui seront passés à la fonction callBack.
  
Valeur de retour :
timeoutld : identifiant unique founi par JS?.Si vous souhaitez retrouver et arrêter le timer avant son exécution.

####clearTimeout

Cette méthode permet d' arrêter le timer s'il n'a pas été encore déclenché.

    window.clearTimeout(timeoutld);
->paramètres:
timeoutld

###SetINterval et clearInterval

####setInterval

Méthode qui permet de définir une action qui sera exécutée à intervalles réguliers.

    let intervalID window.setInterval(callbackFunction[,delay,param1,pram2?...]);
->paramètres
- callBackFunction : c'est la fonction qui sera appelée à tous les intervalles déterminés. On peut ici
fournir un nom de fonction défini ailleurs dans notre code ou directement une fonction anonyme
(comme pour toutes les fonctions évènementielles JavaScript qui appellent une fonction de callBack),
- delay (optionnel) : le délai en millisecondes entre chaque intervalles d’exécution de la fonction de
callBack. Par défaut, ce paramètre vaut 0, la fonction est exécutée dès que possible et
continuellement.
- param1, param2... (optionnels) : les paramètres (valeurs) qui seront passés à la fonction de callBack.

Valeur de retour:
timeoutID : un identifiant unique fourni par Javascript si vous souhaitez retrouver et arrêter votre "timer" à tout moment.

####clearInterval

Cette méthode va nous permettre d'arrêter le "timer" à tout moment.

    window.clearInterval(intervalID);


###RequestAnimationFrame et CancelAnimationFrame

####requestAnimationFrame

Cette méthode va nous permettre de définir une action qui sera exécutée au rafraichissement de l'écran.

    let animationID = window.requestAnimationFrame(callBackFunction);
->paramètres:
- callBackFunction : c'est la fonction qui sera appelée au prochain rafraichissement de l'écran. On peut
ici fournir un nom de fonction défini ailleurs dans notre code ou directement une fonction anonyme (comme pour toutes les fonctions évènementielles JavaScript qui appellent une fonction de callBack),

valeur de retour:
animationID : un identifiant unique fourni par Javascript si vous souhaitez retrouver et arrêter votre
demande de rafraichissement à tout moment.

####cancelAnimationFrame

Cette méthode va nous permettre d'arrêter l’exécution du rafraichissement à tout moment.

    window.cancelAnimationFrame(animationID);

>**Mieux comprendre le fonctionnement : les FPS
Alors que setInterval et setTimeout fonctionnent avec un délai en millisecondes, requestAnimationFrame lui va
être exécute à chaque fois que le navigateur fait appel au rafraichissement de l'écran auprès de la machine du
client (rafraichissement assuré en grande parti par le processeur graphique).
Cela signifie que :
• la méthode requestAnimationFrame est plus adapté à la création d'animations fluides,
• le rafraichissement va dépendre de la machine client, en général un écran est rafraichi 60 fois par
seconde, on dit que l'on affiche 60 FPS (frames par seconde),
• le rafraichissement va dépendre aussi du travail demandé au navigateur mais aussi de sa capacité à ce
moment là d'assurer le travail (capacité de l'ordinateur, navigateur plus ou moins utilisé et nombre
d'onglets ouverts), les FPS sont donc variables comme dans les jeux vidéos, mais le rafraichissement
sera effectué quoi qu'il arrive,
• le navigateur va optimiser et préparer le rafraichissement, contrairement à un setInterval, il sait ce
qu'il a à faire au prochain rafraichissement et va le prioriser et l'optimiser,
• le navigateur ne fera l'action de rafraichissement que si l'onglet du navigateur comportant le script est
actif, contrairement à setInterval et setTimeout qui continuerons à être exécutés même si un autre
onglet est actif (donc on optimise la charge du navigateur).
Alors tout ça à l'air magique mais il y a ici une chose que nous ne maitrisons pas c'est le nombre de frames par
seconde (FPS). Il nous faudra ralentir le taux de rafraichissement si nous en avons besoin.**

##Ajax

Ajax (Asynchonous Javascript and XML) est méthode qui permet de rafraîchir une partie de page Web
sans recharger la page complète. Il permet aussi d’afficher dynamiquement des données obtenues en PHP
(exemple des données issues d’une base de données).
Un exemple : Facebook !
Lorsque vous créez une publication, il faut un système qui enregistre votre publication et en même temps
l’affiche sur votre fil d’actualité. Ajax fait ça !
Pour mettre à jour une base de données, de quoi a-t-on besoin ? D’un langage côté serveur (donc php) et
pour rafraîchir la page : d’un langage côté client. Ajax met en relation ces 2 langages !

###Comment fonctionne un appel Ajax :

- L’utilisateur créé un évènement (un clic ou autre)
- Le navigateur envoie sa requête ajax(en jquery) à un script PHP
- Le script PHP fait ce qu’il a à faire (insertion ou consultation de bdd, envoi de mail…)
- Le script PHP renvoie une réponse à l’appli Jquery
- Jquery traite la réponse et l’affiche

###Renvoi d'un appel

Un appel AJAX va renvoyer différents types de données :
- Des données simples (chaînes de texte)  Dans le fichier PHP, nous aurons soit juste du
texte, soit une fonction qui renvoie du texte
- Du html  Du code HTML dans le fichier PHP
- Du Json  Le fichier php renvoie un JSON avec la fonction json_encode()

###Comment fait-on?

Il y a plusieurs façons d’écrire une requête Ajax, la syntaxe en JavaScript pur est assez complexe, la voici :

[OpenClassroom code](https://openclassrooms.com/fr/courses/245710-ajax-et-lechange-de-donnees-en-javascript/244798-lobjet-xmlhttprequest)

##Exercices (voir dossiers exercicesMM) :

- Afficher "Hello World" dans la console du navigateur.
- Déclarer une variable avec le mot-clé let ayant comme nom « color ».Puis, sur la ligne suivante, lui assigner la valeur « rouge ».
- Déclarer une variable « msg » avec le mot-clé `const` en lui assignant une valeur de votre choix, telle qu'un message ou un nombre.Afficher la valeur de cette variable dans la console du navigateur.
- Déclarer une variable ayant pour type String.Afficher la valeur de cette variable dans la console du navigateur.
- Déclarer une variable `x` dont la valeur est égale à `66`. Déclarer une variable `y` dont la valeur est égale à `12`.Déclarer une variable `result` dont la valeur est égale à la somme de `x`et `y`.Afficher la valeur de la variable `result` dans la console du navigateur.
- projet - hello you Hello You
Nous allons construire ensemble un programme capable de vous saluer avec votre prénom. Pour cela, nous allons d'aboir devoir apprendre à interagir avec l'utilisateur.
window.prompt. Jusqu'à maintenant, nous ne connaissons qu'une seule fonction : console.log. Apprenons-en une deuxième : const userAge = window.prompt("Quel âge avez-vous ?");
console.log(userAge);
Si vous exécutez cette instruction, votre navigateur va ouvrir une petite fenêtre avec un champ de texte en vous posant cette question « Quel âge avez-vous ? » Vous allez entrer par exemple « 22 » dans le champ, valider, et la console affichera alors "22".window.prompt a pour fonction de demander quelque chose à l'utilisateur, et de renvoyer la réponse ainsi reccueillie sous forme de String. Ici nous stockons directement cette valeur de retour dans la variable userAge pour ensuite l'afficher.
window.prompt renvoie toujours, toujours une String. Même si l'utilisateur entre le nombre 12, window.prompt renverra en fait la chaîne "12".
Cette information aura son importance en temps voulu. Vous n'en aurez pas besoin pour cet exercice.
Nous voulons un programme qui demande à l'utilisateur son prénom, disons par exemple « Jacques », pour ensuite afficher dynamiquement dans la console "Salut Jacques !".
Petit indice : vous allez avoir besoin de concaténer des Strings.
Bonus 1:
Notre programme va désormais demander à l'utiliseur son prénom, son nom de famille et son année de naissance. Nous afficherons ensuite dans la console la phrase suivante : "Salut Jacques Dumont, cette année tu 42 ans !"
Afin de calculer l'âge de l'utilisateur, vous allez avoir besoin d'effectuer un calcul à partir de l'année. Pour ce bonus, vous êtes autorisés à la spécifier en dur dans le code, sans forcément chercher à la dynamiser. Par exemple, en 2021, vous pourrez simplement déclarer une variable const currentYear = 2023;.
- Date du jour. Afficher dynamiquement la date du jour en Html sous la forme de nous sommes le mardi 23 évrier 2023.
- L' user saisit un montant HT, le résultat TTC s'affiche en HTML.
Il faut réaffciher toutes les informations.Le montant HT est à virgules.
- Énoncé: Créer puis afficher en HTML un objet représentant une voiture :
1. La marque de la voiture
2. Son année de fabrication
3. Sa date d'achat
4. La liste des passagers (au moins 2), avec le prénom de chacun des passagers
Détails: Afficher les propriétés de l'objet voiture sous la forme d'une liste HTML
On peut représenter n'importe quelle date en JavaScript en donnant une
chaîne de caractères à la création d'une instance de la classe Date :
Représente la date du 5 avril 2014, format américain YYYY-MM-DD. var
myBirthday = new Date('2014-04-05');
Rappels: On peut stocker un objet dans un tableau tout comme on peut stocker un tableau dans un objet...
- Déclarer une variable « colors » contenant les valeurs "Rouge" et "Bleu".Afficher "Bleu" dans la console. En utilisant le tableau, hein!
- Déclarer une variable « colors » contenant un tableau vide.
Puis un second temps, ajouter "Rouge" et "Bleu" à ce tableau.
Enfin, afficher "Rouge" sur la page web, toujours en utilisant le tableau.





 




    



















[def]: https://openclassrooms.com/fr/courses/245710-ajax-et-lechange-de-donnees-en-javascript/244798-lobjet-xmlhttprequest