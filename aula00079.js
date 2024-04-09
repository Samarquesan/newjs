const div_data = document.getElementById("div_data")
const div_relogio = document.getElementById("div_relogio")
const btn_ativar = document.getElementById("btn_ativar")
const btn_parar = document.getElementById("btn_parar")
const tmp_alarme = document.getElementById("tmp_alarme")
const hora_alarme = document.getElementById("hora_alarme")
const timer = document.getElementById("timer")

const data = new Date()

let dia = data.getDate()
dia = dia < 10 ? "0" + dia : dia
let mes = data.getMonth()
mes = mes < 10 ? "0" + mes : mes
const data_r = dia + "/" + mes + "/" + data.getFullYear()
div_data.innerHTML = data_r

const relogio = ()=>{
    const data = new Date()
    let hora = data.getHours()
    hora = hora < 10 ? "0" + hora : hora
    let minutos = data.getMinutes()
    minutos = minutos < 10 ? "0" + minutos : minutos
    let segundos = data.getSeconds()
    segundos = segundos < 10 ? "0" + segundos : segundos
    const hora_completa = hora + ":" +  minutos + ":" +  segundos
    console.log(hora_completa)
    div_relogio.innerHTML = hora_completa
}

const intervalo = setInterval(relogio, 1000)

relogio()
//console.log(Date.now());//timestamp

//console.log(data)

// console.log(`Mês: ${data.getDate()}`)
// console.log(data.getTime())
// console.log(data.getFullYear())
// console.log(data.getHours())
// console.log(data.getMilliseconds())

//getDate() = Dia do mês
//getDay() = Dia da semana (número)
//getFullYear() = Ano com 4 digítos
//getHours() = Horas
//getMillisedconds() = Milisegundos
//getMonths() = Mês
//getSeconds() = Segundos
//getTime() = Timestamp
//Date.now() = Timestamp
//getTimeOffset() = Timezone da localidade
//setDate() = Define um dia do mês para a data
//setFullYear() = Define um ano para a data
//setHours() = Define Horas
//setMinutes() = Define Minutos
//setSeconds() = Define Segundos
//setMilliseconds() = Define milisegundos
//toDateStruing() = Retorna somente data