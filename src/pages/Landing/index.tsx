import React, { useState, useEffect } from 'react';

import api from '../../_services/api';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';
import studyIcon from '../../assets/images/icons/study.svg';
import landingImg from '../../assets/images/landing.svg';
import logoImg from '../../assets/images/logo.svg';
import {
  Container,
  Content,
  ContainerLogo,
  ButtonsContainer,
  LinkStudy,
  LinkGiveClasses,
} from './styles';

const Landing: React.FC = () => {
  const [totalConnections, setTotalConnections] = useState(0);

  useEffect(() => {
    api.get('connections').then((res) => {
      const { total } = res.data;

      setTotalConnections(total);
    });
  }, []);

  return (
    <Container>
      <Content>
        <ContainerLogo>
          <img src={logoImg} alt="Proffy" />
          <h2>Sua plataforma de estudos online.</h2>
        </ContainerLogo>

        <img
          src={landingImg}
          alt="Plataforma de estudos"
          className="hero-image"
        />

        <ButtonsContainer>
          <LinkStudy to="/study">
            <img src={studyIcon} alt="Estudar" />
            Estudar
          </LinkStudy>

          <LinkGiveClasses to="/give-classes">
            <img src={giveClassesIcon} alt="Dar aula" />
            Dar aulas
          </LinkGiveClasses>
        </ButtonsContainer>

        <span>
          Total de {totalConnections} conexões já realizadas
          <img src={purpleHeartIcon} alt="Coração roxo" />
        </span>
      </Content>
    </Container>
  );
};

export default Landing;
