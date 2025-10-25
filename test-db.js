import pool from "./config/db.js";

const testConnection = async () => {
    try {
        const result = await pool.query('SELECT NOW()');
        console.log('Conexão bem-sucedida:', result.rows[0]);
    } catch (err) {
        console.error('Erro na conexão:' , err);
    }finally {
        await pool.end();
    }
};

testConnection();