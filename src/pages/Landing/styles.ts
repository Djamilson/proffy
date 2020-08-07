import { Link } from 'react-router-dom';

import { shade } from 'polished';
import styled from 'styled-components';

import { colors } from '../../styles';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  color: ${colors.colorTextInPrimary};
  background: ${colors.colorPrimary};
`;

export const Content = styled.div`
  width: 90vw;
  max-width: 700px;

  > img {
    width: 100%;

    @media (min-width: 1100px) {
      grid-area: hero;
      justify-content: end;
    }
  }

  span {
    font-size: 1.4rem;

    display: flex;
    align-items: center;
    justify-content: center;

    img {
      margin-left: 0.8rem;
    }

    @media (min-width: 1100px) {
      grid-area: total;
      justify-self: end;
    }
  }

  @media (min-width: 1100px) {
    max-width: 1100px;

    display: grid;
    grid-template-rows: 350px 1fr;
    grid-template-columns: 2fr 1fr 1fr;

    grid-template-areas:
      'logo hero hero'
      'buttons buttons total';
  }
`;

export const ContainerLogo = styled.div`
  text-align: center;
  text-align: left;
  margin-bottom: 3.2rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  img {
    height: 10rem;

    @media (min-width: 1100px) {
      height: 100%;
    }
  }

  h2 {
    font-weight: 500;
    font-size: 2.4rem;
    line-height: 4.6rem;
    margin-top: 0.8rem;

    @media (min-width: 1100px) {
      text-align: initial;
      font-size: 3.6rem;
    }
  }

  @media (min-width: 1100px) {
    grid-area: logo;
    align-self: center;
    margin: 0;
  }

  @media (max-width: 700px) {
    margin-top: 300px;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 3.2rem 0;

  > a {
    width: 30rem;
    height: 10.4rem;
    border-radius: 0.8rem;
    font: 700 2rem Archivo;

    display: flex;
    align-items: center;
    justify-content: center;

    text-decoration: none;
    color: ${colors.colorButtonText};

    transition: background-color 0.2s;

    svg {
      margin-right: 16px;
    }

    @media (min-width: 1100px) {
      font-size: 2.4rem;
    }
  }

  a:first-child {
    margin-right: 1.6rem;
  }

  @media (min-width: 1100px) {
    grid-area: buttons;
    justify-content: flex-start;
  }
`;

export const LinkStudy = styled(Link)`
  background: ${colors.colorPrimaryLighter};
  img {
    margin-right: 16px;
  }
  &:hover {
    background: ${shade(0.2, `${colors.colorPrimaryLight}`)};
  }
`;

export const LinkGiveClasses = styled(Link)`
  background: ${colors.colorSecundary};
  img {
    margin-right: 16px;
  }
  &:hover {
    color: ${colors.colorButtonText};

    background: ${shade(0.2, `${colors.colorSecundaryDark}`)};
  }
`;
