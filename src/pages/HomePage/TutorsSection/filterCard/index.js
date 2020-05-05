import React, { useState, useEffect } from 'react';

import UserPhoto from '../../../../assets/images/user-photo.jpg';
import Button from '../../../../components/Button';
import Card from '../../../../components/Card';
import api from '../../../../services/api';
import Line from '../../../../components/Line';

import { Filters } from '../../../../helpers/filters';
import { colors } from '../../../../constants/colors';

import {
  Container,
  RowContainer,
  ColumnContainer,
  BoxText,
} from '../styles';

const FilterButtons = () => {
  const [ users, setUsers ] = useState([]);
  const [ filteredUsers, setfilteredUsers ] = useState([]);
  const [ loading, setLoading ] = useState(false);

  useEffect(() => {
    async function loadUsers() {
      const response = await api.get('users');

      setUsers(response.data);
      setfilteredUsers(response.data.filter(user => user.city === 'Liverpool'));
      setLoading(true);
    }
    loadUsers();
  }, []);

  if (!loading) {
    return ('Loading...');
  }

  const Liverpool = Filters(users, 'Liverpool');
  const London = Filters(users, 'London');
  const Manchester = Filters(users, 'Manchester');

  const sortName = [...users].sort((a, b) => {
    if (a.first_name < b.first_name) {
      return -1;
    }
    if (a.first_name > b.first_name) {
      return 1;
    }
    return 0;
  });
  const sortCity = [...users].sort((a, b) => {
    if (a.city < b.city) {
      return -1;
    }
    if (a.city > b.city) {
      return 1;
    }
    return 0;
  });

  function showA() {
    setfilteredUsers(Liverpool);
  }

  function showB() {
    setfilteredUsers(London);
  }

  function showC() {
    setfilteredUsers(Manchester);
  }
  function removeFilter() {
    setfilteredUsers(users);
  }

  function filterByName() {
    setfilteredUsers(sortName);
  }

  function filterByCity() {
    setfilteredUsers(sortCity);
  }

  return (
    <Container>
      <RowContainer>
        <ColumnContainer>
          <BoxText webWidth='80px' tabletWidth='80px'>
            Filter by:
          </BoxText>
          <Button
            text='Liverpool'
            buttonColor={setfilteredUsers.city === 'Liverpool' ? colors.green : colors.buttonFilterColor}
            buttonHoverColor={colors.green}
            fontColor={colors.darkColors.lightDarkest}
            fontSize='15px'
            borderButton={`1px solid ${colors.filteredButton}`}
            borderRadius='5px 0px 0px 5px'
            widthStyle='110px'
            heightStyle='33px'
            onClick={showA}
          />
          <Button
            text='London'
            buttonColor={colors.buttonFilterColor}
            buttonHoverColor={colors.green}
            fontColor={colors.darkColors.lightDarkest}
            fontSize='15px'
            borderButton={`1px solid ${colors.filteredButton}`}
            borderRadius='0px'
            widthStyle='110px'
            heightStyle='33px'
            onClick={showB}
          />
          <Button
            text='Manchester'
            buttonColor={colors.buttonFilterColor}
            buttonHoverColor={colors.green}
            fontColor={colors.darkColors.lightDarkest}
            fontSize='15px'
            borderButton={`1px solid ${colors.filteredButton}`}
            borderRadius='0px 5px 5px 0px'
            widthStyle='110px'
            heightStyle='33px'
            onClick={showC}
          />
          <BoxText webWidth='80px' tabletWidth='80px'>
            Sort by:
          </BoxText>
          <Button
            text='Name'
            buttonColor={colors.buttonFilterColor}
            buttonHoverColor={colors.green}
            fontColor={colors.darkColors.lightDarkest}
            fontSize='15px'
            borderButton={`1px solid ${colors.filteredButton}`}
            borderRadius='5px 0px 0px 5px'
            widthStyle='110px'
            heightStyle='33px'
            onClick={() => (filterByName())}
          />
          <Button
            text='City'
            buttonColor={colors.buttonFilterColor}
            buttonHoverColor={colors.green}
            fontColor={colors.darkColors.lightDarkest}
            fontSize='15px'
            borderButton={`1px solid ${colors.filteredButton}`}
            borderRadius='0px 5px 5px 0px'
            widthStyle='110px'
            heightStyle='33px'
            onClick={filterByCity}
          />
        </ColumnContainer>

        <Line />
        <RowContainer>
          {
            filteredUsers && filteredUsers.map(user => (
              <div key={user.id}>
                <Card
                  userPhoto={user.photo === 'unknown' ? UserPhoto : user.photo}
                  userFirstName={user.first_name}
                  userLastName={user.last_name}
                  userCity={user.city}
                  filteredUsers={user}
                />
              </div>
            ))
          }
        </RowContainer>

      </RowContainer>
      <Button
        text='See all Tutors'
        buttonColor={colors.filteredButton}
        buttonHoverColor={colors.green}
        fontColor={colors.darkColors.lightDarkest}
        fontSize='20px'
        widthStyle='200px'
        heightStyle='50px'
        margin='20px'
        onClick={removeFilter}
      />
    </Container>
  );
};

export default FilterButtons;
