const endpoint="https://a5f69577-04d9-45d8-9081-67bc5abae642-00-1gnb7wtm4c7fr.janeway.replit.dev/"
fetch(endpoint)
.then(res=>res.json())
.then(data=>{
    console.log(data)
})