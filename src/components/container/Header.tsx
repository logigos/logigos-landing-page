import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import Button from '../common/Button'
import GradientWave from '../../images/header-section/image/gradient-wave.svg'
import bg_image from '../../images/header-section/image/bg-image.png'
import R from '../resources/R'

const Root = styled.header`
    display: flex;
    width: 100%;
    height: 90vh;
    background-image: url(${bg_image}), url(${GradientWave});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top center;
    justify-content: center;
    align-items: center;
`

const ContainerContent = styled.div`
    display: flex;
    flex-direction: column;
`

const Logigos = styled.h1`
    color: white;
    font-family: 'Montserrat';
    font-size: 64px;
    font-weight: 800;
    line-height: 7.8rem;
    margin: 0 0 3.2rem 0;
    text-align: center;
`

const Detail = styled.p`
    color: white;
    font-family: 'Mitr';
    font-weight: 300;
    font-size: 32px;
    line-height: 1.8;
    text-align: center;
    margin: 0;
`

const ContainerButtons = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 4.8rem;

    ${media.lessThan('medium')`
        flex-direction: column;
        align-items: center;
    `};
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
                    <Button
                        color={R.colors.base_blue}
                        hbg={R.colors.base_blue_l_50}
                        abg={R.colors.base_blue_l_35}
                        hcolor="white"
                    >
                        ค้นหารถบรรทุก
                    </Button>
                    <Button
                        color={R.colors.base_red}
                        hbg={R.colors.base_red_l_75}
                        abg={R.colors.base_red_l_60}
                        hcolor="white"
                    >
                        ค้นหางานขนส่ง
                    </Button>
                </ContainerButtons>
            </ContainerContent>
        </Root>
    )
}

export default Header
