const nodeFetch = require('node-fetch');

let api = 'http://127.0.0.1:3000/api/signup';

async function main() {
    let data = {
        name: 'John Doe',
        email: 'lol@lol.lol'
    }
    let response = await nodeFetch(api, {
        method: 'POST',
        body: JSON.stringify(data)
    });
    let json = await response.json();
    console.log(json);
}

main();