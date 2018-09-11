const { Client } = require('pg');

async function start() {
    const client = new Client({
        user: 'docker',
        host: 'mypostgres',
        database: 'docker',
        password: 'docker',
        port: 5432,
    });

    await client.connect();

    let res = await client.query('SELECT $1::text as message', ['Hello world!']);
    console.log(res.rows[0].message);

    res = await client.query('SELECT version() as version');
    console.log('Postgres Version ' + res.rows[0].version);
    await client.end();
}

start();

//setTimeout(start, 5000);