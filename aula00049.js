const p_array = document.querySelector("#array");
const btnVerificar = document.querySelector("#btnVerificar");
const resultado = document.querySelector("#resultado");

const elementos_array = [16, 20, 10, 17, 15, 13, 11, 19];
//const elementos_array = ["HTML", "CSS", "JavaScript"];
p_array.innerHTML = "["+elementos_array+"]"

btnVerificar.addEventListener("click", ()=>{
    const ret = elementos_array.some((e, i)=>{
        if(e>=18){
            resultado.innerHTML = "Array não conforme na posição "+ i +"."
        }
        return e >=18
    })
    if(ret){
        resultado.innerHTML = "Valor conforme expecificação no elemnto da posição " + i + "."
    }
    //console.log(ret)
})