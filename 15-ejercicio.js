const $btnCat = document.querySelector('#btnCat');

$btnCat.addEventListener('click', () =>{
    fetch('https://api.thecatapi.com/v1/images/search')
    .then(resp =>resp.json()).then(data => {
        console.log(data);
        const imgCat = document.createElement('img');
        imgCat.src = data[0].url; 
        document.body.append(imgCat); 
        
    })

});
/* otra forma: 
1. agregar div en html <div id='cats'> </div>
const $divCats = document.querySelector('#cats');//asi se llama en html
$divCats.appendChild(imgCat); */

/* con desestructuracion:sacar elementos de un elemento
$btnCat.addEventListener('click', () =>{
    fetch('https://api.thecatapi.com/v1/images/search')
    .then(resp =>resp.json()).then(data => {
        console.log(data);      
        const [cat] = data;
         /* de data solo se obtiene el primer elemento (con todos sus datos), con los corchetes se hace refrencia a un arreglo
        Es equivalente a: const cat = data[0]; */
      /*
        const {url} = cat;
        const imgCat = document.createElement('img');
        imgCat.src = url; /*, en el primero se hizo desestructuracion, si no se quiere hacer asi:
        es igual a : imgCat.src = data[0].url;, es igual a  imgCat.src = cat.url; 
        document.body.append(imgCat);
    })

}); */