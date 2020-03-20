import styled from 'styled-components'
import R from '../resources/R'

export const TextField = styled.input`
    font-family: 'Mitr';
    font-size: 2.4rem;
    width: 38rem;
    height: 4.6rem;
    background: ${R.colors.white};
    border-radius: 8px;
    border-width: 0;
    margin-right: 4.3rem;
    text-indent: 1.8rem;
    color: ${R.colors.black_l_40};
    ::placeholder {
        color: ${R.colors.black_l_90};
        margin-left: 1.8rem;
        line-height: normal;
    }
`
