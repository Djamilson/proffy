import styled from 'styled-components';

import { colors } from '../../styles';

export const TextareaBlock = styled.div`
  position: relative;

  && {
    margin-top: 1.4rem;
  }

  label {
    font-size: 1.4rem;
    color: ${colors.colorTextcomplement};
  }

  textarea {
    width: 100%;
    height: 16rem;
    min-height: 8rem;
    margin-top: 0.1rem;
    border-radius: 0.8rem;

    background: ${colors.colorInputBackground};
    border: 1px solid ${colors.colorLineInWhite};
    outline: 0;
    resize: vertical;
    padding: 0 3.6rem;
    font: 1.6rem Archivo;
  }

  &:focus-within::after {
    width: calc(100% - 3.2rem);
    height: 2px;
    content: '';
    background: ${colors.colorPrimaryLight};
    position: absolute;
    left: 1.6rem;
    right: 1.6rem;
    bottom: 7px;
  }
`;
