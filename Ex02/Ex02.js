// Exercice :
// 1. Demandez a l'utilisateur de saisir deux mots.
// 2. Convertissez les deux mots en majuscules.
// 3. Comparez les deux mots (en ignorant les espaces supplementaires) et indiquez s'ils sont
// identiques.
// Indications :
// - Supprimez les espaces supplementaires des deux mots.
// - Convertissez-les ensuite en majuscules avant de faire la comparaison.
// - Affichez un message indiquant s'ils sont identiques ou non

function Exercice02(){

    let Mot1 = prompt("Entrez un mot");
    let Mot2 = prompt("Entrez un autre mot");

    Mot1 = Mot1.toUpperCase().trim();
    Mot2 = Mot2.toUpperCase().trim();

    console.log("Exercice 02")
    console.log(Mot1)
    console.log(Mot2)
    console.log("En majuscule et sans espaces")
    console.log(Mot1)
    console.log(Mot2)

    alert((Mot1 == Mot2)? "Les deux mots sont identiques" : "Les deux mots ne sont pas identiques")

}

// Saisir deux mots
// tailleMot1 = tailleMot1
// tailleMot2 = tailleMot2
// identique <- vrai
// si tailleMot1 <> tailleMot2 des mots identique
// 	pour cpt = 0, cpt ++, cpt < tailleMot1
// 		si Mot1(cpt) <> Mot2(cpt) alors
// 			identique <- faux	
// 			sortir pour
// sinon 
// 	identique <- faux

function Exercice02b(){
    let Mot1 = prompt("Entrez un mot");
    let Mot2 = prompt("Entrez un autre mot");
    let identique = true;
    let MotMajuscule1 = new Array();
    let MotMajuscule2 = new Array();

    console.log("Exercice 02")
    console.log(Mot1)
    console.log(Mot2)

    console.log(Mot1.charCodeAt(2))

    let codeAscii = 0;
    let codeAsciiMajuscule = 0;
    for (cpt = 0; cpt < Mot1.length; cpt++ ){
        codeAscii = Mot1[cpt].charCodeAt(0)
        if (codeAscii >= 97 && codeAscii <= 122){
            codeAsciiMajuscule = codeAscii - 32;
            MotMajuscule1[cpt] = String.fromCharCode(codeAsciiMajuscule)
        }
    }
    for (cpt = 0; cpt < Mot2.length; cpt++ ){
        codeAscii = Mot2[cpt].charCodeAt(0)
        if (codeAscii >= 97 && codeAscii <= 122){
            codeAsciiMajuscule = codeAscii - 32;
            MotMajuscule2[cpt] = String.fromCharCode(codeAsciiMajuscule)
        }
    }
    console.log("En majuscule et sans espaces")
    console.log(MotMajuscule1)
    console.log(MotMajuscule1)

    if (MotMajuscule1.length == MotMajuscule2.length){
        for (cpt = 0; cpt < MotMajuscule1.length; cpt++){
            console.log("1 " + MotMajuscule1[cpt])
            console.log("2 " + MotMajuscule2[cpt])
             if (MotMajuscule1[cpt] != MotMajuscule2[cpt] ){
                identique = false;
                break;
            }
        }
    }else{
        identique = false;
    }

    alert((identique)? "Les deux mots sont identiques" : "Les deux mots ne sont pas identiques")
}