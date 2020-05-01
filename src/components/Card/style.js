import styled from 'styled-components';
import { Image } from 'react-bootstrap';
import px2vw from '../../helpers/responsive';
import { colors } from '../../constants/colors';

export const Container = styled.li`
  flex-wrap: wrap;
  display: flex;
  width: 250px;
  flex-direction: column;
  background-color: ${colors.cardInfos};
  margin: 15px;
  padding: 15px;
  border-radius: 5px;

`;

export const InsideContainer = styled.img`
  width: 100%;
  height:  150px;
  justify-content: center;
  border-radius: 5px;
  background-color: ${colors.lighCardInfo};
`;

export const TextStyled = styled.p`
    font-size: ${props => props.textSize};
    margin: 5px;
    padding: 0;
`;

export const TagCity = styled.div`
    width: 60px;
    height: 20px;
    font-size: 10px;
    justify-content: center;
    display: flex;
    background-color: ${colors.white};
    border-radius: 5px;
    margin-bottom: 20px;
`;

export const ImageStyled = styled(Image)`
    margin-right: 10px;
    width: 25px;
    height: 25px;
    background-color: ${colors.white};
`;

export const BoxText = styled.p`
  color: ${colors.lightDark};
  text-align: center;
  font-size: 2.5rem;
  padding-left: ${px2vw(32)};
  padding-right: ${px2vw(20)};

  @media (min-width: 768px) {
    text-align: center;
    font-size: 1rem;
  }
  
  @media (min-width: 1024px) {
    text-align: center;
    font-size: 1rem;
  }
`;

export const RowContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
  `;
