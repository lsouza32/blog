// lógica que interage diretamente com o banco de dados

import { prisma } from '../lib/prima';
import { Post } from '@prisma/client';

export const findAllPosts = async (): Promise<Post[]> => {
  return prisma.post.findMany({
    orderBy: { createdAt: 'desc' }
  });
};

export const findPostById = async (id: number): Promise<Post | null> => {
  // Usamos o Prisma para encontrar um registro ÚNICO na tabela Post
  // onde o id corresponde ao que foi passado como parâmetro.
  return prisma.post.findUnique({
    where: {
      id: id,
    },
  });
};

export const createDefaultPost = async (): Promise<Post> => {
  return prisma.post.create({
    data: {
      title: 'Novo Post Padrão',
      content: 'Este conteúdo precisa ser editado.',
    },
  });
};

export const updatePost = async (id: number, data: { title: string, content: string }): Promise<Post | null> => {
  try {
    return await prisma.post.update({ where: { id }, data });
  } catch (error) {
    return null; // Retorna nulo se o post não for encontrado
  }
};

export const deletePost = async (id: number): Promise<Post | null> => {
  try {
    return await prisma.post.delete({ where: { id } });
  } catch (error) {
    return null; // Retorna nulo se o post não for encontrado
  }
};