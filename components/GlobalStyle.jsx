import {  createGlobalStyle } from 'styled-components';
import Schwifty from '/fonts/get_schwifty.ttf';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Schwifty';
    src: url(${Schwifty});
  }
`

export default GlobalStyle;