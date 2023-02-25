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
>Le DOM (Document Object Model) est une API 5Une API (Application Programming Interface) est un ensemble de fonctionnalités et de règles existant dans un logiciel permettant d'intéragir avec celui-ci de manière automatisée (plutôt que de passer par une interface utilisateur). L'API peut être vue comme un contrat simple passé entre le logiciel qui la propose et d'autres entités, telles que des logiciels ou matériels tiers. qui représente et interagit avec tous types de documents HTML ou XML. Le DOM est un modèle de document chargé dans le navigateur. La représentation du document est un arbre nodal. Chaque nœud représente une partie du document (par exemple, un élément, une chaîne de caractères ou un commentaire).

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
nomvar.propriété de la valeur souhaitée

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
- Raccourcire le code en évitant de répéter des lignes de code identiques
- Appeler une fonction suite à une action de l'user

 




    

















