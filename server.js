const express = require('express');
const app = express();

const hbs = require('hbs');

// Importamos el archivo helpers
require('./hbs/helpers');

// Para conectarnos a heroku
const port = process.env.PORT || 3000;

// Para crear un midleware
// es una instruccion que se ejecuta siempre no importa que url pida el usuario
app.use(express.static(__dirname + '/public'));


// Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {

    // Renderizamos la pagina completa que tenemos en home.hbs
    res.render('home', {
        nombre: 'JuAn'
    });
});
app.get('/about', (req, res) => {

    // Renderizamos la pagina completa que tenemos en home.hbs
    res.render('about');
});


app.listen(port, () => {
    console.log(`Escuchando peticiones en el puesto ${port}`);
});