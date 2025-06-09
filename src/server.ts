// servidor
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mainRouter from './routes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Serve a nossa interface de controle HTML da pasta 'public'
app.use(express.static('public'));

// Define que todas as rotas da API começarão com /api
app.use('/api', mainRouter);

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});