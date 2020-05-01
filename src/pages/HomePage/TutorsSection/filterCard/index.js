import React, { useState, useEffect } from 'react';

import Button from '../../../../components/Button';
import px2vw from '../../../../helpers/responsive';
import { colors } from '../../../../constants/colors';
import Card from '../../../../components/Card';
import api from '../../../../services/api';

import {
  Container,
  RowContainer,
  FilterContainer,
  FilterButtonsContainer,
  BoxText,
} from '../styles';

const FilterButtons = () => {
  const [ users, setUsers ] = useState([]);
  const [ filteredUsers, setfilteredUsers ] = useState([null]);
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

  const A = users.filter(e => e.city === 'Liverpool');
  const B = users.filter(e => e.city === 'London');
  const C = users.filter(e => e.city === 'Manchester');

  function showA() {
    setfilteredUsers(A);
  }

  function showB() {
    setfilteredUsers(B);
  }

  function showC() {
    setfilteredUsers(C);
  }
  function removeFilter() {
    setfilteredUsers(users);
  }
  return (
    <Container>
      <RowContainer>
        <FilterContainer alignItems='flex-start'>
          <BoxText widthTextCtn={px2vw(140)}>
            Filter by:
          </BoxText>
          <FilterButtonsContainer>
            <Button
              text='Liverpool'
              buttonColor={colors.filteredButton}
              buttonHoverColor={colors.green}
              fontColor={colors.darkColors.lightDarkest}
              fontSize='15px'
              widthStyle='120px'
              onClick={showA}
            />
            <Button
              text='London'
              buttonColor={colors.filteredButton}
              buttonHoverColor={colors.green}
              fontColor={colors.darkColors.lightDarkest}
              fontSize='15px'
              widthStyle='120px'
              onClick={showB}
            />
            <Button
              text='Manchester'
              buttonColor={colors.filteredButton}
              buttonHoverColor={colors.green}
              fontColor={colors.darkColors.lightDarkest}
              fontSize='15px'
              widthStyle='120px'
              onClick={showC}
            />
          </FilterButtonsContainer>
        </FilterContainer>
        <FilterContainer>
          <BoxText widthTextCtn={px2vw(140)}>
            Sort by:
          </BoxText>
          <FilterButtonsContainer>
            <Button
              text='Name'
              buttonColor={colors.filteredButton}
              buttonHoverColor={colors.green}
              fontColor={colors.darkColors.lightDarkest}
              fontSize='15px'
              widthStyle='120px'
            />
            <Button
              text='City'
              buttonColor={colors.filteredButton}
              buttonHoverColor={colors.green}
              fontColor={colors.darkColors.lightDarkest}
              fontSize='15px'
              widthStyle='120px'
            />
          </FilterButtonsContainer>
        </FilterContainer>
        <RowContainer>
          {
            filteredUsers && filteredUsers.map(user => (
              <Card
                userId={user.id}
                userPhoto={user.photo}
                userFirstName={user.first_name}
                userLastName={user.last_name}
                userCity={user.city}
                studentsId={user.students.id}
                studentsPhoto={user.students.photo}
              />
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
