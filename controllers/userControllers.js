import prisma from '../generated/prisma/client.js';

export const getUsers = async (req, res) => {
    try{
        const users = await prisma.users.findMany();
        res.json(users);
    }catch(err){
        res.status(500).json({error: err.message});
    }
};

export const getUserById = async (req, res) => {
    const {id} = req.params;
    try {
        const user = await prisma.users.findUnique({
            where: {id: parseInt(id)},
        });
        if (!user){
            return res.status(404).json({message: 'Usuário não encontrado'});
        }
        res.json(user)
    } catch (err) {
        res.status(500).json({error: err.message});
    }
};

export const createUser = async (req, res) => {
    const {nome} = req.body;
    try {
        const newUser = await prisma.users.create({
            data: {nome},
        });
        res.status(201).json(newUser);
    } catch (err) {
        res.status(500).json({error: err.message});
    }
}

export const updateUser = async (req, res) => {
    const {id} = req.params;
    const {nome} = req.body;

    if (!nome){
        return res.status(400).json({message: 'PUT requer todos os campos obrigatórios: nome'});
    }
    
    try {
        const user = await prisma.users.update({
            where: {id: parseInt(id)},
            data: {nome},
        });
        res.json(user);
    } catch (err) {
        res.status(500).json({error: err.message});
    }
};

export const deleteUser = async (req, res) => {
    const {id} = req.params;
    try {
      const user = await prisma.users.delete({
        where:{id: parseInt(id)},
      });
      res.status(204).json({message: 'Usuário removido com sucesso!'});
    } catch (err) {
        res.status(500).json({error: err.message});
    }
};