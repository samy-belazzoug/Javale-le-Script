//10. Compter le nombre de voyelles dans une chaîne.
let chaine = "salut toi sa va bien ?",compteur = 0;
for (let i of chaine) {if ("aeiouy".includes(i)) {compteur += 1}}
console.log(compteur)