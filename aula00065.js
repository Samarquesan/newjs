const pessoa = {
    nome: "Samuel",
    canal: "CFB Cursos",
    curso: "JavaScript",
    aulas: {
        aula01: "Introção",
        aula02: "Variáveis",
        aula03: "Condicional"
    }
}

const string_pessoa = '{"nome":"Samuel","canal":"CFB Cursos","curso":"JavaScript","aulas":{"aula01":"Introção","aula02":"Variáveis","aula03":"Condicional"}}'

const s_json_pessoa = JSON.stringify(pessoa)//Converte objeto em string JSON
const o_json_pessoa = JSON.parse(s_json_pessoa) //Converte JSON em objeto

console.log(pessoa)
console.log(s_json_pessoa)
console.log(o_json_pessoa)
let happiness = 'Achieved the code Glow';
consolelog(`Living the dream: ${happiness}`);