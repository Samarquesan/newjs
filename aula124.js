const p_temp= documment.getElementById("p_temp")
const p_nivel= getElementById("p_nivel")
const p_press= getElementById("p_press")
const btn_texto= getElementById("btn_texto")

const obterDados=()=>{
    const endpoint= "http//:cfbcursos.rpl.co/"
    fetch(endpoint)
    .then(res=>res.json())
    .then(dados=>{
        console.log(dados)
        p_temp.innerHTML="Temperatura: " + dados.temperatura
        p_nivel.innerHTML="Nível: " + dados.p_nivel
        p_press.innerHTML="Pressão: " + dados.pressão
    })
}

//let intervalo= setInterval(obterDados,3000)

let dados={
    nome: "Bruno",
    canal: "CFBCursos",
    curso: "JavaScript"
}

let cabecalho={
    method: "POST",
    body:JSON.stringify(dados)
}

const gravarDados=()=>{
    const endpoint="http//:cfbcursos.rpl.co/"
    fetch(endpoint,cabecalho)
    .then(res=>res.json())
    .then(ret=>{
        console.log(ret)
    })
}

btn_texto.addEventListener("click", (evt)=>{
    gravarDados()
})