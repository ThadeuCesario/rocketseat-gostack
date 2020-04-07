const express = require('express');

const app = express();

/**
 * Temos abaixo o método GET, lembrando que com o Express podemos controlar rotas.
 * Para isso vamos utilizar o método 'get' do express. No primeiro parâmetro
 * temos a rota que estaremos trabalhando que no caso é a '/project'.
 * O segundo parâmetro é uma função. Veja que estou utilizando arrow function.
 * Essa função utiliza de dois parâmetros, sendo que o primeiro é a requisição
 * e o segundo é a resposta.
 * O return dessa função é sempre uma resposta. Temos várias formas de retornar
 * uma resposta. Porém a mais comum no início é o send().
 * 
 * O request guarda as informações da requisição que o usuário está fazendo. Por exemplo
 * quais são as rotas ou parâmetros.
 */
app.get('/', (request, response) => {
  return response.json({"message":"Hello GoStack"});
});

/**
 * Com o App.listen, a aplicação estará em uma porta na qual podemos
 * acessar pelo localhost. Neste caso estará disponível na porta 3333.
 * 
 * Podemos ter como segundo parâmetro uma função que será acionada quando
 * o servidor for executado.
 */
app.listen(3333, () => {
  console.log('👾️ Back-end started! 🤖️')
}); 