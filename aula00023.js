function soma(...valores){
    let tam = valores.length;
    res = 0;
    /*for(i = 0;i < tam; i++){
        res+= valores[i]
    }*/
    for(let v of valores){
        res+=v
    }
    return res
};



console.log(soma(10, 5,2,8,15))