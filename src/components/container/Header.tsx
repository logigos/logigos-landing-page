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
    height: 100vh;
    background-image: url(${bg_image}), url(${GradientWave});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top center, top center;
    justify-content: center;
    align-items: center;
    /* height: 400px; */
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

    ${media.lessThan('medium')`
        font-size: 4.8rem;
        margin: 0 0 2.4rem 0;
    `}
`

const Detail = styled.p`
    color: white;
    font-family: 'Mitr';
    font-weight: 400;
    font-size: 32px;
    line-height: 1.8;
    text-align: center;
    margin: 0;
    ${media.lessThan('small')`
        font-size: 1.8rem;
    `}
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

const ButtonCustom = styled(Button)`
    ${media.lessThan('medium')`
            margin: 3.2rem 2.2rem 1.2rem 2.2rem;
    `}
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
                    <ButtonCustom
                        color={R.colors.base_blue}
                        hbg={R.colors.base_blue_l_50}
                        abg={R.colors.base_blue_l_35}
                        hcolor="white"
                    >
                        ค้นหารถบรรทุก
                    </ButtonCustom>
                    <ButtonCustom
                        color={R.colors.base_red}
                        hbg={R.colors.base_red_l_75}
                        abg={R.colors.base_red_l_60}
                        hcolor="white"
                    >
                        ค้นหางานขนส่ง
                    </ButtonCustom>
                </ContainerButtons>
            </ContainerContent>
        </Root>
    )
}

export default Header
