import React, { useState, useEffect } from 'react';

import UserPhoto from '../../../../assets/images/user-photo.jpg';
import Button from '../../../../components/Button';
import Card from '../../../../components/Card';
import api from '../../../../services/api';
import Line from '../../../../components/Line';

import { Filters, sortCity, sortName } from '../../../../helpers/filters';
import { colors } from '../../../../constants/colors';

import {
  Container,
  RowContainer,
  ColumnContainer,
  BoxText,
} from '../styles';

const FilterButtons = () => {
  const [ users, setUsers ] = useState([]);
  const [ buttonColor, setButtonColor ] = useState('Liverpool');
  const [ textColor, setTextColor ] = useState('Liverpool');
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

  function FilterByLiverpool() {
    setfilteredUsers(Liverpool);
    setButtonColor('Liverpool');
    setTextColor('Liverpool');
  }

  function FilterByLondon() {
    setfilteredUsers(London);
    setButtonColor('London');
    setTextColor('London');
  }

  function filterByManchester() {
    setfilteredUsers(Manchester);
    setButtonColor('Manchester');
    setTextColor('Manchester');
  }
  function removeFilter() {
    setfilteredUsers(users);
  }

  function filterByName() {
    setfilteredUsers(sortName(users));
    setButtonColor('Name');
    setTextColor('Name');
  }

  function filterByCity() {
    setfilteredUsers(sortCity(users));
    setButtonColor('City');
    setTextColor('City');
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
            buttonColor={buttonColor === 'Liverpool' ? colors.green : colors.buttonFilterColor}
            buttonHoverColor={colors.green}
            fontColor={textColor === 'Liverpool' ? colors.white : colors.darkColors.lightDarkest}
            fontSize='15px'
            borderButton={`1px solid ${colors.filteredButton}`}
            borderRadius='5px 0px 0px 5px'
            widthStyle='110px'
            heightStyle='33px'
            onClick={FilterByLiverpool}
          />
          <Button
            text='London'
            buttonColor={buttonColor === 'London' ? colors.green : colors.buttonFilterColor}
            buttonHoverColor={colors.green}
            fontColor={textColor === 'London' ? colors.white : colors.darkColors.lightDarkest}
            fontSize='15px'
            borderButton={`1px solid ${colors.filteredButton}`}
            borderRadius='0px'
            widthStyle='110px'
            heightStyle='33px'
            onClick={FilterByLondon}
          />
          <Button
            text='Manchester'
            buttonColor={buttonColor === 'Manchester' ? colors.green : colors.buttonFilterColor}
            buttonHoverColor={colors.green}
            fontColor={textColor === 'Manchester' ? colors.white : colors.darkColors.lightDarkest}
            fontSize='15px'
            borderButton={`1px solid ${colors.filteredButton}`}
            borderRadius='0px 5px 5px 0px'
            widthStyle='110px'
            heightStyle='33px'
            onClick={filterByManchester}
          />
          <BoxText webWidth='80px' tabletWidth='80px'>
            Sort by:
          </BoxText>
          <Button
            text='Name'
            buttonColor={buttonColor === 'Name' ? colors.green : colors.buttonFilterColor}
            buttonHoverColor={colors.green}
            fontColor={textColor === 'Name' ? colors.white : colors.darkColors.lightDarkest}
            fontSize='15px'
            borderButton={`1px solid ${colors.filteredButton}`}
            borderRadius='5px 0px 0px 5px'
            widthStyle='110px'
            heightStyle='33px'
            onClick={() => (filterByName())}
          />
          <Button
            text='City'
            buttonColor={buttonColor === 'City' ? colors.green : colors.buttonFilterColor}
            buttonHoverColor={colors.green}
            fontColor={textColor === 'City' ? colors.white : colors.darkColors.lightDarkest}
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
                  userPhoto={user.photo === [''] ? UserPhoto : user.photo}
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
