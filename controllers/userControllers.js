import pool from '../config/db.js';

export const getUsers = async (req, res) => {
    try{
        const result = await pool.query('SELECT * FROM users ORDER BY id ASC');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({error: err.message});
    }
};

exports.getUserById = (req, res) =>{
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id == id);

    if(!user){
        return res.status(404).json({message: 'Usuário não encontrado'});
    }

    res.json(user);
};

exports.createUser = (req, res) => {
    const newUser = req.body;
    const newId = users.length ? Math.max(...users.map( u => u.id)) + 1 : 1;

    const user = {id: newId, ...newUser};
    users.push(user);

    res.status(201).json(user);
};

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