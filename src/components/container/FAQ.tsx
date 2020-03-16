import React from 'react'
import styled from 'styled-components'
import R from '../resources/R'
import bg_faq_illus from '../../images/faq-section/image/faq-illus.svg'
import IconArrowDownRed from '../../images/faq-section/icon/arrow-down-red.svg'

const IconArrowDownRedCustom = styled(IconArrowDownRed)`
    margin: 0 auto;
`

const Container = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 7.6rem;
`
const ContainerContent = styled.div`
    width: 50%;
    max-width: 48.8rem;
    min-height: 43.4rem;
    display: flex;
    flex-direction: column;
    background: url(${bg_faq_illus});
    background-repeat: no-repeat;
    background-position: top center;
`

const FAQTopic = styled.p`
    font-family: 'Mitr';
    font-size: 4.8rem;
    color: ${R.colors.black_l_40};
    margin: 11.6rem auto 0 auto;
`

const FAQThanks = styled.p`
    font-family: 'Mitr';
    font-size: 2.4rem;
    color: ${R.colors.black_l_60};
    max-height: 5.4rem;
    line-height: 1.8;
    margin: 2.4rem 0 4.2rem 0;
`

const ContainerFAQs = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
`

const FAQ = () => {
    return (
        <Container>
            <ContainerContent>
                <FAQTopic>มีข้อสงสัยหรือพบปัญหา</FAQTopic>
                <FAQThanks>
                    ทีมงาน Logigos พร้อมบริการด้วยหัวใจ
                    ดูแลทุกท่านด้วยความอบอุ่น สอบถามการใช้งานได้ทุกเมื่อ
                </FAQThanks>
                <IconArrowDownRedCustom />
            </ContainerContent>
            <ContainerFAQs />
        </Container>
    )
}

export default FAQ
//
