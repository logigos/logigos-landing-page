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
    padding: 0;

    border-width: ${props => props.border_width || '0'};
    border-color: ${props => props.border_color || 'white'};
    border-radius: ${props => props.border_radius || '0.8rem'};
    border: ${props => props.border || null};
    margin: ${props => props.margin || '1rem 2.2rem'};
    font-size: ${props => props.font_size || '3.6rem'};
    background: ${props => props.bg || 'white'};
    color: ${props => props.color || 'white'};
    width: ${props => props.width || '27.8rem'};
    height: ${props => props.height || '6.6rem'};

    &:hover {
        background: ${props => props.hbg || 'white'};
        color: ${props => props.hcolor || props.color || 'white'};
        border: ${props => props.hborder || null};
    }

    &:active {
        background: ${props => props.abg || 'white'};
        color: ${props =>
            props.acolor || props.hcolor || props.color || 'white'};
        border: ${props => props.aborder || null};
    }

    & a {
        text-decoration: none;
        color: currentColor;
    }
`

interface Props {
    children?: ReactNode
    width?: string
    height?: string
    font_size?: string
    margin?: string
    color?: string
    hcolor?: string
    acolor?: string
    bg?: string
    hbg?: string
    abg?: string
    border_radius?: string
    border_width?: string
    border_color?: string
    border?: string
    aborder?: string
    hborder?: string
}

const Button: FC<Props> = ({ children, ...props }) => {
    return <ButtonRoot {...props}>{children}</ButtonRoot>
}

export default Button
