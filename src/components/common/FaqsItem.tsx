import React, { FC } from 'react'
import styled, { css } from 'styled-components'
import R from '../resources/R'
import IconArrowBlue from '../../images/faq-section/icon/arrow-down-blue.svg'
import IconArrowRed from '../../images/faq-section/icon/arrow-up.svg'
import { SpinForward, SpinBackword } from '../utility/Keyframe'

const IconArrowRedCustom = styled(IconArrowRed)`
    position: absolute;
    right: 3.88rem;
    bottom: 2.3rem;
    animation: ${props =>
        props.expand === 'true'
            ? css`
                  ${SpinForward} 450ms ease-in-out
              `
            : null};
`

const IconArrowBlueCustom = styled(IconArrowBlue)`
    position: absolute;
    right: 3.88rem;
    top: 2.8rem;
    animation: ${props =>
        props.expand === 'false'
            ? css`
                  ${SpinBackword} 450ms ease-in-out
              `
            : null};
`

const QText = styled.p`
    font-family: 'Mitr';
    height: 3.8rem;
    font-size: 2.4rem;
    color: ${R.colors.black_l_40};
    margin: 1.6rem 0 1rem 0;
`

const AText = styled.p`
    width: 55.7rem;
    max-height: 10.9rem;
    font-family: 'Mitr';
    font-size: 2.4rem;
    color: ${R.colors.black_l_60};
    /* line-height: 1.8em; */
    margin: 0 0 1.9rem 0;
`
export interface FAQType {
    Q: string
    A: string
    expand: boolean
    handleOnClick: () => void
}

const FaqsItem: FC<FAQType> = ({ Q, A, expand, handleOnClick }) => {
    return (
        <ContainerItem onClick={() => handleOnClick()} isExpand={expand}>
            {expand ? (
                <IconArrowRedCustom expand={expand.toString()} />
            ) : (
                <IconArrowBlueCustom expand={expand.toString()} />
            )}
            <QText>{Q}</QText>
            <AText>{A}</AText>
        </ContainerItem>
    )
}

const ContainerItem = styled.div<{ isExpand: boolean }>`
    position: relative;
    width: 100%;
    /* height: 7rem; */
    max-height: 7rem;
    margin: 0.6rem 0;
    overflow: hidden;
    border-radius: 8px;
    background: ${R.colors.base_blue_l_96};
    padding-left: 3.6rem;
    cursor: pointer;
    transition: max-height 300ms ease-out;

    ${props =>
        props.isExpand
            ? css`
                  max-height: 19.2rem;
              `
            : css`
                  max-height: 7rem;
              `}
`

export default FaqsItem
