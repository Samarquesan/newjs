const valoPadrao = 0;

let valor = 0;
console.log(valor);

function add(v){
    return valor+=v
};

add(10);
console.log(valor);
add(5);
console.log(valor);

function somaConcatena(n1=valoPadrao, n2=valoPadrao, n3=valoPadrao){
    res = n1 + n2 + n3;
    return res
};
 let frase = somaConcatena("J´adore ", "la ", "programation! ");
 //console.log(res);

 let conta = somaConcatena(25, 25,7);
 //console.log(res);
