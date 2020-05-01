import React from 'react';
import PropTypes from 'prop-types';

import UserPhoto from '../../assets/images/user-photo.jpg';
import {
  Container,
  StyledImage,
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
  <div key={userKey}>
    <StyledImage src={userPhoto} alt='front' />
    <Container>

      <TextStyled textSize='15px'>
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
  </div>

);

Card.propTypes = {
  userKey: PropTypes.number.isRequired,
  userPhoto: PropTypes.string.isRequired,
  userFirstName: PropTypes.string.isRequired,
  userLastName: PropTypes.string.isRequired,
  userCity: PropTypes.string.isRequired,
};

export default Card;
