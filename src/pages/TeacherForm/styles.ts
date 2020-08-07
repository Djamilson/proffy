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

  @media (min-width: 700px) {
    max-width: 100vw;
  }
`;

export const Content = styled.div`
  width: 90vw;
  max-width: 700px;
  margin-top: 110rem;
`;

export const ContainerForm = styled.div`
  form {
    background: ${colors.colorBoxBase};
    width: 100%;
    max-width: 74rem;
    border-radius: 0.8rem;

    padding-top: 6.4rem;
    overflow: hidden;

    header {
      background: ${colors.colorBoxFooter};
      border-bottom: 1px solid ${colors.colorLineInWhite};
      margin-top: -6.4rem;
      margin-bottom: 5rem;

      @media (min-width: 700px) {
        padding: 4rem 6.4rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      p {
        @media (min-width: 700px) {
          justify-content: space-between;
        }
      }

      button {
        width: 100%;
        height: 5.6rem;
        background: ${colors.colorSecundary};
        color: ${colors.colorButtonText};
        border: 0;
        border-radius: 0.8rem;

        font: 700 1.6rem Archivo;
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        transition: background-color 0.2s;
        margin-top: 3.2rem;

        &:hover {
          background: ${colors.colorSecundaryDark};
        }

        @media (min-width: 700px) {
          width: 20rem;
          margin-top: 0;
        }
      }

      p {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.4rem;
        line-height: 2.4rem;
        color: ${colors.colorTextcomplement};

        img {
          margin-right: 2rem;
        }
      }
    }

    fieldset {
      border: 0;
      padding: 0 2.4rem;

      @media (min-width: 700px) {
        padding: 0 6.4rem;
      }

      legend {
        font: 700 2.4rem Archivo;
        color: ${colors.colorTextTitle};
        margin-bottom: 2.4rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        padding-bottom: 1.6rem;
        border-bottom: 1px solid ${colors.colorLineInWhite};

        button {
          background: none;
          border: 0;
          color: ${colors.colorPrimary};
          font: 700 1.6rem Archivo;
          cursor: pointer;
          transition: color 0.2s;
          &:hover {
            width: 30%;
            height: 4.6rem;
            background: ${colors.colorSecundary};
            color: ${colors.colorButtonText};
            border: 0;
            border-radius: 0.8rem;

            font: 700 1.6rem Archivo;
            display: flex;
            align-items: center;
            justify-content: center;
            text-decoration: none;
          }
        }
      }
    }

    fieldset + fieldset {
      margin-top: 3.4rem;
    }

    footer {
      padding: 4rem 2.4rem;
      background: ${colors.colorBoxFooter};
      border-top: 1px solid ${colors.colorLineInWhite};
      margin-top: 6.4rem;

      @media (min-width: 700px) {
        padding: 4rem 6.4rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      p {
        @media (min-width: 700px) {
          justify-content: space-between;
        }
      }

      p {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.4rem;
        line-height: 2.4rem;
        color: ${colors.colorTextcomplement};

        img {
          margin-right: 2rem;
        }
      }
    }
  }
`;

export const ScheduleItem = styled.div`
  @media (min-width: 700px) {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    column-gap: 1.6rem;
  }
`;
