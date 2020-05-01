import styled from 'styled-components';
import px2vw from '../../../helpers/responsive';
import { colors } from '../../../constants/colors';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60vh;
  width: 100%;
  flex-direction: column;
  background-color: ${colors.lightGray};
`;

export const BoxTitle = styled.p`
  color: ${colors.darkColors.lightDark};
  text-align: center;
  font-size: 30px;
`;

export const BoxText = styled.p`
  color: ${colors.lightDark};
  text-align: center;
  font-size: 15px;
  padding-left: ${px2vw(32)};
  padding-right: ${px2vw(20)};
`;
