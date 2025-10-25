import pool from '../config/db.js';

export const getUsers = async (req, res) => {
    try{
        const result = await pool.query('SELECT * FROM users ORDER BY id ASC');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({error: err.message});
    }
};

export const getUserById = async (req, res) => {
    const {id} = req.params;
    try {
        const result = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
        if (result.rows.length === 0){
            return res.status(404).json({message: 'Usuário não encontrado!'});
        }
        res.json(result.rows[0]);
    } catch (err) {
        res.status(500).json({error: err.message});
    }
};

export const createUser = async (req, res) => {
    const {nome} = req.body;
    try {
        const result = await pool.query('INSERT INTO users (nome) VALUES ($1) RETURNING *', [nome]);
        res.status(201).json(result.rows[0]);
    } catch (err) {
        res.status(500).json({error: err.message});
    }
}

export const updateUser = async (req, res) => {
    const {id} = req.params;
    const {nome} = req.body;
    try {
        const result = await pool.query('UPDATE users SET nome = COALESCE($1, nome) WHERE id = $2 RETURNING *', [nome, id]);
        if (result.rows.length === 0){
            return res.status(404).json({message: 'Usuário não encontrado!'});
        }
        res.json(result.rows[0]);
    } catch (err) {
        res.status(500).json({error: err.message});
    }
};

export const deleteUser = async (req, res) => {
    const {id} = req.params;
    try {
        const result = await pool.query('DELETE FROM users WHERE id = $1 RETURNING *', [id]);
        if (result.rows.length === 0){
            return res.status(404).json({message: 'Usuário não encontrado!'});
        }
        res.status(204).json({message: 'Usuário removido com sucesso!'});
    } catch (err) {
        res.status(500).json({error: err.message});
    }
};