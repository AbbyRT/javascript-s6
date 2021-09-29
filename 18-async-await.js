/* para no trabajar directamente con promesas: */
const $btnCat = document.querySelector('#btnCat');
const $contenedor=document.querySelector('.gatitos');
/* a la funcion hay que agregarle la palabra async */
$btnCat.addEventListener('click', async() => {
    const resp = await fetch('https://api.thecatapi.com/v1/images/search');/* indica que espere la respuesta del fetch para continuar ejecutando el codigo*/
    const data = await resp.json(); /* los await sustitutyen a los then */
    const imgCat = document.createElement('img');
    imgCat.src = data[0].url;
    imgCat.width = '500';
    $contenedor.appendChild(imgCat);
    /* document.body.append(imgCat); */


});