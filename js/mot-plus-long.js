//Récupérer la citation qu'on stocke dans la variable "citation"
let citation = document.getElementById("citation").textContent;

//Effacer le point pour nettoyer le texte
let nonPonct = citation.replace(".", "");
//Découper la citation en un tableau où une lettre remplit une case du tableau
let mots = nonPonct.split(" ");

//Déclarer une varible qui stockera le mot le plus long
let motPlusLong = "";

//Boucle for utilisé pour comparer la taille de chaque mot afin d'ajouter le mot le plus long dans la variable déclaré ci-dessus
for(let i = 0; i < mots.length; i++){
    if(mots[i].length > motPlusLong.length){
        motPlusLong = mots[i];
    }
}

//Afficher le mot le plus long
document.getElementById("motPlusLong").textContent = "Le mot le plus long est : " + motPlusLong;