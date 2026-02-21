//Fonction palindrome qui est utilisé dans le bouton "palindrome" 
function palindrome(){
    //Déclarer la variable motSaisi qui permet de récupérer le mot saisi par l'utilisateur
    let motSaisi = document.getElementById("id-mot-saisi").value;

    //Nettoyer le mot saisi par l'utilisateur en enlevant les espaces et en mettant le mot en miniscule
    motNettoye = motSaisi.replace(" ", "").toLowerCase();

    /*Utilisation de la méthode split pour mettre chaque lettre du mot dans un tableau
    Inversion des éléments du tableau grâce à la méthode reverse
    Regroupement des lettres pour former le mot inverse grâce à la méthode join*/ 
    reverseMot = motNettoye.split("").reverse().join("");

    /*Condition qui permet de comparer si le mot inversé est le mot que le mot saisi par l'utilisateur
    et qui permet de vérifier que le champs est bien remplit par l'utilisateur */
    if(reverseMot === motNettoye && motNettoye != ""){
        document.getElementById('resultat').textContent = "Le mot est un palindrome !"
    }else if(motNettoye === ""){
        document.getElementById('resultat').textContent = "Veuillez saisir un mot !"
    }else {
        document.getElementById('resultat').textContent = "Le mot n'est pas un palindrome !"
    }
}