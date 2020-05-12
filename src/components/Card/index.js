import React from 'react';
import PropTypes from 'prop-types';

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
  filteredUsers,
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
        {
          filteredUsers.students.map(students => (
            filteredUsers.students === []
              ? (
                <div>
                  <TextStyled textSize='12px'>This tutors dont have students yet</TextStyled>
                </div>
              )

              : (
                <div key={students.id}>
                  <ImageStyled
                    src={students.photo}
                    roundedCircle
                    fluid
                  />
                </div>
              )
          ))
        }
      </RowContainer>

    </Container>
  </div>

);

Card.propTypes = {
  // eslint-disable-next-line react/require-default-props
  userKey: PropTypes.string,
  userPhoto: PropTypes.string.isRequired,
  userFirstName: PropTypes.string.isRequired,
  userLastName: PropTypes.string.isRequired,
  userCity: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  filteredUsers: PropTypes.object.isRequired,
};

export default Card;
