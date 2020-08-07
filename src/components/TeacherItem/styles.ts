import styled from 'styled-components';

import { colors } from '../../styles';

export const Container = styled.div`
  background: ${colors.colorBoxBase};
  border: 1px solid ${colors.colorLineInWhite};
  border-radius: 0.8rem;
  margin-top: 2.4rem;
  overflow: hidden;

  color: ${colors.colorTextBase};

  header {
    padding: 3.2rem 2rem;
    display: flex;
    align-items: center;

    img {
      width: 8rem;
      height: 8rem;
      border-radius: 50%;
    }

    div {
      margin-left: 2.4rem;

      span {
        font: 1.6rem;
        display: block;
        margin-top: 0.4rem;
      }

      strong {
        font: 700 2.4rem Archivo;
        display: block;
        color: ${colors.colorTextTitle};
      }
    }

    @media (min-width: 700px) {
      padding: 3.2rem;
    }
  }

  > p {
    padding: 0 2rem;
    font-size: 1.6rem;
    line-height: 2.8rem;

    @media (min-width: 700px) {
      padding: 0 3.2rem;
    }
  }

  footer {
    padding: 3.2rem 2rem;
    background: ${colors.colorBoxFooter};
    border-top: 1px solid ${colors.colorLineInWhite};
    margin-top: 3.2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      strong {
        color: ${colors.colorPrimary};
        font-size: 1.6rem;
        display: block;

        @media (min-width: 700px) {
          display: initial;
          margin-left: 1.6rem;
        }
      }
    }

    button {
      width: 20rem;
      height: 5.6rem;
      background: ${colors.colorSecundary};
      color: ${colors.colorButtonText};
      border: 0;
      border-radius: 0.8rem;

      font: 700 1.4rem Archivo;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      transition: 0.2s;

      &:hover {
        background: ${colors.colorSecundaryDark};
      }

      img {
        margin-right: 1.6rem;
      }

      @media (min-width: 700px) {
        width: 24.5rem;
        font-size: 1.6rem;
        justify-content: center;
      }
    }
  }
`;
