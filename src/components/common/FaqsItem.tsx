import React, { FC } from 'react'
import styled, { css } from 'styled-components'
import R from '../resources/R'
import IconArrow from '../../images/faq-section/icon/arrow-down-blue.svg'

const IconArrowCustom = styled(IconArrow)`
    position: absolute;
    top: 2.8rem;
    right: 3.88rem;
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
            <IconArrowCustom />
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

    ${props =>
        props.isExpand
            ? css`
                  max-height: 19.2rem;
                  transition: max-height 300ms ease-out;
              `
            : css`
                  max-height: 7rem;
                  transition: max-height 300ms ease-out;
              `}
`

export default FaqsItem
