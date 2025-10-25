import express from 'express';
import userRoutes from './routes/users.js';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(express.json());

app.use('/users', userRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT)
    .on('listening', () => console.log(`Executando servidor na porta ${PORT}`))
    .on('error', (err) => console.error('Falha ao iniciar o servidor', err));