function construirePyramide() {

    // Récupérer le nombre de lignes
    let n = Number(document.getElementById("ligne-pyramide").value);

    if (!n || n <= 0) {
        alert("Veuillez entrer un nombre valide supérieur à 0 !");
        return;
    }

    // Variable qui contiendra la pyramide
    let pyramide = ""; 

    /* Chaîne de base avec des espaces et des étoiles
    On crée une ligne maximale d'espaces + étoiles*/
    let ligneMax = " ".repeat(n - 1) + "*".repeat(2 * n - 1);

    //Boucle for qui permet de créer la pyramide
    for (let i = 1; i <= n; i++) {
        // Calcule le nombre de caractères à afficher avec slice
        let debut = n - i;
        let fin = n + i - 1;
        let ligne = ligneMax.slice(debut, fin);
        pyramide += ligne + "<br>"; 
    }

    // Afficher la pyramide
    document.getElementById("pyramide").innerHTML = pyramide;
}