const f_texto=document.querySelector("#f_texto")
const p_texto=document.querySelector("#p_texto")
const btn_texto=document.querySelector("btn_texto")

btn_texto.addEventListener("click",(evt)=>{

})

let num=10
let curso = "JavaScript"

localStorage.setItem("nome", "Bruno")
localStorage.setItem("canal", "CFB Cursos")
localStorage.setItem("curso", curso)
localStorage.setItem("numero", num)
// alert(localStorage.length)
// alert(localStorage.getItem(localStorage.key(0)))
// alert(window.localStorage.getItem("nome"))
// alert(window.localStorage.getItem("canal"))
// alert(window.localStorage.getItem("curso"))
localStorage.clear()

sessionStorage.setItem("nome", "Bruno")
sessionStorage.setItem("canal", "CFB Cursos")
sessionStorage.setItem("curso", curso)
sessionStorage.setItem("numero", num)