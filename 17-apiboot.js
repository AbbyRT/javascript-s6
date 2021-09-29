const contenido = document.querySelector('#acomodo');
/* document.contenido.appendChild */
fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
.then(data1 =>data1.json()).then(data2 =>{
    console.log(data2.length);
    for (let i = 0; i < data2.length; i++) {
        let carta = document.createElement('div'); //cuerpo de carta
        carta.className = "col col-lg-3 col-md-3 col-sm-6 col-xs-12";
        let temporal = document.createElement('div'); //donde ira imagen
        temporal.className = "card";
        let foto = document.createElement('img');//imagen
        foto.src = data2[i].url;
        let titulo = document.createElement('div'); //titulo
        titulo.className='card-body';
        titulo.textContent=data2[i].title;
        temporal.appendChild(foto);
        temporal.appendChild(titulo);
        carta.appendChild(temporal);
        contenido.appendChild(carta);

    }
})

