const request = require("supertest"); 
const Categoria = require("../../models/Categoria");
const { beforeFindAfterExpandIncludeAll } = require("../../models/Lancamentos");
const server = require("../index.js");
const Lancamentos = require("../models/Categoria");

let NovaCategoria;

beforeAll(async () => {
    console.log('Iniciando TDD com jest!');
 });
 
 
 afterAll(async () => {
     await server.close();
     console.log('servidor fechado');
 });

 escribe('Testes de rota', () => {
    test('acessa a rota da home e verifica o conteúdo que é exibido ', () => {
         request(server).get('/').then(( resp) =>{
            expect(resp.status).toEqual(200);
            expect(resp.text).toContain('<a class="nav-link" href="/categoria">Categoria <span class="sr-only">(current)</span></a>');
            expect(resp.text).toContain('<a class="nav-link" href="/lancamento">Lancamento</a>');
        })
    });
    teste('cria Categoria', () => {
        //descrição do caso de testes
        test('criate Categoria ', async () => {
           //qual a rota que ele deve acessar e qual requisição deve fazer
           request(server).get('/categoria').then(( resp) =>{
            expect(resp.status).toEqual(200);
            expect(resp.text).toContain('<a class="nav-link" href="/categoria">Categoria <span class="sr-only">(current)</span></a>');
        })
           //const res = await request(server).get('/lancamentos'); 
           let newCategoria = {
            categoria: "Casa",
            
            };
            NovaCategoria = await Categoria.create(newCategoria);
           //qual o status esperado 
           expect(resp.status).toEqual(200);
           expect(NovaCategoria).toHaveProperty('id');
          
        });

    })
});
