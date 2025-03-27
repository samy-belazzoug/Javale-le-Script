//6. Inverser une chaîne de caractères.
let chaine = "bonjour personne.";
let copy = "";
for (let i = 1; i < chaine.length; i++) 
    {copy += chaine.at(-i);}
copy += chaine.at(0);
chaine = copy
console.log(chaine);