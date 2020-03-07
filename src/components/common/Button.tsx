import React, { ReactNode, ReactChild, FunctionComponent } from 'react'
import styled from 'styled-components'
import R from '../resources/R'

interface MyProps {
    width: string
    height: string
    color: string
    bg_color: string
    children: ReactNode
}

// interface Btn {
//     width: string
//     color: string
//     bg_color: string
//     height: string
// }

const ButtonRoot = styled.button<MyProps>`
    display: flex;
    background: ${props => props.bg_color};
    color: ${props => props.color};
    width: ${props => props.width};
    height: ${props => props.height};
`

const Button: FunctionComponent<MyProps> = ({
    color = 'white',
    bg_color = R.colors.base_red,
    width = '27.8ren',
    height = '6.6rem',
    children,
}) => {
    return (
        <ButtonRoot
            bg_color={bg_color}
            color={color}
            width={width}
            height={height}
        >
            {children}
        </ButtonRoot>
    )
}

export default Button
