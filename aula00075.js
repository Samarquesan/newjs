const numero = document.getElementById("numero");

let promise = new Promise((accepted, rejected)=>{
    let resultado = true;
    let tempo = 3000;
    setTimeout(()=>{
        if(resultado){
            accepted("Deu tudo certo!");
        }else{
            rejected("Deu tudo errado!");
        };
    }, tempo);
});

promise.then((retorno)=>{
    numero.innerHTML = retorno;
    numero.classList.remove("erro");
    numero.classList.add("ok");
});

promise.catch((retorno)=>{
    numero.innerHTML = retorno;
    numero.classList.add("erro");
    numero.classList.remove("ok");
});

numero.innerHTML = "Processando...";