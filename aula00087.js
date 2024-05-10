const url = document.getElementById("url");
let btn_url = document.getElementById("btn_url");

btn_url.addEventListener("click", (evt)=>{
    //window.location = "https://www.google.com.br";
    //window.location.replace("https://www.google.com.br"); //Deleta a URL corrente do histórico
    //window.location.assign("https://www.google.com.br"); //Não deleta a URL corrente do histórico
    //window.location.reload();
    //window.history.back()
    //window.history.forward()
    //window.history.go(1);
    console.log(url.value)
    window.location = url.value;
});