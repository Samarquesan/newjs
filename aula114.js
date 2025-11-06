// let numeros =()=>{
    // return [10, 20, 30, 40]
// }

let numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90]

let [a, b, c, ... d]=numeros
let obj ={nome: "Bruno", canal: "CFBCursos", curso: "JavaScript"}

let {nome, canal, curso} = obj

// let a = 10;
// let b = 20;

// [a, b]=[b, a]

//let numeros = [10, 20, 30, 40]
// let [a, b, c, d]= numeros
//({a, b, c, d} = {a:"Verde", b:"Amarelo", c:"Azul", d:"Branco"})

// console.log(a)
// console.log(b)


//  console.log(a)
//  console.log(b)
//  console.log(c)
//  console.log(d)

// console.log(nome)
// console.log(canal)
// console.log(curso)

const cores=()=>{
    return ["verde", "amarelo", "azul", "branco"]
}

let [c1, c2, ,c3] = cores() // Ao separar a array por virgula adicionamos um novo edreço de memória por isso azul aguarda um elemento declarado para ser associado

// console.log(c1)
// console.log(c2)
// console.log(c3)

let texto = "Curso de JavaScript"
// console.log(texto.split(""))
//let [...t]=texto.split(" ")
let [p1, p2, p3]=texto.split(" ")
console.log(p1)
console.log(p2)
console.log(p3)