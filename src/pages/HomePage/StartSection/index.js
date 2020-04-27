import React from 'react';

import Button from '../../../components/Button';
import {colors} from '../../../constants/colors';

import { Container, BoxTitle,  BoxText} from './styles';

const StartSection = () => {
    return (
    <Container>
      <BoxTitle>
      The place where Tutors and Students meet
      </BoxTitle>
      <BoxText>
      Find out who can help you take your education to the next level.
      </BoxText>
      <Button
            text='Get started now'
            buttonColor={colors.green}
            buttonHoverColor={colors.greenButtonHover}
            fontColor='white'
            borderButton='1px solid'
            widthStyle='10rem'
          />
    </Container>
    );
  }

export default StartSection;
