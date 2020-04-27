import React from 'react';
import PropTypes from 'prop-types';
import { Button, Container } from './styles';

const DefaultButton = ({
  text,
  buttonColor,
  buttonHoverColor,
  widthStyle,
  heightStyle,
  fontColor,
  borderButton,
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
      borderButton={borderButton}
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
  heightStyle: PropTypes.string.isRequired,
  fontColor: PropTypes.string.isRequired,
  borderButton: PropTypes.string.isRequired,
};

export default DefaultButton;
