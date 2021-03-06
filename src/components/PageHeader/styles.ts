import styled from 'styled-components';

import { colors } from '../../styles';

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  background-color: ${colors.colorPrimary};

  @media (min-width: 700px) {
    height: 340px;
  }
`;

export const Back = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${colors.colorTextInPrimary};
  padding: 1.6rem 0;

  a {
    height: 3.2rem;
    transition: opacity 0.2s;

    > img {
      height: 2.6rem;
    }

    &:hover {
      opacity: 0.6;
    }
  }

  > img {
    height: 1.6rem;
  }

  @media (min-width: 700px) {
    max-width: 1100px;
  }
`;

export const Content = styled.div`
  width: 90%;
  margin: 0 auto;
  position: relative;
  margin: 3.2rem auto;

  strong {
    font: 700 3.6rem Archivo;
    line-height: 4.2rem;
    color: ${colors.colorTitleInPrimary};

    @media (min-width: 700px) {
      max-width: 350px;
    }
  }

  p {
    max-width: 30rem;
    font-size: 1.6rem;
    line-height: 2.6rem;
    color: ${colors.colorTextInPrimary};
    margin-top: 2.4rem;
  }

  @media (min-width: 700px) {
    flex: 1;
    max-width: 740px;
    margin: 0 auto;
    padding-bottom: 48px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
`;
