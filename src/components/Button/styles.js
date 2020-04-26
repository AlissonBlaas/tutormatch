import styled from 'styled-components/macro';

import px2vw from '../../helpers/responsive';
import { colors } from '../../constants/colors';

export const Button = styled.button`
  background-color: ${props => props.buttonColor};
  width: ${props => props.widthStyle};
  height: ${props => props.heightStyle};
  border-radius: ${px2vw(5)};
  border: ${props => props.borderButton};
  font-size: 1em;
  font-family: 'Roboto';
  font-weight: bold;
  color: ${props => props.fontColor};
  transition: fill 0.25s;
  cursor: pointer;
  &:hover {
    background-color: ${colors.greenButtonHover};
  };
  &:focus {
    outline:0;
  }
`;

export const Container = styled.div`
text-align: center;
width: ${props => props.widthStyle};
margin: ${px2vw(0)};
padding:   ${px2vw(0)};
padding-top: ${px2vw(10)};
display: flex;
flex-direction: start;
`;
