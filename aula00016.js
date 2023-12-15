const objs= document.getElementsByTagName("div")

let num = [10, 20, 30, 40, 50];

//for(let i = 0; i < num.length; i++){
    //console.log(i)
    //console.log(num[i])
//}

//para trabalhar usando posição do elemento
for(o in objs){
    //console.log(objs[o].innerHTML)
    console.log(o)
}

//para trabalhar usando o elemento diretamente da array
for(o of objs){
    console.log(o.innerHTML = "Cursos")
}