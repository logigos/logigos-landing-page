import React, { useState, ChangeEvent, FormEvent } from 'react'
import styled from 'styled-components'
import img_contact from '../../images/contact-section/image/contact-illus.svg'
import { TextSectionWhite } from '../common/Text'
import R from '../resources/R'
import Button from '../common/Button'
import { LineEmail } from '../common/InLineSocial'
import { IconFaceBook, IconLine } from '../common/IconSocial'
import { TextField } from '../common/TextField'
import { APIs } from '../api/APISubscribe'
import IconLoading from '../../images/contact-section/icon/load.svg'
import { LoadingSpin } from '../utility/Keyframe'

const IconLoadingRotate = styled(IconLoading)`
    animation: ${LoadingSpin} 2s linear infinite;
    outline: none;
    width: 2.8rem;
    height: 2.8rem;
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
    const [email, setEmailSubscribe] = useState<string>('')
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [isSubscribed, setIsSubscribed] = useState<boolean>(false)

    const validateEmail = (email: string) => {
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return re.test(String(email).toLowerCase())
    }

    const handleSubscribe = async (event: FormEvent) => {
        event.preventDefault()
        if (validateEmail(email)) {
            if (!isSubscribed) {
                await setIsSubscribed(false)
                await setIsLoading(true)
                await APIs.subscribeEmail({
                    email: email,
                    status_email: 'new',
                    timestamp: new Date().getTime(),
                    origin: process.env.GATSBY_FIREBASE_RULE_ORIGIN,
                })
                await setIsLoading(false)
                await setIsSubscribed(true)
                setTimeout(() => {
                    setIsSubscribed(false)
                    setIsLoading(false)
                    setEmailSubscribe('')
                }, 3500)
            }
        } else {
            alert('โปรดกรอก email ให้ครบถ้วน')
        }
    }

    const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
        setEmailSubscribe(event.target.value)
    }

    return (
        <Container>
            <ImageContactLeft src={img_contact} />
            <ContainerContact>
                <TextSectionWhite>ติดต่อเรา</TextSectionWhite>
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
                <FormSubScribe onSubmit={e => handleSubscribe(e)}>
                    <TextField
                        type="text"
                        placeholder="กรุณาใส่อีเมลของคุณ"
                        onChange={e => onChangeEmail(e)}
                        value={email}
                    />
                    {isSubscribed ? (
                        <Button
                            width={'15.1rem'}
                            height={'4.6rem'}
                            bg={R.colors.green_L_65}
                            hbg={R.colors.green_l_95}
                            abg={R.colors.green_L_65}
                            font_size={'2.4rem'}
                            margin="auto 0"
                        >
                            เสร็จสิ้น
                        </Button>
                    ) : (
                        <Button
                            width={'15.1rem'}
                            height={'4.6rem'}
                            bg={R.colors.base_red}
                            hbg={R.colors.base_red_l_75}
                            abg={R.colors.base_red_l_60}
                            font_size={'2.4rem'}
                            margin="auto 0"
                        >
                            {isLoading ? (
                                <IconLoadingRotate height="100%" />
                            ) : (
                                'รับข่าวสาร'
                            )}
                        </Button>
                    )}
                </FormSubScribe>
                <ContainerSocial>
                    <LineEmail />
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
