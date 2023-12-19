const soma= (...valores) =>{
    const somar = val =>{
        let res = 0;
        for(v of val)
            res += v
            return res;
    };
    return somar(valores);
};

let valor = [10, 5, 15];
console.log(soma(...valor));
console.log(soma(10,5,15));