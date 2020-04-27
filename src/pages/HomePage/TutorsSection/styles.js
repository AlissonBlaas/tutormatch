import styled from 'styled-components';

import px2vw from '../../../helpers/responsive';
import { colors } from '../../../constants/colors';

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin: ${px2vw(32)};
  height: 80vh;
  flex-direction: column;
`;

export const BoxTitle = styled.p`
  color: ${colors.lightDark};
  font-size: 4em;
  text-align: center;


  @media (min-width: 768px) {
    font-size: 2rem;
  }

  @media (min-width: 992px) {
    font-size: 1.5rem;
    text-align: center;
  }

  @media (min-width: 1024px) {
    font-size: 2rem;
  }
`;

export const BoxText = styled.p`
  color: ${colors.lightDark};
  font-size: 2rem;
  padding-left: ${px2vw(32)};
  padding-right: ${px2vw(20)};
  text-align: center;
  width: ${props => props.widthTextCtn};
  @media (min-width: 768px) {
    font-size: 1.5rem;
    text-align: center;
  }
  
  @media (min-width: 1024px) {
    font-size: 1em;
    text-align: center;
  }
`;

export const FilterContainer = styled.div`
    flex-wrap: nowrap;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center !important;
    width: ${px2vw(470)};
    height: ${px2vw(100)};
    align-items: ${props => props.alignItems};
    padding-top: ${px2vw(60)};

  @media (min-width: 768px) {
    flex-wrap: nowrap;
    display: flex;
    grid-template-columns: 1fr;
    justify-content: center;
    align-items: center;
  }

  @media (min-width: 1024px) {
    flex-wrap: nowrap;
    display: flex;
    grid-template-columns: 1fr;
    justify-content: center;
    align-items: center;
  }`;

export const RowContainer = styled.div`
   flex-wrap: nowrap;
    display: grid;
    grid-template-columns: 1fr;
    width: 100%;
  justify-content: center;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  @media (min-width: 1024px) {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
  }`;

export const FilterButtonsContainer = styled.div`
    flex-wrap: nowrap;
    display: grid;
    grid-template-columns: 1fr;
    justify-content: center;

    @media (min-width: 768px) {
      display: flex;
      align-items: center;
      justify-content: flex-start;
    }

    @media (min-width: 1024px) {
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
    }`;
