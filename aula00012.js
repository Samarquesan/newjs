//... SPREAD
//const jogador1 = {nome:"Alan", energia: 100, vidas: 3, mana:150};
//const jogador2 = {nome:"Karen", energia: 100, vidas: 2, vigor: 80};
//const jogador3 = {...jogador1, ...jogador2};
//let a1 = [10, 20, 30];
//let a2 = [11, 22, 33, 44, 55];
//let a3 = [...a1, ...a2]

//console.log("a1: " + a1);
//console.log("a2: " + a2);
//console.log("a3 " + a3);
//console.log("tipo de a3: " + typeof(a3));
//console.log(jogador3)

//const soma = (v1, v2, v3) =>{
//    return v1 + v2 + v3
//};
//
//let valores = [1, 5, 4];
//console.log(soma(...valores));

const objs1 = document.getElementsByTagName("div");
const objs2 = [...document.getElementsByTagName("div")];

objs2.forEach(element =>{
    element.innerHTML= "Curso";
});

console.log(objs1);
console.log(objs2);