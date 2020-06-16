import expres from 'express';


const routes = expres.Router();

const ProductController = require ('./controllers/ProductCotroller') ;

routes.get('/products',ProductController.index); //Listar todos
routes.get('/products/:id',ProductController.show); //Listar por ID
routes.post('/products',ProductController.store);   //Adicionar
routes.delete('/products/:id',ProductController.destroy); //Deletar
routes.put('/products/:id',ProductController.update); //Atualizar






module.exports = routes;