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
            imagen.className = "h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6";
            // URL de la imagen
            imagen.src = `${baseurl}${item.image}`

            // crear titulo
            const titulo = document.createElement('h2');
            titulo.className = "text-lg";
            titulo.textContent = item.name

            // crear precio
            const precio = document.createElement('div');            titulo.className = "text-lg";
            precio.className = "text-gray-600";
            precio.textContent = item.price;
            
            // wrap precio y titulo
            const precioYTitulo = document.createElement('div');
            precioYTitulo.className = "text-center md:text-left";
            precioYTitulo.append(titulo, precio);

            // wrap imagen y precioYTitulo
            const card = document.createElement('div');
            card.className = "md:flex bg-white rounded-lg p-6 hover:bg-gray-300";
            card.append(imagen, precioYTitulo);

            todosLosItems.push(card);
        });
        appNode.append(...todosLosItems);
    });