import React from 'react';

import { Link } from 'react-router-dom';

import { Container } from './styles';

const Tutorial: React.FC = () => {
  return (
    <Container>
      <h1>k</h1>
      <Link to="/">
        <button>
          BOTAO
        </button>
      </Link>
    </Container>
  );
}

export default Tutorial;