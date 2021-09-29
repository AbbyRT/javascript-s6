/* Try nos permite ejecutar código propenso a fallar e una manera segura 
se usa esta estructura para codigo que sabemos que peude fallar, por ejemplo al usar una api, el servicio puede fallar o no responder
el codigo puede continuar ejecutandose a pesar de tener errores*/

const gravedad = 9.8;
console.log(gravedad);

try{
    gravedad = 10.1;/* si todo sale bien no ejecuta el catch */

} catch(e){ //la e hace referencia al error
    console.log(e);/* si algo sale mal en try se ejecuta el catch  */

} finally{
    /* siempre se ejecuta , independientemente si hay error o no*/
    console.log('soy el finally');

}

console.log(gravedad);
/* siempre que se usa un servicio externo es recomendable meterlo en un try catch */