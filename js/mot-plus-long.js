let citation = document.getElementById("citation").textContent;

let nonPonct = citation.replace(".", "");

let mots = nonPonct.split(" ");

let motPlusLong = "";

for(let i = 0; i < mots.length; i++){
    if(mots[i].length > motPlusLong.length){
        motPlusLong = mots[i];
    }
}

document.getElementById("motPlusLong").textContent = "Le mot le plus long est : " + motPlusLong;