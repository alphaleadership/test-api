const nodeFetch = require('node-fetch');

let api = 'http://luuxis.fr/api';

async function main() {
    let data = {
        pseudo: 'Luuxis',
        name: 'andre',
        lastName: 'gallo',
        email: 'mail@luuxis.fr',
        password: '123456',
        admin: true
    }

    let response = await nodeFetch(`${api}/signup`, {
        method: 'POST',
        body: JSON.stringify(data)
    });
    let json = await response.json();
    console.log(json);
}

main();