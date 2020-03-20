import styled, { css } from 'styled-components'
import R from '../resources/R'
import IconFaceBookInLine from '../../images/contact-section/icon/facebook.svg'
import IconLineInLine from '../../images/contact-section/icon/line.svg'

const IconSocial = css`
    cursor: pointer;
    margin: auto 0 auto 4.3rem;
    box-sizing: border-box;
    border-radius: 50%;
    border: 5px solid transparent;

    &:hover {
        border-color: ${R.colors.base_red_l_75};
    }
    &:active {
        border-color: ${R.colors.base_red_l_60};
    }
`

export const IconFaceBook = styled(IconFaceBookInLine)`
    ${IconSocial}
`

export const IconLine = styled(IconLineInLine)`
    ${IconSocial}
`
