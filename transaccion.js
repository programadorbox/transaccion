const express = require('express');
const app = express();
const {pool} = require('./dataBase');
 
app.use(express.json());
 
app.post('/transaccion-actualizada', async (req, res) => {
    const { id_producto, cantidad } = req.body;
    const client = await pool.connect();
 
    try {
        await client.query('BEGIN');
        const ventaQuery = 'UPDATE cuentas SET balance= balance - 1000 WHERE id = 1;'
        await client.query(ventaQuery);
        const inventarioQuery = 'UPDATE cuentas SET balance= balance + 1000 WHERE id = 2;'
        await client.query(inventarioQuery);
        await client.query('COMMIT');
        res.status(200).send('Transaccion realizada');
    } catch (e) {
        await client.query('ROLLBACK');
        res.status(500).send('Error en la transacción: ' + e.message);
    } finally {
        client.release();
    }
});
 
app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});
//GRANT select, insert, delete, update on public.cuentas to node_user