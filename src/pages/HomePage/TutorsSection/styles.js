import styled from 'styled-components';

import { colors } from '../../../constants/colors';

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  flex-direction: column;
  margin-top: 40px;
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
  
  @media (min-width: 768px) {
    text-align: center;
    width: ${props => props.tabletWidth};
  }

  @media (min-width: 1024px) {
    width: ${props => props.webWidth};
  }
`;

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
    width: 100%;
    flex-direction: row;
    grid-template-columns: 1fr;
    justify-content: center;
  }`;

export const ColumnContainer = styled.div`
  
  @media (min-width: 768px) and (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media (min-width: 1024px) {
    display: flex;
    width: 100%;
    flex-direction: row;
    grid-template-columns: 1fr;
    justify-content: flex-start;
  }
  `;
