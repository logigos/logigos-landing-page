import { createGlobalStyle } from 'styled-components'
import Montserrat_Regular from '../../static/fonts/Montserrat-Regular.ttf'
import Montserrat_ExtraBold from '../../static/fonts/Montserrat-ExtraBold.ttf'
import Mitr from '../../static/fonts/Mitr-Regular.ttf'

export default createGlobalStyle`

  @font-face {
    font-family: 'Mitr';
    src: url(${Mitr});
    font-weight: 400;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url(${Montserrat_Regular});
    font-weight: normal;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url(${Montserrat_ExtraBold});
    font-weight: 800;
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
