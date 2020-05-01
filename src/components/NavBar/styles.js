import {
  Button, Nav,
} from 'react-bootstrap';
import styled from 'styled-components/macro';

import { colors } from '../../constants/colors';

export const StyledButton = styled(Button)`
  background-color: ${props => props.buttonColor};
  width: ${props => props.widthStyle};
  height: ${props => props.heightStyle};
  border-radius: 5px;
  border: ${props => props.borderButton};
  font-size: 30px;
  color: ${props => props.fontColor};
   transition-delay: 0.1s;
  cursor: pointer;
  &:hover {
    background-color: ${props => props.buttonHoverColor};
  };
  &:focus {
    outline:0;
  }
`;

export const NavStyled = styled(Nav)`
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
`;

export const NavLinkStyled = styled(Nav.Link)`
  color: ${colors.darkColors.darkBlue} !important;
  text-align: center !important;
  font-size: 16px;
  &:hover {
    color: gray !important;
  };
`;
