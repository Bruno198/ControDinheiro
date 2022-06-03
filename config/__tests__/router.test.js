const request = require("supertest"); 
const { beforeFindAfterExpandIncludeAll } = require("../../models/Lancamentos");
const server = require("../index.js");
const Lancamentos = require("../models/Lancamentos");

let novoLancamento;
//beforeAll(async) //// before All é antes de tudo

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

    test('acessa Usuário específico ', async () => {

        let addedUserio = await User.create({
            UsuarioNome: "Bruno",
            UsuarioSobrenome: "Figueira"
           });
        expect(addedUserio).toHaveProperty('id');

        const res = await request(server).get('/'); 
        expect(res.header['content-type']).toBe('text/html; charset=utf-8');
        expect(res.statusCode).toBe(200);

        let removedUser = await usuario.destroy(
            {
                where: {
                        id: addedUserio.id
                    }
            });


    });
    teste('cria Lancamentos', () => {
        //descrição do caso de testes
        test('criate Lancamento ', async () => {
           //qual a rota que ele deve acessar e qual requisição deve fazer
           request(server).get('/lancamento').then(( resp) =>{
            expect(resp.status).toEqual(200);
            expect(resp.text).toContain('<a class="nav-link" href="/lancamento">Lancamento</a>');
        })
          // const res = await request(server).get('/lancamentos'); 
           let newLancamento = {
            ganho: "on",
            valor:"57000" ,
            data_lancamento: "15/03/2000" ,
            select_novo: "Estudos"
            };
            novoLancamento = await Lancamentos.create(newLancamento);
           //qual o status esperado 
           expect(resp.status).toEqual(200);
           expect(novoLancamento).toHaveProperty('id');
          
        });
      
    
    test('Apaga Lancamento ', async () => {
        //qual a rota que ele deve acessar e qual requisição deve fazer
        
        let number = await Lancamentos.count();

        let removedLancamentos = await Lancamentos.destroy(
                {
                    where: {
                            id: addedUserio.id
                        }
                });
        //qual o status esperado 
        expect(resp.status).toEqual(200);
        let numberAfter = await Lancamentos.count();
        expect(numberAfter).toEqual(number-1);
    
    });
})
 })