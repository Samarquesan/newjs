const caixa = document.querySelector("#caixa")
let cores = ["Azul","Verde","Vermelho", ["Branco", "Preto", "Cinza"]]
let cursos = ["HTML","CSS","JavaScript",cores]



//cursos[0]= 2023 //aqui adiciona na posição indicada
// cursos.push("Python")// adiciona no final
// cursos.pop()//remove ultimo
// cursos.unshift("C#")//adiciona no inicio
// cursos.shift("C#")//tira do inicio

console.log(cursos[3][3][1])

cursos.map((el)=>{
    let p = document.createElement("p")
    p.innerHTML = el
    caixa.appendChild(p)
})

