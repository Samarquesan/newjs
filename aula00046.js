const caixaCursos = document.querySelector("#caixaCursos")
const btn_c = [...document.querySelectorAll(".curso")]
const c1_2 = document.querySelector("#c1_2")
const cursos = ["HTML", "CSS", "JavaScript", "PHP", "React", "MySQL", "ReactNative"]
const btnCursoSelecionado = document.getElementById("btnCursoSelecionado")
const btnRemoverCurso = document.getElementById("btnRemoverCurso")
const btnAdicionarNovoCursoAntes = document.getElementById("btnAdicionarNovoCursoAntes")
const btnAdicionarNovoCursoDepois = document.getElementById("btnAdicionarNovoCursoDepois")
const nomeCurso = document.getElementById("nomeCurso")
let indice = 0;

const tirarSelecao=()=>{
    const cursoSelecionados=[...document.querySelectorAll(".selecionado")]
    cursoSelecionados.map((el)=>{
        el.classList.remove("selecionado")
    })
}

const criarNovoCurso=(curso)=>{
    const novoElemento = document.createElement("div")
    novoElemento.setAttribute("id", "c"+indice)
    novoElemento.setAttribute("class", "curso c1")
    novoElemento.innerHTML = curso
    novoElemento.addEventListener("click", (evt)=>{
        tirarSelecao()
        evt.target.classList.toggle("selecionado")
    })
    const comandos= document.createElement("div")
    comandos.setAttribute("class", "comandos")

    const rb = document.createElement("input")
    rb.setAttribute("type", "radio")
    rb.setAttribute("name", "rb_curso")

    comandos.appendChild(rb);

    novoElemento.appendChild(comandos);
    return novoElemento
}

cursos.map((el, chave)=>{
    const novoElemento = criarNovoCurso(el)
    caixaCursos.appendChild(novoElemento);
    indice++
})

const cursoSelecionado= ()=>{
    const cursoSelecionados=[...document.querySelectorAll(".selecionado")]
    return cursoSelecionados[0]
}

btnCursoSelecionado.addEventListener("click",(evt)=>{
    try{
    
        alert("Curso selecionado: "+ cursoSelecionado().innerHTML)
    }catch(ex){
        alert("Selecione um curso")
    }
    
})

btnRemoverCurso.addEventListener("click",(evt)=>{
    const cs = cursoSelecionado()
    if(cs!= undefined) {
        cs.remove() 
    }else{
        alert("Selecione um curso")
    }
})
    
btnAdicionarNovoCursoAntes.addEventListener("click",(evt)=>{
    
    try{
        if(nomeCurso.value != ""){
            const novoCurso = criarNovoCurso(nomeCurso.value)
            caixaCursos.insertBefore(novoCurso,cursoSelecionado())
        }else{
            alert("Digite o nome do curso!")
        }
    }catch(ex){
        alert("Selecione um curso")
    }
})

btnAdicionarNovoCursoDepois.addEventListener("click",(evt)=>{
    
    try{
        if(nomeCurso.value !=""){
            const novoCurso = criarNovoCurso(nomeCurso.value)
            caixaCursos.insertBefore(novoCurso,cursoSelecionado().nextSibling)
        }else{
            alert("Digite o nome do curso!")
        }   
    }catch(ex){
        alert("Selecione um curso")
    }
})

 // console.log(todosRadios)
    // console.log(radioSelecionado)
     //console.log(cursoSelecionado)

//parent node
//childNodes[nodenumbers]
//firstChild
//lastChild
//nextSibling
//previousSibling
