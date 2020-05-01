import React, { useState, useEffect } from 'react';

import Button from '../../../../components/Button';
import { colors } from '../../../../constants/colors';
import Card from '../../../../components/Card';
import api from '../../../../services/api';
import Line from '../../../../components/Line';

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

  const Liverpool = users.filter(e => e.city === 'Liverpool');
  const London = users.filter(e => e.city === 'London');
  const Manchester = users.filter(e => e.city === 'Manchester');

  const sortCity = users.sort((a, b) => {
    if (a.city < b.city) {
      return -1;
    }
    if (a.city > b.city) {
      return 1;
    }
    return 0;
  });

  const sortName = users.sort((a, b) => {
    if (a.first_name < b.first_name) {
      return -1;
    }
    if (a.first_name > b.first_name) {
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
          <BoxText textWidth='80px'>
            Filter by:
          </BoxText>
          <Button
            text='Liverpool'
            buttonColor={colors.filteredButton}
            buttonHoverColor={colors.green}
            fontColor={colors.darkColors.lightDarkest}
            fontSize='15px'
            borderRadius='5px 0px 0px 5px'
            widthStyle='110px'
            heightStyle='33px'
            onClick={showA}
          />
          <Button
            text='London'
            buttonColor={colors.filteredButton}
            buttonHoverColor={colors.green}
            fontColor={colors.darkColors.lightDarkest}
            fontSize='15px'
            borderRadius='0px'
            widthStyle='110px'
            heightStyle='33px'
            onClick={showB}
          />
          <Button
            text='Manchester'
            buttonColor={colors.filteredButton}
            buttonHoverColor={colors.green}
            fontColor={colors.darkColors.lightDarkest}
            fontSize='15px'
            borderRadius='0px 5px 5px 0px'
            widthStyle='110px'
            heightStyle='33px'
            onClick={showC}
          />
          <BoxText textWidth='80px'>
            Sort by:
          </BoxText>
          <Button
            text='Name'
            buttonColor={colors.filteredButton}
            buttonHoverColor={colors.green}
            fontColor={colors.darkColors.lightDarkest}
            fontSize='15px'
            borderRadius='5px 0px 0px 5px'
            widthStyle='110px'
            heightStyle='33px'
            onClick={filterByName}
          />
          <Button
            text='City'
            buttonColor={colors.filteredButton}
            buttonHoverColor={colors.green}
            fontColor={colors.darkColors.lightDarkest}
            fontSize='15px'
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
                  userKey={user.id}
                  userPhoto={user.photo}
                  userFirstName={user.first_name}
                  userLastName={user.last_name}
                  userCity={user.city}
                  filteredUsers={users}
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
