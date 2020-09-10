import React from 'react';

import { Link } from 'react-router-dom';

import Image from '../../assets/carrinhoHomem.svg';

import { 
  Container, 
  InitButton,
  Footer,
  Info,
  Text,
  Imagem,
  InfoImagem,
  Wrapper
} from './styles';

// import Button from '../../components/Button';

const Main: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <Info>
          <Text><h1>Bem Vindo<tr/> ao <tr/> Simulador de<tr/>  Supermercado</h1></Text>   
          <Link to="/tutorial">
            <InitButton >
              <span>Jogar</span>
            </InitButton>
            </Link>
        </Info>
        <InfoImagem>
          <Imagem>
            <img alt="homem com carrinho de supermercado" src={Image} />
          </Imagem>
        </InfoImagem>
        <Footer>a</Footer>
      </Wrapper>
    </Container>
  );
}

export default Main;
