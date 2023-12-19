//Arrow functions - funções lambdas

const soma = (v1, v2) => v1 +v2;
console.log(soma(10,5));

const nome = n => n; // caso somente use um único parametro não há necessidade do uso de parenteses
console.log(nome("José"));

const add = n=> n + 10;
console.log(add(10));

//para funções de somente uma linha não há a necessidade de return ou chaves


const soma2 = (v1, v2) =>{
    let res = v1 + v2;
    return res;
};
console.log(soma2(20, 30))