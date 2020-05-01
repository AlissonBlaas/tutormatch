import styled from 'styled-components/macro';

import px2vw from '../../helpers/responsive';

export const Button = styled.button`
  background-color: ${props => props.buttonColor};
  width: ${props => props.widthStyle};
  height: ${props => props.heightStyle};
  border-radius: ${px2vw(5)};
  border: ${props => props.borderButton};
  font-size: ${props => props.fontSize};
  color: ${props => props.fontColor};
  margin:  ${props => props.margin};;
  transition-delay: fill 0.1s;
  cursor: pointer;
  &:hover {
    background-color: ${props => props.buttonHoverColor};
    color: white;
  };
  &:focus {
    background-color: ${props => props.buttonHoverColor};
    color: white;
    outline:0;
  }
`;

export const Container = styled.div`
text-align: center;
width: ${props => props.widthStyle};
margin: ${px2vw(0)};
padding:   ${px2vw(0)};
padding-top: ${px2vw(0)};
display: flex;
flex-direction: start;
`;
