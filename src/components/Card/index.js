import React from 'react';
import PropTypes from 'prop-types';

import UserPhoto from '../../assets/images/user-photo.jpg';
import {
  Container,
  InsideContainer,
  TextStyled,
  TagCity,
  RowContainer,
  ImageStyled,
} from './style';

const Card = ({
  userKey,
  userPhoto,
  userFirstName,
  userLastName,
  userCity,
}) => (
  <Container key={userKey}>
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
        src={UserPhoto}
        roundedCircle
        fluid
      />
      <ImageStyled
        src={UserPhoto}
        roundedCircle
        fluid
      />
      <ImageStyled
        src={UserPhoto}
        roundedCircle
        fluid
      />
      <ImageStyled
        src={UserPhoto}
        roundedCircle
        fluid
      />
    </RowContainer>

  </Container>

);

Card.propTypes = {
  userKey: PropTypes.number.isRequired,
  userPhoto: PropTypes.string.isRequired,
  userFirstName: PropTypes.string.isRequired,
  userLastName: PropTypes.string.isRequired,
  userCity: PropTypes.string.isRequired,
};

export default Card;
