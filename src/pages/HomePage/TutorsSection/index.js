import React from 'react';

import FilterButtons from './filterCard';
import {
  Container,
  BoxTitle,
  BoxText,
  RowContainer,
} from './styles';

const TutorsSection = () => (
  <Container id='#tutors'>
    <BoxTitle>
      Our Tutors
    </BoxTitle>
    <BoxText>
      We have more than 100 tutors from various disciplines ready to match with you.
    </BoxText>
    <RowContainer>
      <FilterButtons />
    </RowContainer>
  </Container>
);

export default TutorsSection;
