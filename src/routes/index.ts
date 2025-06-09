// Arquivo principal de rotas
import { Router } from 'express';
import postRoutes from './post.routes';

const router = Router();
// Diz ao router principal para usar as rotas de post sob o caminho /posts
router.use('/posts', postRoutes);

export default router;