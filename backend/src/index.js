const express = require('express'); //Importamos

const app = express(); // instanciamos o express

app.get('/projects', (request, response) => {  //requisição feita para o cliente se comunicar com a API
    return response.json({
        menssage: 'Hello Dev!'
    });
});

app.listen(3333, () => {
    console.log('Backend started')
}); //definimos a porta que o express vai trabalhar do localhost, o segundo parametro é opcional para criar uma msg no terminal informado com console.log