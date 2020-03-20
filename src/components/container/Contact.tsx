import React from 'react'
import styled from 'styled-components'
import img_contact from '../../images/contact-section/image/contact-illus.svg'
import { TextSection } from '../common/Text'
import R from '../resources/R'
import Button from '../common/Button'
import Email from '../common/Email'
import { IconFaceBook, IconLine } from '../common/IconSocial'
import { TextField } from '../common/TextField'

const TextSectionCustom = styled(TextSection)`
    color: ${R.colors.white};
`
const Container = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background: ${R.colors.base_blue};
    padding: 6.4rem 0;
`

const ImageContactLeft = styled.img`
    width: 48.2rem;
    height: 42.5rem;
    margin: auto;
`

const ContainerContact = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
`

const CardTell = styled.div`
    width: 57.2rem;
    height: 10.8rem;
    background: ${R.colors.white};
    border-radius: 8px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin: 2.6rem 0 5.2rem 0;
`

const TextTell = styled.p`
    font-family: 'Mitr';
    font-size: 2.4rem;
    color: ${R.colors.black_l_40};
    margin-left: 3.6rem;
`

const TextSubScribe = styled(TextTell)`
    color: ${R.colors.white};
    margin: 0;
`

const FormSubScribe = styled.form`
    display: flex;
    width: 57.2rem;
    align-items: center;
    margin-top: 0.9rem;
`

const ContainerSocial = styled.div`
    display: flex;
    align-items: center;
    margin-top: 4.3rem;
`

const Contact = () => {
    return (
        <Container>
            <ImageContactLeft src={img_contact} />
            <ContainerContact>
                <TextSectionCustom>ติดต่อเรา</TextSectionCustom>
                <CardTell>
                    <TextTell>
                        ศูนย์บริการลูกค้า
                        <br /> 00 000 0000
                    </TextTell>
                    <Button
                        width={'14.3rem'}
                        height={'4.6rem'}
                        bg={R.colors.base_blue}
                        hbg={R.colors.base_blue_l_50}
                        abg={R.colors.base_blue_l_35}
                        font_size={'2.4rem'}
                        margin="auto 3.6rem auto auto"
                    >
                        <a href="tel:0873370808">โทรตอนนี้</a>
                    </Button>
                </CardTell>
                <TextSubScribe>
                    สมัครรับข่าวสารและติดตามการเคลื่อนไหว
                </TextSubScribe>
                <FormSubScribe>
                    <TextField type="text" placeholder="กรุณาใส่อีเมลของคุณ" />
                    <Button
                        width={'15.1rem'}
                        height={'4.6rem'}
                        bg={R.colors.base_red}
                        hbg={R.colors.base_red_l_75}
                        abg={R.colors.base_red_l_60}
                        font_size={'2.4rem'}
                        margin="auto 0"
                    >
                        รับข่าวสาร
                    </Button>
                </FormSubScribe>
                <ContainerSocial>
                    <Email />
                    <a
                        href="http://www.facebook.com/Logigos/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <IconFaceBook />
                    </a>
                    <a
                        href="https://line.me/ti/g2/y1n8wZAhDgGaRhZFP3XEbA"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <IconLine />
                    </a>
                </ContainerSocial>
            </ContainerContact>
        </Container>
    )
}

export default Contact
