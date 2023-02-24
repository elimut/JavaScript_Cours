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
![DOM](img/javascript-representation-dom.jpg)

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
>>Attention différence JAVA et JS, concepts totalement différents, tâches différentes.

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

    ###Dans body:

    <body>
    <script>
        alert("Ceci est affiché en JavaScript");
        // boite de dialogue
    </script>
    </body>


>>**Quand écrit dans fichier Html,on peut utiliser autant de script que nécessaire dans head,body, ou les deux, mais par souci de clarté et performance, on le place dans un même élément.
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
/* début et */ fin -> multi (on peut rajouter une étoile sur les lignes du milieu).**

##Gestion des données

###Les variables:

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















