import React from 'react'
import styled from 'styled-components'
import R from '../resources/R'
import { TextSection } from '../common/Text'
import Button from '../common/Button'

const TextIntro = styled.p`
    font-family: 'Mitr';
    font-size: 24px;
    line-height: 1.8;
    color: ${R.colors.black_l_40};
    margin: 5.4rem auto 0 auto;
`
const TextSectionCustom = styled(TextSection)`
    margin: 0 auto;
`

const ContainerButtons = styled.div`
    display: flex;
    justify-content: center;
    margin: 3.6rem auto 5.4rem auto;
`

const CallToAction = () => {
    return (
        <>
            <TextIntro>ให้การค้นหางานและรถบรรทุกเป็นเรื่องง่าย</TextIntro>
            <TextSectionCustom>เริ่มต้นใช้งานทันที</TextSectionCustom>
            <ContainerButtons>
                <Button
                    bg={R.colors.base_blue}
                    hbg={R.colors.base_blue_l_50}
                    abg={R.colors.base_blue_l_35}
                    margin="auto 2.2rem"
                >
                    <a href="#"> ค้นหารถบรรทุก</a>
                </Button>
                <Button
                    bg={R.colors.base_red}
                    hbg={R.colors.base_red_l_75}
                    abg={R.colors.base_red_l_60}
                    margin="auto 2.2rem"
                >
                    <a href="#">ค้นหางานขนส่ง</a>
                </Button>
            </ContainerButtons>
        </>
    )
}

export default CallToAction
