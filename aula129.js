const timer=document.querySelector("#timer");

const tmpIni= Date.now();

const contador=()=>{
    const tmpAtual= Date.now()
    let cont = tmpAtual-tmpIni
    let seg= Math.floor((tmpAtual-tmpIni)/1000)
    console.log(seg)
}

setInterval(contador,1000)

contador()