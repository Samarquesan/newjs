class Jogador{
    constructor(nome){
        this.nome = nome
        this.id = Symbol();
    };
};

let selecao2002 = [new Jogador("Romario"),new Jogador("Ronaldo"), new Jogador("Ronaldinho Gaucho"), new Jogador("Roberto Carlos"),new Jogador("Cacá"), new Jogador("Cafu"), new Jogador("Marcos"), new Jogador("Edimilson"), new Jogador("Romario"), new Jogador("Vampeta"), new Jogador("Kleberson"), new Jogador("Gilberto Silva")];

//let s1 = selecao2002[2].id

let s = []
let s_jogadores = selecao2002.filter((j)=>{
       return j.nome == "Romario"
    })
    
    s= s_jogadores.map((j)=>{
        return j.id
    })

// selecao2002 = selecao2002.filter((j)=>{
//     return j.nome != "Ronaldo"
// })

console.log(selecao2002)
console.log(s_jogadores)
console.log(s)
