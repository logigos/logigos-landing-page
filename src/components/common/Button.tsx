import React, { FC, ReactNode } from 'react'
import styled from 'styled-components'

const ButtonRoot = styled.button<Props>`
    appearance: none;
    /* browser not support yet */

    cursor: pointer;
    display: flex;
    justify-content: center;
    font-family: 'Mitr';
    line-height: 1.8;
    border-radius: 0.8rem;
    border-width: 0;
    margin: ${props => props.margin || '1rem 2.2rem'};
    font-size: ${props => props.font_size || '3.6rem'};
    background: ${props => props.bg || 'white'};
    color: ${props => props.color || 'white'};
    width: ${props => props.width || '27.8rem'};
    height: ${props => props.height || '6.6rem'};

    &:hover {
        background: ${props => props.hbg || 'white'};
        color: ${props => props.hcolor || 'white'};
    }

    &:active {
        background: ${props => props.abg || 'white'};
        color: ${props => props.acolor || 'white'};
    }
`

interface Props {
    children?: ReactNode
    width?: string
    height?: string
    color?: string
    bg?: string
    font_size?: string
    margin?: string
    hcolor?: string
    hbg?: string
    acolor?: string
    abg?: string
}

const Button: FC<Props> = ({ children, ...props }) => {
    return <ButtonRoot {...props}>{children}</ButtonRoot>
}

export default Button
