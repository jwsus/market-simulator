import styled from 'styled-components';

import Button from '../../components/Button';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  
  max-width: 1280px;
  height: 100%;
  margin: 0 auto;
`;

export const Info = styled.div`
  margin-left: auto;
    margin-right: auto;
  align-items: center;
  position: absolute;
  display: flex;
  flex-direction: column;
  flex: 0;
`;

export const Footer = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%; 
  height: 50px;;
  background: var(--primary);
  color: var(--primary);
`;

export const Text = styled.div`
  position: absolute;
  width: 400px;
  /* height: 68px; */
  left: 68px;
  top: 5px;
  > h1 {
    /* margin-left: 60px; */
    color: black;
    font-size: 60px;
  }
`;

export const InitButton = styled(Button)`
  position: absolute;
  top: 400px;
  left: 200px;
  > span {
    color: black;
    opacity: 1;
  }
`;

export const Imagem  = styled.div`
  position: absolute;
  right: 80px;
  > img {
    width: max(800px, 500px);
    height: max(800px, 22vw);
    left: 100px;
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
