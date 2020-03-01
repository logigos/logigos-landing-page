import React from 'react'
import styled from 'styled-components'
import { ContainerFlexRow, ContainerFlexCol } from './Container'

const ContainerHeader = styled(ContainerFlexRow)`
    width: 100%;
`

const ContainerContent = styled(ContainerFlexCol)`
    margin-top: 14.2rem;
    margin-left: 15.6rem;
    background: orange;
`

const Logigos = styled.h1`
    font-family: 'Montserrat';
    font-size: 6.4rem;
    font-weight: 800; /* ExtraBlod */
    color: white;
    margin-bottom: 3.2rem;
`

const Detail = styled.p`
    font-family: 'Mitr';
    width: 48.3rem;
    display: block;
    text-overflow: ellipsis;
    word-wrap: break-word;
    overflow: hidden;
    font-size: 3.2rem;
    max-height: 10rem;
    line-height: 5rem;
`

const Header = () => {
    return (
        <ContainerHeader>
            <ContainerContent>
                <Logigos>Logigos</Logigos>
                <Detail>
                    ค้นหารถบรรทุก งานขนส่งสินค้า
                    <br /> และจัดการระบบขนส่งอย่างมีคุณภาพ
                </Detail>
            </ContainerContent>
        </ContainerHeader>
    )
}

export default Header
