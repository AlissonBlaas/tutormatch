import styled from 'styled-components';

import px2vw from '../../../helpers/responsive';
import { colors } from '../../../constants/colors';

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  flex-direction: column;
`;

export const BoxTitle = styled.p`
  color: ${colors.darkColors.lightDark};
  text-align: center;
  font-size: 30px;
`;

export const BoxText = styled.p`
  color: ${colors.lightDark};
  font-size: 15px;
  text-align: center;
  width: ${props => props.textWidth};
`;

export const FilterContainer = styled.div`
    flex-wrap: nowrap;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center !important;
    width: 100%;
    align-items: ${props => props.alignItems};
    margin-top: ${px2vw(60)};

  @media (max-width: 768px) {
    flex-wrap: nowrap;
    display: flex;
    grid-template-columns: 1fr;
    justify-content: center;
    align-items: center;
    width: ${px2vw(768, 768)};
    height: ${px2vw(100, 768)};
  }

  @media (min-width: 1024px) {
    flex-wrap: nowrap;
    display: flex;
    grid-template-columns: 1fr;
    justify-content: center;
    align-items: center;
  }`;

export const RowContainer = styled.div`
    flex-wrap: wrap;
    display: grid;
    grid-template-columns: 1fr;
    width: 100%;
    justify-content: center;

  

  @media (max-width: 768px) {
    flex-wrap: wrap;
    display: flex;
    width: 100%;
    grid-template-columns: 1fr;
    justify-content: center;
  }

  @media (min-width: 1024px) {
    display: flex;
  }`;

export const FilterButtonsContainer = styled.div`
      flex-wrap: wrap;
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      width: 100%;
`;
