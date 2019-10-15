import React, { Component } from 'react';

import { FaGithubAlt, FaPlus, FaSpinner } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import Container from '../../components/Container';

import { Form, SubmitButton, List, Title } from './styles';

export default class Main extends Component {
  state = {
    newRepo: '',
    repositories: [],
    loading: false,
    error: false,
  };

  //Carregar dados do local storage
  componentDidMount() {
    const repositories = localStorage.getItem('repositories');

    if(repositories) {
      this.setState({ repositories: JSON.parse(repositories)})
    }
  }
  //Salvar os dados no local storage
  componentDidUpdate(_, prevState) {
    const  {repositories} = this.state;
    if(prevState.repositories !== this.state.repositories ){
      localStorage.setItem('repositories',JSON.stringify(repositories))
    }
  }

  handleInputChange = e => {
    this.setState({ newRepo: e.target.value, error: null });
  };

  
  handleSubmit = async e => {
    e.preventDefault();

    this.setState({ loading: true, error: false});

    try {
      const { newRepo, repositories } = this.state;
      if(newRepo === ''){
        throw 'Você precisa digitar um repositório antes...';
      }

      const jaPossui = repositories.find(repo => repo.name == newRepo);
      
      if(jaPossui){
        throw new Error('Repositório duplicado');
      }
      const response = await api.get(`/repos/${newRepo}`);

      const data = {
        name: response.data.full_name,
      };

      this.setState({
        repositories: [...repositories, data],
        newRepo: '',
      });
    } catch (error) {
      this.setState({ error: true });
    }finally{
      this.setState({loading: false });
    }
  }
  render () {
    const { newRepo, repositories, loading, error } = this.state;

    return (
      <Container>
        <Title>
          <h1>
            <FaGithubAlt />
            Repositórios
          </h1>
        </Title>
        <Form onSubmit={this.handleSubmit} error={error}>
          <input
            type="text"
            placeholder="Adicionar repositório"
            value={newRepo}
            onChange={this.handleInputChange}
          />

          <SubmitButton loading={loading ? 1 : 0}>
            { loading ? (
              <FaSpinner color="#FFF" size={14} />
              ) : (
                <FaPlus color="#FFF" size={14} />
              ) }
          </SubmitButton>
        </Form>

        <List>
                {repositories.map(repository => (
                  <li key={repository.name}>
                    <span>{repository.name}</span>
                    <Link to={`/repository/${encodeURIComponent(repository.name)}`}>Detalhes</Link>
                  </li>
                ))}
        </List>
      </Container>
    );
  }
}
