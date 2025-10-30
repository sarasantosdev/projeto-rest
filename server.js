import express from 'express';
import userRoutes from './routes/userRoutes.js';
import dotenv from 'dotenv';
import prisma from '../projeto-rest/generated/prisma/client.js'; 
dotenv.config();

const app = express();
app.use(express.json());

app.use('/users', userRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT)
    .on('listening', () => console.log(`Executando servidor na porta ${PORT}`))
    .on('error', (err) => console.error('Falha ao iniciar o servidor', err));

process.on('SIGINT', async () => {
  await prisma.$disconnect();
  console.log('🧹 Conexão com o banco encerrada.');
  process.exit(0);
});