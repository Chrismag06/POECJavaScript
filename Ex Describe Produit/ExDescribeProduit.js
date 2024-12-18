// Énoncé de l'exercice

// Vous devez créer une fonction describeProduct qui génère une description détaillée d'un produit. Cette fonction :

// Prend plusieurs paramètres :

// Le nom du produit, son prix, une catégorie optionnelle, et une réduction optionnelle.
// Utilise l’affectation destructurée pour attribuer les paramètres à des variables à l'intérieur de la fonction.
// Fournit des valeurs par défaut pour les paramètres optionnels.
// Retourne une chaîne formatée décrivant le produit.


// Spécifications de la fonction

// La fonction describeProduct doit :

// Accepter les paramètres suivants :

// name (string) : le nom du produit (obligatoire).
// price (number) : le prix du produit en euros (obligatoire).
// category (string) : la catégorie du produit (optionnelle, par défaut "General").
// discount (number) : la réduction en pourcentage (optionnelle, par défaut 0).

// À l'intérieur de la fonction :

// Utiliser une affectation destructurée pour une assignation de variable :
// Extraire la catégorie et le montant de la réduction.
// Calculer le prix final avec la réduction (si présente).
// Retourner une chaîne formatée contenant toutes les informations sur le produit.

// La description doit ressembler à ceci :

// Product: {name}
// Category: {category}
// Original Price: {price}€
// Discount: {discount}%
// Final Price: {finalPrice}€ 

function describeProduct(name, price, category = "General", discount = 0){

const Product = { pName: name, pPrice: price, pCategory: category, pDiscount: discount};

console.log("Product: " + Product.pName);

console.log("Category: " + Product.pCategory);

console.log("Original Price: " + Product.pPrice + " €")

let finalPrice =  Product.pPrice - (Product.pPrice * Product.pDiscount /100);

console.log("Discount: " + Product.pDiscount);

console.log("Final Price: " + finalPrice);



}




 
