// Exercice 3:
// Vous êtes développeur et vous devez créer un système de vérification des mots de passe. Le mot
// de passe doit contenir au moins 8 caractères, une majuscule, une minuscule, et un chiffre. Écrivez
// un programme qui vérifie si un mot de passe donné respecte ces conditions

// Saisir une chaine de caractères
// tester si la longueur ce la chaine est superieure à 8
// chercher une majuscule dans la chaine
// chercher une minuscule dans la chaine
// chercher un chiffre dans la chaine

function Exercice03(){

    let MotdePasse = prompt("Entrez un mot de passe ");
    let Trouve = false

    if (MotdePasse.length < 8) {
        alert("La longueur du mot de passe doit être supérieure à 8")
    }else{
        console.log("Longueur OK")
        for(cpt = 0; cpt < MotdePasse.length; cpt++){
            codeAscii = MotdePasse[cpt].charCodeAt(0)
            if (codeAscii >= 65 && codeAscii <= 90){
                Trouve = true;
                break;
            }
        }
        if (!Trouve){
            alert("Pas de majuscule dans la chaine")
        }else{
            console.log("Majuscule OK")
            Trouve = false
            for(cpt = 0; cpt < MotdePasse.length; cpt++){
                codeAscii = MotdePasse[cpt].charCodeAt(0)
                if (codeAscii >= 97 && codeAscii <= 122){
                    Trouve = true;
                    break;
                }
            }
            if (!Trouve){
                alert("Pas de minuscule dans la chaine")
            }else{
                console.log("Minuscule OK")
                Trouve = false
                for(cpt = 0; cpt < MotdePasse.length; cpt++){
                    codeAscii = MotdePasse[cpt].charCodeAt(0);
                    console.log("code ASCII" + codeAscii + " Trouve " + Trouve);
                    if (codeAscii >= 48 && codeAscii <= 57){
                        Trouve = true;
                        console.log("Caractère " + MotdePasse[cpt] + " Cpt " + cpt + " code Ascii " + codeAscii);
                        break;
                    }
                    console.log("Trouve " + Trouve)
                }
                console.log("Trouve " + Trouve)
                if (!Trouve){
                    alert("Pas de chiffre dans la chaine")
                }else{
                    alert("Mot de passe correct")
                }
            }
        }
    }

 }

 function ChercheDansTableAscii(MotdePasse,AsciiMin,AsciiMax){
    let codeAscii;
    for(cpt = 0; cpt < MotdePasse.length; cpt++){
        codeAscii = MotdePasse[cpt].charCodeAt(0)
        if (codeAscii >= AsciiMin && codeAscii <= AsciiMax){
            return true;
        }
    }
    return false
 }

function Exercice03b(){

    let MotdePasse = prompt("Entrez un mot de passe ");
    let Trouve = false

    if (MotdePasse.length < 8) {
        alert("La longueur du mot de passe doit être supérieure à 8")
    }else{
        console.log("Longueur OK")
        if (!ChercheDansTableAscii(MotdePasse,65,90)){
            alert("Pas de majuscule dans la chaine")
        }else{
            console.log("Majuscule OK")
            Trouve = false
            if (!ChercheDansTableAscii(MotdePasse,97,122)){
                alert("Pas de minuscule dans la chaine")
            }else{
                console.log("Minuscule OK")
                if (!ChercheDansTableAscii(MotdePasse,48,57)){
                    alert("Pas de chiffre dans la chaine")
                }else{
                    alert("Mot de passe correct")
                }
            }
        }
    }

}

function Exercice03c(){

    let MotdePasse = prompt("Entrez un mot de passe ");
    let Trouve = false
    let MessageErreur = ""

    if (MotdePasse.length < 8) {
        MessageErreur += "La longueur du mot de passe doit être supérieure à 8 \n"
    }

    console.log("Longueur OK")
    if (!ChercheDansTableAscii(MotdePasse,65,90)){
        MessageErreur += "Pas de majuscule dans la chaine \n"
    }
           
    console.log("Majuscule OK")
    if (!ChercheDansTableAscii(MotdePasse,97,122)){
        MessageErreur += "Pas de minuscule dans la chaine \n"
    }

    console.log("Minuscule OK")
    if (!ChercheDansTableAscii(MotdePasse,48,57)){
        MessageErreur +=  "Pas de chiffre dans la chaine \n"
    }

    if (MessageErreur == ""){
        alert("Mot de passe correct")
    }else{
        alert(MessageErreur)
    }

}

