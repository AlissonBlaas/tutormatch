import styled from 'styled-components/macro';

export const Button = styled.button`
  background-color: ${props => props.buttonColor};
  width: ${props => props.widthStyle};
  height: ${props => props.heightStyle};
  border-radius:  ${props => props.borderRadius};
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
    outline: none !important;
  }
`;

export const Container = styled.div`
text-align: center;
width: ${props => props.widthStyle};
margin: 0;
padding: 0;
padding-top: 0;
display: flex;
flex-direction: start;
outline: none;
`;
