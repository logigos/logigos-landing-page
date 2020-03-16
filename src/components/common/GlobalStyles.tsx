import { createGlobalStyle } from 'styled-components'
import Montserrat_Regular from '../../static/fonts/Montserrat-Regular.ttf'
import Montserrat_ExtraBold from '../../static/fonts/Montserrat-ExtraBold.ttf'
import Mitr_Regular from '../../static/fonts/Mitr-Regular.ttf'
import Mitr_Medium from '../../static/fonts/Mitr-Medium.ttf'
import Mitr_Light from '../../static/fonts/Mitr-Light.ttf'

export default createGlobalStyle`

  /* 
  Name	Weight
  Thin, Hairline	100
  Extra Light, Ultra Light	200
  Light	300
  Normal, Regular	400
  Medium	500
  Semi Bold, Demi Bold	600
  Bold	700
  Extra Bold, Ultra Bold	800
  Black, Heavy	900 
  */
  
 @font-face {
    font-family: 'Mitr';
    src: url(${Mitr_Light});
    font-weight: 300;
  }

  @font-face {
    font-family: 'Mitr';
    src: url(${Mitr_Regular});
    font-weight: 400;
  }

  @font-face {
    font-family: 'Mitr';
    src: url(${Mitr_Medium});
    font-weight: 500;
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
