import React from 'react';
import PropTypes from 'prop-types';
import { Button, Container } from './styles';

const DefaultButton = ({
  text,
  buttonColor,
  buttonHoverColor,
  widthStyle,
  heightStyle,
  margin,
  fontColor,
  fontSize,
  borderButton,
  onClick,
  borderRadius,
}) => (
  <Container>
    <Button
      className='btn'
      type='button'
      buttonColor={buttonColor}
      buttonHoverColor={buttonHoverColor}
      widthStyle={widthStyle}
      heightStyle={heightStyle}
      fontColor={fontColor}
      fontSize={fontSize}
      borderButton={borderButton}
      borderRadius={borderRadius}
      onClick={onClick}
      margin={margin}
    >
      {text}
    </Button>
  </Container>
);

DefaultButton.propTypes = {
  text: PropTypes.string.isRequired,
  buttonColor: PropTypes.string.isRequired,
  buttonHoverColor: PropTypes.string.isRequired,
  widthStyle: PropTypes.string.isRequired,
  heightStyle: PropTypes.string,
  fontColor: PropTypes.string.isRequired,
  fontSize: PropTypes.string,
  borderButton: PropTypes.string,
  borderRadius: PropTypes.string,
  margin: PropTypes.string,
  onClick: PropTypes.func,
};

export default DefaultButton;
