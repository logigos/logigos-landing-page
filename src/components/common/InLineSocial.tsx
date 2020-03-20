import React, { FC } from 'react'
import styled, { css } from 'styled-components'
import R from '../resources/R'
import { TextSectionA } from './Text'
import IconEMail from '../../images/contact-section/icon/email.svg'
import IconTell from '../../images/footer-section/icon/tel.svg'

const Wrap = styled.div<{ margin?: string }>`
    cursor: pointer;
    display: flex;
    align-items: center;
    margin: ${props => props.margin || '0'};
`

const RulesIconSocial = css`
    ${Wrap}:hover & {
        path {
            fill: ${R.colors.base_red_l_75};
        }
    }

    ${Wrap}:active & {
        path {
            fill: ${R.colors.base_red_l_60};
        }
    }
`

const IconEMailCustom = styled(IconEMail)`
    ${RulesIconSocial}
`

const IconTellCustom = styled(IconTell)`
    ${RulesIconSocial}
`

const TextLine = styled(TextSectionA)`
    cursor: pointer;
    font-family: 'Mitr';
    font-size: 2.4rem;
    color: ${R.colors.white};
    font-weight: 400;
    margin: auto 0 auto 1.6rem;
    height: 4rem;
    box-sizing: border-box;

    ${Wrap}:hover & {
        border-bottom: 0.3rem solid ${R.colors.base_red_l_75};
    }
    ${Wrap}:active & {
        border-bottom: 0.3rem solid ${R.colors.base_red_l_60};
    }
`

interface IconSocialType {
    width?: string
    height?: string
    margin?: string
}

export const LineEmail: FC<IconSocialType> = props => {
    return (
        <Wrap margin={props.margin}>
            <IconEMailCustom width={props.width} height={props.height} />
            <TextLine
                href="mailto:logigos.official@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
            >
                logigos.official@gmail.com
            </TextLine>
        </Wrap>
    )
}

export const LineTell = () => {
    return (
        <Wrap>
            <IconTellCustom />
            <TextLine href="tel:0873370808">00 000 0000</TextLine>
        </Wrap>
    )
}
