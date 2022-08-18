//funciones

//funciones declarativas
function nombredelafunction(){
    //loque haga la funcion
}

//funcion anonima
const nombredelafunction =() => {};
//no tiene nombre lo que pedimos que es el resultado de esta funcioon se cargue en la const

//crear la funcion
//puede tener parametros no es obligatorio
//el parametro es una variable que recibe en la llamada
//el parametro solo existe dentro de la funcion

function saludo(persona){
    console.log(`hola,${persona.nombre} ${persona.apellido}`);
}
///ahroa llamar la funcion
const persona={
    nombre: "bruna",
    apellido: "de paula",
}
saludo()

///funcion de suma

function suma(a,b){
    return a + b;
}
console.log(suma(5,5));

const suma = (a,b) => a+ b;