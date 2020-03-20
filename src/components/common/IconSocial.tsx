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
interface IconSocialType {
    width?: string
    height?: string
}

export const IconFaceBook = styled(IconFaceBookInLine)<IconSocialType>`
    ${IconSocial}
    width: ${props => props.width || '6.6rem'};
    height: ${props => props.height || '6.6rem'};
`

export const IconLine = styled(IconLineInLine)<IconSocialType>`
    ${IconSocial}
    width: ${props => props.width || '6.6rem'};
    height: ${props => props.height || '6.6rem'};
`
