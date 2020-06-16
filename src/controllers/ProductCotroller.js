import mongoose from 'mongoose';
import { response } from 'express';

const Product = mongoose.model('Product');



module.exports = {

    async index(require, response){
        
        //Lista tudo
        const product = await Product.find();
        if(product < 1){

                return response.json({
                    Mensagem:"Não existem produtos cadastrados em nosso banco!"
                })
        }

        return response.json(product);
    },

          // Listar por Id
          async show(require, response){
                const product = await Product.findById(require.params.id);
                return response.json(product)  
        },

        // Adicionar
        async store(require, response){
            const product = await Product.create(require.body);
            return response.json(product)

    },

    // Deletar
    async destroy(require, response){
        await Product.findByIdAndRemove(require.params.id);

              return response.json({

                Mensagem:"O seu produto foi deletado com sucesso!"
              })
    },
   
    // Atualizar
    async update (require, response){

            const product = await Product.findByIdAndUpdate(require.params.id,require.body, {new: true});
            return response.json(product)
    },
}