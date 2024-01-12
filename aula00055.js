const caixa = document.querySelector("#caixa")

let musicas = new Set(["Beat it", "Crazy Train", "Old Town Road"])

musicas.add("True Colors")
musicas.add("Beat it")
musicas.add("Beat it")
musicas.add("November Rain")
console.log(musicas)

musicas.delete("November Rain")

musicas.forEach((el)=>{
    caixa.innerHTML += el +"<br/>" 
})
musicas.clear()

for(let m of musicas){
    caixa.innerHTML += m +"<br/>"
}