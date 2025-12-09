const p_temp=document.getElementById("p_temp")
const p_nivel=document.getElementById("p_nivel")
const p_press=document.getElementById("p_press")

const obterDados=()=>{
    const endpoint="https://a5f69577-04d9-45d8-9081-67bc5abae642-00-1gnb7wtm4c7fr.janeway.replit.dev/"
    fetch(endpoint)
    .then(res=>res.json())
    .then(data=>{
        p_temp.innerHTML= "Temperatura:" + dados.temperatura
        p_nivel.innerHTML= "Nível:" + dados.nivel
        p_press.innerHTML= "Pressão:" + dados.pressao
    })
}

let interval=setInterval(obterDados,3000)
