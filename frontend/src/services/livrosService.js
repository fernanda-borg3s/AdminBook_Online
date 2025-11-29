import api from './api';

// Objeto ou classe responsável por todas as chamadas relacionadas a Livros
const livrosService = {
  // Busca todos os livros
  getAllLivros: async () => {
    const response = await api.get('/livros/todosLivros');
    return response.data;
  },
  getLivrosLidos: async () => {
    const response = await api.get('/livros/livrosLidos');
    return response.data;
  },

  // Buscar um livro específico por ID
//   getLivroById: async (id) => {
//     const response = await api.get(`/livros/${id}`);
//     return response.data;
//   },

  registerLivro: async (livroData) => {
    const response = await api.post('/livros/registrarLivro', livroData);
    return response.data;
  },
//   deleteLivro: async (id) => {
//     const response = await api.delete(`/livros/${id}`);
//     return response.data;
//   }
};

export default livrosService;