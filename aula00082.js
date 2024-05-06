const palco = document.getElementById("palco");
const num_objetos = document.getElementById("num_objetos");
const txt_qtde = document.getElementById("txt_qtde");
const btn_add = document.getElementById("btn_add");
const btn_remover = document.getElementById("btn_remover");

let larguraPalco = palco.offsetWidth;
let alturaPalco = palco.offsetHeight ;
let bolas = [];
let numBola = 0;

class Bola {
    constructor(arrayBolas, palco){
        this.tamanho = Math.floor(Math.random()*16)+10;
        this.red4rgb = Math.floor(Math.random()*255);
        this.green4rgb = Math.floor(Math.random()*255);
        this.blue4rgb = Math.floor(Math.random()*255);
        this.positionX = Math.floor(Math.random()*(larguraPalco - this.tamanho));
        this.positionY = Math.floor(Math.random()*(alturaPalco - this.tamanho));
        this.velX = Math.floor(Math.random()*2)+0.5;
        this.velY = Math.floor(Math.random()*2)+0.5;
        this.direcaoX = (Math.random()*10) > 5 ? 1 : -1;
        this.direcaoY = (Math.random()*10) > 5 ? 1 : -1;
        this.palco = palco;
        this.arrayBolas = arrayBolas;
        this.id = Date.now()+"_"+ Math.floor(Math.random()*100000000000);
        this.desenhar();
        this.controle = setInterval(this.controlar, 10);
        this.eu = document.getElementById(this.id);
        numBola++;
        num_objetos.innerHTML = numBola
    }
    posicaoArray=()=>{
        return this.arrayBolas.indexOf(this);
    }
    remover=()=>{
        clearInterval(this.controle);
        bolas = bolas.filter((b)=>{
            if(b.id != this.id){
                return b;
            };
        });
        this.eu.remove();
        num_objetos.innerHTML = numBola;
    };
    desenhar=()=>{
        const div = document.createElement("div");
        div.setAttribute("id", this.id);
        div.setAttribute("class", "bola");
        div,setAttribute("style", `left:${this.positionX}; top:${this.positionY}; width:${this.tamanho}; height:${this.tamanho}; background-color:rgb(${this.red4rgb}, ${this.green4rgb}, ${this.blue4rgb})`);
        this.palco.appendChild(div);
    }
    controlar=()=>{

    }
}

window.addEventListener("resize", (evt)=>{
    larguraPalco = palco.offsetWidth;
    alturaPalco = palco.offsetHeight;
    
});

btn_add.addEventListener("click", (evt)=>{
    const qtde = qtde.value;
    for(let i = 0; i < qtde; i++){
        //Inastanciar novas bolinhas
    }
});

btn_remover.addEventListener("click", (evt)=>{
    bolas.map((elemento)=>{
        //Remover bolinha
    })
});