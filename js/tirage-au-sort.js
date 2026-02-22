// Tableau qui contient les mangas
let mangas = ["Naruto", "One Piece", "DBZ", "Bleach", "HxH", "JJK", "Spy xFamily", "Sakamoto Days", "JJBA", "HnK", "Boruto"];

// Fonction appelée au clic du bouton
function tirage() {
    //  Générer un index aléatoire entre 0 et la longueur du tableau -1
    let indexAleatoire = Math.floor(Math.random() * mangas.length);

    // Récupérer le mangas tiré
    let mangasTire = mangas[indexAleatoire];

    // Afficher le résultat du tirage au sort
    document.getElementById("aleatoire").textContent = "mangas tiré au sort : " + mangasTire;
}