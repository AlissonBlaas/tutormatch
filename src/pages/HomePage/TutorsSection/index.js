import React from 'react';

import Button from '../../../components/Button';
import { colors } from '../../../constants/colors';
import px2vw from '../../../helpers/responsive';

import {
  Container,
  BoxTitle,
  BoxText,
  FilterContainer,
  RowContainer,
} from './styles';

const TutorsSection = () => (
  <Container>
    <BoxTitle>
      Our Tutors
    </BoxTitle>
    <BoxText>
      We have more than 100 tutors from various disciplines ready to match with you.
    </BoxText>
    <RowContainer>
      <FilterContainer alignItems='flex-start'>
        <BoxText widthTextCtn={px2vw(140)}>
          Filter by:
        </BoxText>
        <RowContainer>
          <Button
            text='Liverpool'
            buttonColor={colors.filteredButton}
            buttonHoverColor={colors.greenButtonHover}
            fontColor={colors.darkColors.lightDarkest}
            widthStyle='7rem'
          />
          <Button
            text='London'
            buttonColor={colors.filteredButton}
            buttonHoverColor={colors.greenButtonHover}
            fontColor={colors.darkColors.lightDarkest}
            widthStyle='7rem'
          />
          <Button
            text='Manchester'
            buttonColor={colors.filteredButton}
            buttonHoverColor={colors.greenButtonHover}
            fontColor={colors.darkColors.lightDarkest}
            widthStyle='7rem'
          />
        </RowContainer>
      </FilterContainer>
      <FilterContainer>
        <BoxText widthTextCtn={px2vw(140)}>
          Sort by:
        </BoxText>
        <RowContainer>
          <Button
            text='Name'
            buttonColor={colors.filteredButton}
            buttonHoverColor={colors.greenButtonHover}
            fontColor={colors.darkColors.lightDarkest}
            widthStyle='7rem'
          />
          <Button
            text='City'
            buttonColor={colors.filteredButton}
            buttonHoverColor={colors.greenButtonHover}
            fontColor={colors.darkColors.lightDarkest}
            widthStyle='7rem'
          />
        </RowContainer>
      </FilterContainer>
    </RowContainer>
  </Container>
);

export default TutorsSection;
