import React, { FC, ReactNode, Props } from 'react';
import styled from 'styled-components';
import R from '../resources/R';

const ButtonRoot = styled.button<Props>`
    display: flex;
    background: ${props => props.bg_color};
    color: ${props => props.color};
    width: ${props => props.width};
    height: ${props => props.height};
`;

interface Props {
    children?: ReactNode;
    width?: string;
    height?: string;
    color?: string;
    bg_color?: string;
}

const Button: FC<Props> = ({
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
    );
};

export default Button;
