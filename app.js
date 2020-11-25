// Creando un servidor con node
const http = require('http');

// Primero creamos el servidor para poder escuchar peticiones http
http.createServer((req, res) => {

        res.writeHead(200, { 'Content-Type': 'aplication/json' });

        let salida = {
            nombre: 'Juan',
            edad: 22,
            url: req.url
        }

        res.write(JSON.stringify(salida));
        res.end();

    })
    // Hay que especificar que puerto estara escuchando
    .listen(8080);

console.log('Escuchando el puerto 8080');