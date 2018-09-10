const { Client } = require('pg');

async function start() {
    const client = new Client({
        user: 'docker',
        host: 'postgres',
        database: 'docker',
        password: 'docker',
        port: 5432,
    });

    await client.connect();

    const res = await client.query('SELECT $1::text as message', ['Hello world!']);
    console.log(res.rows[0].message)
    await client.end()
}

start();