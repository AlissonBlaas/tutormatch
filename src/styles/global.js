import { createGlobalStyle } from 'styled-components';
import px2vw from '../helpers/responsive';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :root {
    font-size: ${px2vw(24)};

    @media (min-width: 768px) {
      font-size: ${px2vw(18)};
    }

    @media (min-width: 1024px) {
      font-size: ${px2vw(16)};
    }
  }
  @font-face {
    font-family: 'Avenir';
    src: url('../assets/fonts/Avenir.ttc') format('truetype');
    font-weight: normal;
    font-style: normal;
  }
`;

export default GlobalStyles;
