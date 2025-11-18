import { database_adminBooks } from '../../database.js';

const livrosController = {
    registrarLivro: async(req, res) => {
        try {
            const {
                titulo,
                autor,
                finalizado,
                data_mes,
                data_ano,
                genero,
                categoria,
                formato_livro,
                observacoes
                } = req.body

            const newId = Math.max(...database_adminBooks.map(book => book.id_livro)) + 1;
            const newBook = {
                id_livro: newId,
                titulo,
                autor,
                finalizado,
                data_mes,
                data_ano,
                genero,
                categoria,
                formato_livro,
                observacoes
            };

            database_adminBooks.push(newBook);

            res.json({msg: "Livro Registrado com sucesso", data: newBook})

        } catch (error) {
            console.error(error);
            res.json({ msg: "Ocorreu um erro ao registrar livro" });
        }
    },
    todosLivros: async(req, res) => {
        try {
            const sortedBooks = [...database_adminBooks].sort((a, b) => a.titulo.localeCompare(b.titulo));
            if (sortedBooks.length > 0) {
                return res.status(200).json({msg: "OK", data: sortedBooks})
            }
            res.status(200).json({msg: "Não há livros disponíveis"})
        } catch (error) {
            res.json({msg: error.message})
        }
    },
    livrosLidos: async(req, res) => {
        try {
            const lidos = database_adminBooks.filter(book => book.finalizado === 'Sim').sort((a, b) => a.autor.localeCompare(b.autor));
            if (lidos.length > 0) {
                return res.status(200).json({msg: "OK", data: lidos})
            }
            res.status(200).json({msg: "Não há livros lidos"})
        } catch (error) {
            res.json({msg: error.message})
        }
    },
    livrosNFinalizados: async(req, res) => {
        try {
            const nFinalizados = database_adminBooks.filter(book => book.finalizado === 'Não').sort((a, b) => a.autor.localeCompare(b.autor));
            if (nFinalizados.length > 0) {
                return res.status(200).json({msg: "OK", data: nFinalizados})
            }
            res.status(200).json({msg: "Não há livros não finalizados"})
        } catch (error) {
            res.json({msg: error.message})
        }
    },

    dataAnoMes: async(req, res) => {
        try {
            const data = database_adminBooks.map(book => ({ data_mes: book.data_mes, data_ano: book.data_ano })).sort((a, b) => a.data_ano - b.data_ano);
            if (data.length > 0) {
                return res.status(200).json({msg: "OK", data: data})
            }
            res.status(200).json({msg: "Não há dados disponíveis"})
        } catch (error) {
            res.json({msg: error.message})
        }
    },


}
export default livrosController;
