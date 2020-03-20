import React from 'react'
import styled from 'styled-components'
import R from '../resources/R'
import IconLogigos from '../../images/footer-section/icon/logo.svg'
import { TextSectionWhite } from '../common/Text'
import { LineEmail, LineTell } from '../common/InLineSocial'
import { IconFaceBook, IconLine } from '../common/IconSocial'

const TextSectionWhiteCustom = styled(TextSectionWhite)`
    font-size: 3.6rem;
`
const ContainerFooter = styled.footer`
    display: flex;
    justify-content: center;
    background: ${R.colors.black_l_40};
    width: 100vw;
    height: 44.2rem;
`

const WrapLeft = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
    padding-left: 11.4rem;
`

const WrapRight = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const TextLogigos = styled.p`
    font-family: 'Montserrat';
    font-size: 36px;
    font-weight: 800;
    color: ${R.colors.white};
    margin: 5.8rem 0 1.6rem 0;
`

const TextVision = styled.p`
    font-family: 'Mitr';
    font-size: 2.4rem;
    line-height: 1.8;
    color: ${R.colors.white};
    margin: 0;
`

const WrapSocialIcons = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Footer = () => {
    return (
        <ContainerFooter>
            <WrapLeft>
                <IconLogigos />
                <TextLogigos>Logigos</TextLogigos>
                <TextVision>
                    ถ้าหนอนตื่นสาย
                    <br />
                    นกก็จะไม่ได้กินหนอน
                </TextVision>
            </WrapLeft>
            <WrapRight>
                <div>
                    <TextSectionWhiteCustom>ติดต่อเรา</TextSectionWhiteCustom>
                    <LineTell />
                    <LineEmail width="4rem" height="4rem" margin="1.6rem 0" />
                    <WrapSocialIcons>
                        <IconFaceBook width="6rem" height="6rem" />
                        <IconLine width="6rem" height="6rem" />
                    </WrapSocialIcons>
                </div>
            </WrapRight>
        </ContainerFooter>
    )
}

export default Footer
