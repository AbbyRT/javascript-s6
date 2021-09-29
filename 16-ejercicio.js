const $btnDogo = document.querySelector('#btnDogo');

$btnDogo.addEventListener('click', () => {
    fetch('https://dog.ceo/api/breeds/image/random/6')
        .then(res1 => res1.json()).then(res2 => {
            console.log(res2);
            /*const dogoVec = document.createElement('img');
            dogoVec.src = res2.message[0];
            document.body.append(dogoVec);*/  /*esto es para ver una sola foto, en el url al final hay que poner eñ num de fotos que queremos, max 50 segun la documentacion
            Hay que revisar la documentacion para ver que datos esta enviando la api, como se llaman, y en donde se ubica la url de las imagenes....*/
            //para más imagenes:
            let dogoVec = [];
            console.log(res2.message.length); //para saber cuantas fotos son
            for (let i = 0; i < res2.message.length; i++) {
                dogoVec[i] = document.createElement('img');
                dogoVec[i].src = res2.message[i];
                dogoVec[i].style.height = "500px";
                document.body.append(dogoVec[i]);
            }
        });
});