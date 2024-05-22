const nome = new String("Samuel Marques dos Santos");
let nome2 = new String("Bruno Marques")
let canal = new String("CFBCursos");

console.log(nome);
console.log(typeof(nome));

console.log(nome.charAt(4))
console.log(nome.charCodeAt(1))

console.log(nome.concat(canal))
console.log(nome)
console.log(nome.indexOf("u"))
console.log(nome.lastIndexOf("u"))
console.log(nome.localeCompare(nome2))
console.log(nome.replace("Santos", "Silva"))
console.log(nome.search("dos"))

let lastName = nome.slice(19,25)
console.log(lastName)

let arrNome = nome.split(" ")
console.log(arrNome)