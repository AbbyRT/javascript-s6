/* fetch nos permite hacer peticiones HTTP desde javascript , es para el intercambio de datos*/
const peticion = fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(resp => resp.json()).then ( data => {
    console.log(data);
}).catch(e=>{
    console.log(e);
});/* peticion por el metdo GET, eso es por defecto, solo colocar la url */
/* promesas: hago una peticion y espero una respuesta */
/* funcion flecha: en caso de requerir mas de un parametro se ponen parentisis y se separan por comas
el then espera y cuando procesa la info se ejecuta */
/* la respuesta viene en un formato de datos especiales, en este caso especificamos que lo queremos JSON javascript Object Notation
nos devuelve otra promesa */
console.log(peticion);
/* lo que se solicita es asincrono, son datos que se solicitan de manera externa */
/* catch por si un error sucede  */