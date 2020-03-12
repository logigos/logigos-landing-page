import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';
import R from '../resources/R';

const ButtonRoot = styled.button<MyProps>`
    display: flex;
    background: ${props => props.bg_color};
    color: ${props => props.color};
    width: ${props => props.width};
    height: ${props => props.height};
`;

interface MyProps {
    children?: ReactNode;
    width?: string;
    height?: string;
    color?: string;
    bg_color?: string;
}

const defaultProps: MyProps = {
    color: 'white',
    bg_color: R.colors.base_red,
    width: '27.8ren',
    height: '6.6rem',
};

const Button: FC<MyProps> = ({ color, bg_color, width, height, children }) => {
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

Button.defaultProps = defaultProps;
export default Button;
