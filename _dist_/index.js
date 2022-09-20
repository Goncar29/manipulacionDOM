/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

console.log('Happy hacking :)')

const baseurl = 'https://platzi-avo.vercel.app'

const appNode = document.querySelector('#app')

// web api
// conectarnos el server
window
    .fetch(`${baseurl}/api/avo`)
// procesar la respuesta y convertirla a JSON
    .then((respuesta) => respuesta.json())
// JSON --> DATA --> renderizar info al browser
    .then((responseJson) => {
        const todosLosItems = [];
        responseJson.data.forEach((item) => {
            console.log(item.name);

            // crear imagen
            const imagen = document.createElement('img');
            // URL de la imagen
            imagen.src = `${baseurl}${item.image}`

            // crear titulo
            const titulo = document.createElement('h2');
            titulo.textContent = item.name

            // crear precio
            const precio = document.createElement('div');
            precio.textContent = item.price;
            // creamos su contenedor
            const container = document.createElement('div');
            container.append(imagen, titulo, precio);

            todosLosItems.push(container);
        });
        appNode.append(...todosLosItems);
    });