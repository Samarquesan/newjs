const nome = Symbol("Nome")
const numero = Symbol("Número")
const corUniforme = Symbol("Cor do uniforme")

// const Jogador = {
//     [nome]: "Ronaldinho",
//     [numero]: 11,
//     [corUniforme]: "Amarelo e Verde"
// }

const Jogador={
    nome: "Ronaldo"
}

Jogador[numero]= 10,
Jogador[corUniforme]="Verde e Amarelo"

for(p in Jogador){
    console.log(p)
}
console.log(Jogador)
console.log(Jogador.nome)
console.log(Jogador[numero])
console.log(Jogador[corUniforme])
// console.log(numero.description)
// console.log(corUniforme.description)

