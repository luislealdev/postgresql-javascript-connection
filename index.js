const { Client } = require('pg');

const client = new Client({
  user: 'gerente',
  host: 'localhost',
  database: 'ventas',
  password: '12345678',
  port: 1234,
});

async function connectToDB() {
  try {
    await client.connect();
    const result = await client.query('SELECT * FROM venta;');
    console.log(result.rows);
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await client.end();
  }
}

connectToDB();
