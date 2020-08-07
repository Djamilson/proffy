import { Link } from 'react-router-dom';

import { Form } from '@unform/web';
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
  margin-top: 180rem;

  main {
    margin: 3.2rem auto;
    width: 90%;

    @media (min-width: 700px) {
      padding: 3.2rem 0;
      max-width: 740px;
      margin: 0 auto;
    }
  }
`;

export const ContentForm = styled(Form)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 16px;
  position: absolute;
  bottom: -28px;

  top: 20rem;

  form {
    margin-top: 3.2rem;

    label {
      color: ${colors.colorTextInPrimary};
    }

    @media (min-width: 700px) {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      column-gap: 16px;
      position: absolute;
      bottom: -28px;
    }
  }
`;
