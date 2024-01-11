const caixa = document.querySelector("#caixa")

let mapa = new Map()

mapa.set("Curso", "JavaScript")
mapa.set(10, "CFB Cursos")
mapa.set(1, 100)
mapa.set("Canal", 100)// valores podem se repetir, contudo as chaves não podem possuir valores de mesma importância

mapa.delete(1)

console.log(mapa)

let pes = 10
if(mapa.has(pes)){
    res = caixa.innerHTML = "A chave existe na coleção com o valor: " + mapa.get(pes)
    
}else{
    res = caixa.innerHTML = "A chave não existe na coleção"
}
res+="<br/> O tamanho da coleção é " + mapa.size + "."
caixa.innerHTML = res

mapa.forEach((el)=>{
    console.log(el)
})
