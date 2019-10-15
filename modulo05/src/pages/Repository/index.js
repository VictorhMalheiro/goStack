import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import api from '../../services/api';

import {FaSpinner, FaArrowLeft } from 'react-icons/fa';
import Container from '../../components/Container';

import { Loading, Owner, IssueList } from './styles';
import { spawn } from 'child_process';

export default class Repository extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        repository: PropTypes.string,
      }),
    }).isRequired,
  };

  state = {
    repository: {},
    issues: [],
    loading: true,
    filters: [
      { state: 'all', label: 'Todas', active: true },
      { state: 'open', label: 'Abertas', active: false },
      { state: 'closed', label: 'Fechadas', active: false },
    ],
    filterIndex: 0,
  }

  async componentDidMount() {
    const { match } = this.props;
    const { filters } = this.state;

    const repoName = decodeURIComponent(match.params.repository);

    const [repository, issues] = await Promise.all([
      api.get(`/repos/${repoName}`),
      api.get(`/repos/${repoName}/issues`, {
        params: {
          state: filters.find(filter => filter.active).state,
          per_page: 5,
        },
      }),
    ]);

    this.setState({
      repository:repository.data,
      issues: issues.data,
      loading: false,
    })

  }

  cons

  render() {
    const { repository, issues, loading } = this.state;

    if(loading) {
      return <Loading><FaSpinner color="#FFF" size={36} /></Loading>;
    }
    return (
      <Container>
        <Owner>
          <Link to="/"><FaArrowLeft color="#EEE" size={16}/> Voltar aos repositórios</Link>
          <img src={repository.owner.avatar_url} alt={repository.owner.login}/>
            <h1>{repository.name}</h1>
            <p>{repository.description}</p>
        </Owner>

        <IssueList>
          {issues.map(issue => (
            <li key={String(issue.id)}>
              <img src={issue.user.avatar_url}  alt={issue.user.login}/>
                <div>
                  <strong>
                    <a href={issue.html_url}>{issue.title}</a>
                    {issue.labels.map(label => (
                      <span key={String(label.id)}>{label.name}</span>
                    ))}
                  </strong>
                  <p>{issue.user.login}</p>
                </div>

            </li>
          ))}
        </IssueList>
      </Container>
    );
  }
}
