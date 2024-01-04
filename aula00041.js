const caixa1 = document.querySelector("#caixa1");
const btn_c = [...document.querySelectorAll(".curso")];
const c1_2 = document.querySelector("#c1_2");
const cursos = ["HTML", "CSS", "JavaScript", "PHP", "React", "MySQL", "ReactNative"];
 
cursos.map((el, chave)=>{
    
    const btn_lixeira = document.createElement("img");
    btn_lixeira.setAttribute("src","icone_lixeira.png")
    btn_lixeira.setAttribute("class","btn_lixeira")
    const btn_lixeira = document.createElement("div");
    newElement.setAttribute("id", "c"+chave);
    newElement.setAttribute("class", "curso c1");
    newElement.innerHTML = el;
    newElement.addEventListener("click",(evt)=>{
        //console.log(evt.target)
        c0.removeChild(evt.target)
    })

    novoElemento.appendChild(btn_lixeira)

    caixa1.appendChild(newElement);
})




