import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  InsideContainer,
  TextStyled,
  TagCity,
  RowContainer,
  ImageStyled,
} from './style';

const Card = ({
  userId,
  userPhoto,
  userFirstName,
  userLastName,
  userCity,
  studentsId,
  studentsPhoto,
}) => (
  <Container key={userId}>
    <InsideContainer src={userPhoto} alt='front' />
    <TextStyled textSize='20px'>
      {`${userFirstName} ${userLastName}`}
    </TextStyled>
    <TextStyled textSize='12px'>
      City
    </TextStyled>
    <TagCity>
      {userCity}
    </TagCity>
    <TextStyled textSize='12px'>
      Students so far
    </TextStyled>
    <RowContainer>
      <ImageStyled
        key={studentsId}
        src={studentsPhoto}
        roundedCircle
        fluid
      />
    </RowContainer>
  </Container>

);

Card.propTypes = {
  userId: PropTypes.string.isRequired,
  userPhoto: PropTypes.string.isRequired,
  userFirstName: PropTypes.string.isRequired,
  userLastName: PropTypes.string.isRequired,
  userCity: PropTypes.string.isRequired,
  studentsId: PropTypes.string.isRequired,
  studentsPhoto: PropTypes.string.isRequired,

};

export default Card;
