class Carro{
    tabelaGeral = "Carros"
    constructor(pnome, ptipo){
        this.nome = pnome;
        this.tabelaGeral = "Lista de características"
        if(ptipo == 1){
            this.tipo = "Esportivo";
            this.velmax = 350;
        }else if(ptipo == 2){
            this.tipo = "Utilitário";
            this.velmax = 171;
        }else if(ptipo == 3){
            this.tipo = "Passeio";
            this.velmax = 225;
        }else{
        this.tipo = "Militar";
        this.velmax = 156;
        };
    };
    info(){
        console.log(`Tabela: ${this.tabelaGeral}`)
        console.log(`Nome: ${this.nome}`);
        console.log(`Tipo: ${this.tipo}`);
        console.log(`V.Max: ${this.velmax}`);
        console.log("---------------------")
    }
    getNome(){
        return this.nome;
    };
    getTipo(){
        return this.tipo
    }
    getVelMax(){
        return this.velmax
    }
    getInfo(){
        return [this.nome, this.tipo, this.velmax]
    }
    setNome(nome){
        this.nome = nome
    }
    setTipo(tipo){
        this.tipo = tipo
    }
    setVelMax(velmax){
        this.velmax = velmax
    }
};

let c1 = new Carro("Ferrari Enzo", 1);
let c2 = new Carro("Fiat Dublo", 2);
let c3 = new Carro("Geep Gladiator Sport 6x6", 4);
let c4 = new Carro("Land Rover Discovery", 3);

c1.setNome("Porsche Taycan");
c1.setTipo("Esportivo de Luxo");
c1.setVelMax(260)

c1.info();
// c2.info();
// c3.info();
//console.log(c1.getInfo()[0]);
