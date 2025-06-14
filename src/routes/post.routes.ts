// Endpoints(rotas) 
import { Router } from 'express';
import { getAllPosts, getPost, createPost, updatePost, deletePost } from '../controllers/postController';

const router = Router();

router.get('/', getAllPosts);
router.get('/:id', getPost);
router.post('/', createPost);
router.put('/:id', updatePost);
router.delete('/:id', deletePost);

export default router;