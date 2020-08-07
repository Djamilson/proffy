import styled, { css } from 'styled-components';

import { colors } from '../../styles';
import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const InputBlock = styled.div`
         position: relative;

         && {
           margin-top: 1.4rem;
         }

         label {
           font-size: 1.4rem;
           color: ${colors.colorTextcomplement};
         }
       `;

export const Container = styled.div<ContainerProps>`
  background: ${colors.colorInputBackground};
  border-radius: 10px;
  border: 1px solid ${colors.colorLineInWhite};
  padding: 12.8px;
  width: 100%;

  display: flex;
  align-items: center;

  ${(props) =>
    props.isErrored &&
    css`
      border-color: ${colors.colorLineInWhite};
    `}

  ${(props) =>
    props.isFocused &&
    css`
      color: ${colors.colorSecundary};
      border-color: ${colors.colorSecundary};
    `}

  ${(props) =>
    props.isFilled &&
    css`
      color: ${colors.colorSecundary};
    `}


  input {
    flex: 1;
    border: 0;
    color: ${colors.colorPrimary};
    -webkit-text-fill-color: ${colors.colorPrimary};

    transition: background-color 5000s ease-in-out 0s;

    background: transparent;
    &::placeholder {
      color: ${colors.colorTextTitle};
    }
  }

  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;

  svg {
    margin: 0;
  }

  span {
    background: ${colors.colorBackground};
    color: ${colors.colorPrimaryDark};
    &::before {
      border-color: ${colors.colorLineInWhite} transparent;
    }
  }
`;
