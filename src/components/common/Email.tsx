import React from 'react'
import styled from 'styled-components'
import R from '../resources/R'
import { TextSectionA } from './Text'
import IconEMail from '../../images/contact-section/icon/email.svg'

const WrapEmail = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
`

const IconEMailCustom = styled(IconEMail)`
    ${WrapEmail}:hover & {
        path {
            fill: ${R.colors.base_red_l_75};
        }
    }

    ${WrapEmail}:active & {
        path {
            fill: ${R.colors.base_red_l_60};
        }
    }
`

const TextEmail = styled(TextSectionA)`
    font-size: 2.4rem;
    color: ${R.colors.white};
    font-weight: 400;
    margin: auto 0 auto 1.6rem;
    height: 4rem;
    box-sizing: border-box;

    ${WrapEmail}:hover & {
        border-bottom: 0.3rem solid ${R.colors.base_red_l_75};
    }
    ${WrapEmail}:active & {
        border-bottom: 0.3rem solid ${R.colors.base_red_l_60};
    }
`

const Email = () => {
    return (
        <WrapEmail>
            <IconEMailCustom />
            <TextEmail
                href="mailto:logigos.official@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
            >
                logigos.official@gmail.com
            </TextEmail>
        </WrapEmail>
    )
}
export default Email
