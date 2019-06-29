const express = require('express');

const server = express();

server.use(express.json());

const projects = [];

//Middlewares
/*
    Crie um middleware global chamado em todas requisições que
    imprime (console.log) uma contagem de quantas requisições
    foram feitas na aplicação até então;
*/
var quantidadeRequisicoes = 0;
server.use((req, res, next) => {
    quantidadeRequisicoes++;
    if(quantidadeRequisicoes == 1){
        console.log(`Foi feita apenas ${quantidadeRequisicoes} requisição na API`);
    }else{
        console.log(`Foram feitas ${quantidadeRequisicoes} requisições na API`);
    }
    
    
    return next();
  });

/*Crie um middleware que será utilizado em todas rotas que recebem
 o ID do projeto nos parâmetros da URL que verifica se o projeto
 com aquele ID existe. Se não existir retorne um erro, caso 
 contrário permita a requisição continuar normalmente;
*/

function verificaExistencia(req,res,next) {
    if(!req.body.id){
        return res.status(400).json({
            error: 'Erro no projeto - Não existe projeto com este ID'
        });
    }
    return next();
}


//GET /projects: Rota que lista todos projetos e suas tarefas;
server.get('/projects', (req, res) => {
    return res.json(projects);
})


//Criando Projetos
/*
    POST /projects: A rota deve receber id e title dentro corpo de cadastrar um novo
    projeto dentro de um array no seguinte formato: { id: "1", title: 'Novo projeto', tasks: [] };
    Certifique-se de enviar tanto o ID quanto o título do projeto no formato string com àspas duplas.
*/
server.post('/projects', (req,res) => {
    const { id, title } = req.body;
    const project = {
        id,
        title,
        tasks: []
    };
    projects.push(project);
    return res.json(project);
})

/*
POST /projects/:id/tasks: A rota deve receber
um campo title e armazenar uma nova tarefa no
array de tarefas de um projeto específico 
escolhido através do id presente nos parâmetros
da rota;
*/

server.post('/projects/:id/tasks', (req,res) => {
    const { id } = req.params;
    const { title } = req.body;

    const project = projects.find(p => p.id === id);
    project.tasks.push(title);
    return res.json(project);
});;


//PUT /projects/:id: A rota deve alterar apenas o título do projeto com o id presente nos parâmetros da rota;
server.put('/projects/:id', (req,res) => {
    const { id } = req.params;
    const { title } = req.body;

    projects[id] = {
        id,
        title,
        tasks: []
    };

    return res.json(projects[id]);

})

//DELETE /projects/:id: A rota deve deletar o projeto com o 
//id presente nos parâmetros da rota;
server.delete('/projects/:id', (req,res) => {
    const { id } = req.params;

    projects.splice(id, 1);

    return res.send();
})

server.listen(3000);