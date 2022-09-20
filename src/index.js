/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

console.log('Happy hacking :)')

const url = 'https://platzi-avo.vercel.app/api/avo'

// web api
// conectarnos el server
window
    .fetch(url)
// procesar la respuesta y convertirla a JSON
    .then((respuesta) => respuesta.json())
// JSON --> DATA --> renderizar info al browser
    .then((responseJson) => {
        const todosLosItems = [];
        responseJson.data.forEach((item) => {
            console.log(item.name);

            
    });