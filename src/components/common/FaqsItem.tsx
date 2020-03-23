import React, { FC, MouseEvent } from 'react'
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

const QText = styled.p<{ expand?: string }>`
    font-family: 'Mitr';

    font-size: 2.4rem;
    color: ${R.colors.black_l_40};
    margin: 1.6rem 0 1rem 0;
    /* width: 46.2rem; */
    width: 84%;
    height: ${props => (props.expand === 'true' ? 'auto' : '3.8rem')};
    text-overflow: ${props =>
        props.expand === 'true' ? 'initial' : 'ellipsis'};
    overflow: ${props => (props.expand === 'true' ? 'visible' : 'hidden')};
    white-space: ${props => (props.expand === 'true' ? 'wrap' : 'nowrap')};
`

const AText = styled.p<{ expand?: string }>`
    width: 55.7rem;
    /* max-height: 10.9rem; */
    font-family: 'Mitr';
    font-size: 2.4rem;
    width: 84%;
    color: ${R.colors.black_l_60};
    /* line-height: 1.8em; */
    margin: 0 0 1.9rem 0;
    /* overflow-y: ${props => (props.expand === 'true' ? 'scroll' : 'visible')};

    ::-webkit-scrollbar {
        -webkit-appearance: none;
        width: 7px;
    }

    ::-webkit-scrollbar-thumb {
        border-radius: 4px;
        background-color: rgba(0, 0, 0, 0.25);
        box-shadow: 0 0 1px rgba(255, 255, 255, 0.25);
    } */
`
export interface FAQType {
    Q: string
    A: string
    expand: boolean
    index: string
    handleOnClick: (e: MouseEvent<HTMLDivElement>, index: string) => void
}

const FaqsItem: FC<FAQType> = ({ Q, A, expand, handleOnClick, index }) => {
    return (
        <ContainerItem onClick={e => handleOnClick(e, index)} isExpand={expand}>
            {expand ? (
                <IconArrowRedCustom expand={expand.toString()} />
            ) : (
                <IconArrowBlueCustom expand={expand.toString()} />
            )}
            <QText expand={expand.toString()}>{Q}</QText>
            <AText expand={expand.toString()}>{A}</AText>
        </ContainerItem>
    )
}

const ContainerItem = styled.div<{ isExpand: boolean }>`
    position: relative;
    width: 90%;
    /* height: 7rem; */
    /* min-width: 66.7rem; */
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
                  max-height: 19rem;
              `
            : css`
                  max-height: 7rem;
              `}
`

export default FaqsItem
