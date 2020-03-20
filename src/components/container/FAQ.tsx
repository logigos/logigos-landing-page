import React, { useState } from 'react'
import styled from 'styled-components'
import R from '../resources/R'
import bg_faq_illus from '../../images/faq-section/image/faq-illus.svg'
import IconArrowDownRed from '../../images/faq-section/icon/arrow-down-red.svg'
import { ArrowDowm } from '../utility/Keyframe'
import { TextSection } from '../common/Text'
import FAQItem from '../common/FaqsItem'
import IntersectionVisible from 'react-intersection-visible'

const IconArrowDownRedCustom = styled(IconArrowDownRed)`
    margin: 0 auto;
    animation: ${ArrowDowm} 1.5s ease-in-out infinite;
`

const TextSectionCustom = styled(TextSection)`
    margin-bottom: 4.1rem;
    height: 7.5rem;
`

const Container = styled(IntersectionVisible)`
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 7.6rem;
`

const ContainerContent = styled.div`
    width: 40%;
    max-width: 48.8rem;
    min-height: 70rem;
    display: flex;
    flex-direction: column;
    background: url(${bg_faq_illus});
    background-repeat: no-repeat;
    background-position: top center;
    margin: 0 7rem;
`

const FAQTopic = styled.p`
    font-family: 'Mitr';
    font-size: 4.8rem;
    color: ${R.colors.black_l_40};
    margin: 11.6rem 0 0 0;
`

const FAQThanks = styled.p`
    font-family: 'Mitr';
    font-size: 2.4rem;
    color: ${R.colors.black_l_60};
    max-height: 5.4em;
    line-height: 1.8em;
    margin: 2.4rem 0 4.2rem 0;
    word-wrap: break-word;
`

const ContainerFAQs = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    /* padding: 0 7rem; */
`

interface FAQType {
    Q: string
    A: string
}

interface FAQsType {
    faqs: FAQType[]
}

const FAQs: FAQsType = {
    faqs: [
        {
            Q: 'อยากกินบอนชอนต้องทำอย่างไร ?',
            A: 'ต้องมีตัง',
        },
        {
            Q: 'เมื่อไหร่จะได้กินบาบีก้อน ?',
            A:
                '- Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla',
        },
        {
            Q: 'ถ้ากินชาบูวันนี้ จะได้กินเต้าหู้ชีสหรือไม่ ?',
            A:
                '- Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla',
        },
        {
            Q: 'ระหว่างหมูสามชั้น เบคอนและคอหมู อะไรดีกว่ากัน ?',
            A:
                '- Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla',
        },
        {
            Q: 'เมื่อไหร่บอนชอนจะมาส่ง ?',
            A:
                '- Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla',
        },
    ],
}

// interface ExpandsType {
//     qI: boolean
//     qII: boolean
//     qIII: boolean
//     qIV: boolean
//     qV: boolean
// }

interface Props {
    [index: string]: boolean
}

const FAQ = () => {
    let initialExpand: Props = {
        '0': false,
        '1': false,
        '2': false,
        '3': false,
        '4': false,
    }
    // const [expand, setExpand] = useState<Array<boolean>>([false,false,false,false,false])
    const [expand, setExpand] = useState<Props>(initialExpand)

    const handleOnClick = async (index: string) => {
        setExpand({ ...initialExpand, [index]: !expand[index] })
    }

    return (
        <Container
            onIntersect={() => setExpand(initialExpand)}
            options={{ threshold: [0.75] }}
        >
            <ContainerContent>
                <FAQTopic>มีข้อสงสัยหรือพบปัญหา</FAQTopic>
                <FAQThanks>
                    ทีมงาน Logigos พร้อมบริการด้วยหัวใจ <br />
                    ดูแลทุกท่านด้วยความอบอุ่น <br />
                    สอบถามการใช้งานได้ทุกเมื่อ
                </FAQThanks>
                <IconArrowDownRedCustom />
            </ContainerContent>
            <ContainerFAQs>
                <TextSectionCustom>คำถามที่พบบ่อย</TextSectionCustom>
                {FAQs.faqs.map((faq, index) => {
                    return (
                        <FAQItem
                            key={index}
                            expand={expand[index.toString()]}
                            handleOnClick={() =>
                                handleOnClick(index.toString())
                            }
                            {...faq}
                        />
                    )
                })}
            </ContainerFAQs>
        </Container>
    )
}

export default FAQ
//
