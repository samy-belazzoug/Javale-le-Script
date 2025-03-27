//9. Vérifier si un mot est un palindrome.
let chaine = "kayak",copy = "";
//inversion chaine
for (let i = 1; i < chaine.length; i++) {copy += chaine.at(-i);} 
copy += chaine.at(0);

//verification si palindrome
if (chaine == copy) {console.log("Palindrome.");}
else {console.log("Non.");}