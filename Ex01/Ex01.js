// Exercice  1 :
// Vous organisez un concours de dev où chaque participant a trois épreuves. Selon la moyenne des
// scores, attribuez les niveaux suivants :
// Moins de 50 : "Débutant"
// Entre 50 et 70 : "Intermédiaire"
// Plus de 70 : "Expert"

// Saisir trois épreuves:
// pour 1 a trois
// faire la somme 
// diviser la somme par trois
// si Score < 50   alors
//     Niveau = "Débutant"
// sinon si <= 70 alors
//         Niveau = "Intermédiaire"
//     sinon 
//         Niveau = "Expert"

function Exercice01()  {

    let Score = 0
    let Niveau

    for (i = 1; i <= 3; i++){
        Score += Number(prompt("Entrez un score:",Score));
    }

    MoyeneScore = Score / 3

    console.log("Exercice 01")
    console.log("Moyene " + MoyeneScore)
    if (MoyeneScore < 50) {
        Niveau = "Débutant"
    } else if (MoyeneScore <= 70) {
        Niveau = "Intermédiaire"
    }else{
        Niveau = "Expert"
    }
    console.log(Niveau)

    if(Score != null)  {
        alert("Votre moyene est " + MoyeneScore + " votre niveau est:  " + Niveau);
    }
}

 
