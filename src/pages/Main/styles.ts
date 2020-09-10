import styled from 'styled-components';

import Button from '../../components/Button';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  width: 100%;
  height: 100%;
  margin: 0 auto;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column; 
  height: 100%;
  width: 100%;
  margin-left: 50px;
  margin-top: 10px;

  @media (max-width: 1000px){
    margin-left: 0;
  };
`;

export const Text = styled.div`
  margin-right: 5px;
  > h1 {
    color: black;
    font-size: 60px;
    @media (max-width: 1000px){
      font-size: 60px;
    };
  }
`;

export const InitButton = styled(Button)`
  margin: 50px auto;
  > span {
    color: black;
    opacity: 1;
  }
`;

export const Imagem  = styled.div`
  margin-top: 100px;
  > img {
    width: max(800px);
    height: min(500px)
  };

  @media (max-width: 1280px){
    right: -50px;
  };
  @media (max-width: 1200px){
    right: -100px;
  };
  @media (max-width: 1000px){
    display: none;
  };
`;

export const InfoImagem = styled.div`
  display: flex;
  flex-direction: column; 

  @media (max-width: 1280px){
    right: -50px;
  };
  @media (max-width: 1200px){
    right: -100px;
  };
`
export const Footer = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%; 
  height: 50px;
  background: var(--primary);
  color: var(--primary);
`;

export const Wrapper = styled.div`
  max-width: 1280px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`

