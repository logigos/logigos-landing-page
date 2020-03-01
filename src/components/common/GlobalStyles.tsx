import { createGlobalStyle } from 'styled-components'
import Montserrat from '../../static/fonts/Montserrat-Regular.ttf'
import Mitr from '../../static/fonts/Mitr-Regular.ttf'

export default createGlobalStyle`

  @font-face {
    font-family: 'Mitr';
    src: url(${Mitr});
  }

  @font-face {
    font-family: 'Montserrat';
    src: url(${Montserrat});
  }
  
  
  html {
    font-size: 62.5%;
  }

  body{
    margin: 0;
    font-family: 'Mitr';
    font-size: 1.6rem; /* 16px */
  }
`
