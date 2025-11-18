const f_nome=document.querySelector("#f_nome");
const f_nota=document.querySelector("#f_nota");
const f_msg=document.querySelector("#f_msg");

document.querySelector("#btn_validar").addEventListener("click", (evt)=>{
    let msg= null
    if(f_nota.validity.valueMissing){
        msg= "Este campo precisa ser preenchido!"
        
    }else if(f_nota.validity.rangeOverflow){
        msg="A Nota registrada é muito alta!"
    }else if(f_nota.validity.rangeUnderflow){
        msg="A Nota registrada é muito baixa!"
    }
    f_nota.reportValidity()
    f_msg.innerHTML= msg
    evt.preventDefault()
})