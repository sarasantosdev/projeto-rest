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
    const {nome} = req.params;
    try {
        const result = await pool.query('INSERT INTO users (nome) VALUES ($1) RETURNING *', [nome]);
        res.status(201).json(result.rows[0]);
    } catch (err) {
        res.status(500).json({error: err.message})
    }
}

exports.updateUser = (req, res) => {
    const id = parseInt(req.params.id);
    const index = users.findIndex(u => u.id === id);

    if (index === -1){
        return res.status(404).json({message: 'Usuário não encontrado'});
    }

    users[index] = {id, ...req.body};

    res.json(users[index]);
};

exports.patchUser = (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id == id);

    if(!user){
       return res.status(404).json({message: 'Usuário não encontrado'});
    }

    Object.assign(user, req.body);

    res.json(user);
};

exports.deleteUser = (req, res) => {
    const id = parseInt(req.params.id);
    const index = users.findIndex(u => u.id === id);

    if (index === -1){
        res.status(404).json({message: 'Usuário não encontrado'});
    };

    users.splice(index, 1);

    res.status(204).send();
};