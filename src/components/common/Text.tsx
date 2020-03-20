import styled, { css } from 'styled-components'
import R from '../resources/R'

const TextStyle = css`
    font-family: 'Mitr';
    font-size: 4.8rem;
    font-weight: 500;
    line-height: 1.8;
    letter-spacing: normal;
    color: ${R.colors.black_l_20};
    margin: 0;
`

export const TextSection = styled.h1`
    ${TextStyle}
`

export const TextSectionWhite = styled.h1`
    ${TextStyle}
    color: ${R.colors.white};
`

export const TextSectionA = styled.a`
    ${TextStyle}
    text-decoration: none;
`
