const nodeFetch = require('node-fetch');

let api = 'http://127.0.0.1:3000/api';

async function main() {
    let data = {
        token: '',
    }
    let response = await nodeFetch(`${api}/signup`, {
        method: 'POST',
        body: JSON.stringify(data)
    });
    let json = await response.json();
    console.log(json);
}

main();