import React from 'react';

import { Link } from 'react-router-dom';

import Image from '../../assets/carrinhoHomem.svg';

import { 
  Container, 
  InitButton,
  Footer,
  Info,
  Text,
  Imagem
} from './styles';

// import Button from '../../components/Button';

const Main: React.FC = () => {
  return (
    <Container>
      <Info>
        <Text><h1>Bem Vindo<tr/> ao <tr/> Simulador de<tr/>  Supermercado</h1></Text>   
        <InitButton>
          <span>Jogar</span>
        </InitButton>
      </Info>
      <Imagem>
        <img src={Image} />
      </Imagem>
      <Footer>a</Footer>
    </Container>
  );
}

export default Main;
