const cursos = ["JavaScript", "HTML", "CSS", "Arduino", "Rasberry", "C++", "Python", "Java", "C#"]

// const getTodosCursos= ()=>{
//     return cursos
// }

function getCurso(i_curso){
    return cursos[i_curso]
}
function getTodosCursos(){
    return cursos
}


export {cursos,getCurso}
export default getTodosCursos