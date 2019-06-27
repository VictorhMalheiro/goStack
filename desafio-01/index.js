const express = require('express');

const server = express();

server.use(express.json());

const projects = [];

server.get('/projects', (req, res) => {
    return res.json(projects);
})


//Criando Projetos
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


server.listen(3000);