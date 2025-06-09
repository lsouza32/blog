// recebe as requisições web e chama as funções do service
import { Request, Response } from 'express';
import * as postService from '../services/postService';


// Função auxiliar para garantir que o ID é um número válido
const parseId = (id: string) => {
    const parsedId = parseInt(id, 10);
    if (isNaN(parsedId)) return null;
    return parsedId;
}

export const getAllPosts = async (req: Request, res: Response) => {
  const posts = await postService.findAllPosts();
  res.json(posts);
};

export const getPost = async (req: Request, res: Response) => {
  const id = parseId(req.params.id);
  if (id === null) {
    return res.status(400).json({ message: 'ID inválido' });
  }

  const post = await postService.findPostById(id);
  
  if (post) {
    return res.json(post);
  } else {
    return res.status(404).json({ message: 'Post não encontrado' });
  }
};

export const createPost = async (req: Request, res: Response) => {
  const newPost = await postService.createDefaultPost();
  res.status(201).json(newPost);
};

export const updatePost = async (req: Request, res: Response) => {
  const id = parseId(req.params.id);

  // Se o ID na URL não for um número, retorne um erro
  if (id === null) {
    return res.status(400).json({ message: 'ID inválido' });
  }

  const updatedPost = await postService.updatePost(id, req.body);
  
  // Se o serviço retornou o post atualizado, envie-o
  if (updatedPost) {
    return res.json(updatedPost);
  } else {
    // Se o serviço retornou nulo (post não encontrado), envie um erro 404
    return res.status(404).json({ message: 'Post não encontrado' });
  }
};

export const deletePost = async (req: Request, res: Response) => {
   const id = parseId(req.params.id);
   if (id === null) return res.status(400).json({ message: 'ID inválido' });

   const deletedPost = await postService.deletePost(id);
   if (deletedPost) {
    return res.status(200).json({ message: 'Post deletado com sucesso' });
   } else {
    return res.status(404).json({ message: 'Post não encontrado' });
   }
};