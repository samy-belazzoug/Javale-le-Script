//5. Calculer la factorielle d'un nombre donné.
let x = 15;
iteration = 1;
copy = iteration;
iteplus = copy + 1;
while (iteration < x) 
    {calcul = copy * iteplus;
    copy = calcul;
    iteration ++;iteplus ++;}
console.log(calcul);