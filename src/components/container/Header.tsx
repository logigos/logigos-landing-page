import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import Button from '../common/Button'
import { Headerflexrow, Conflexcol } from '../common/Container'
import gradient_wave from '../../images/header-section/image/gradient-wave.svg'
import bg_image from '../../images/header-section/image/bg-image.png'
import R from '../resources/R'

const Root = styled(Headerflexrow)`
    width: 100%;
    height: 100vh;
    background-image: url(${bg_image}), url(${gradient_wave});
    background-size: contain;
    background-repeat: no-repeat;
    justify-content: center;
`

const ContainerContent = styled(Conflexcol)`
    margin-top: 12rem;
`

const Logigos = styled.h1`
    color: white;
    font-family: 'Montserrat';
    font-size: 64px;
    font-weight: 800;
    line-height: 7.8rem;
    margin-bottom: 3.2rem;
    text-align: center;
`

const Detail = styled.p`
    color: white;
    font-family: 'Mitr';
    font-weight: 400;
    font-size: 32px;
    line-height: 1.8;
    text-align: center;
    margin: 0;
`

const ContainerButtons = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 4.8rem;
`

const Header: FunctionComponent = () => {
    return (
        <Root>
            <ContainerContent>
                <Logigos>Logigos</Logigos>
                <Detail>
                    ค้นหารถบรรทุก งานขนส่งสินค้า
                    <br />
                    และจัดการระบบขนส่งอย่างมีคุณภาพ
                </Detail>
                <ContainerButtons>
                    <Button color={R.colors.base_blue} hbg={R.colors.base_blue}>
                        ค้นหารถบรรทุก
                    </Button>
                    <Button color={R.colors.base_red} hbg={R.colors.base_red}>
                        ค้นหางานขนส่ง
                    </Button>
                </ContainerButtons>
            </ContainerContent>
        </Root>
    )
}

export default Header
