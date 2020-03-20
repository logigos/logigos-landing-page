import React from 'react'
import styled from 'styled-components'
import { TextSection } from '../common/Text'
import { ContainerSection } from '../common/Container'
import Img_sender_annouce from '../../images/step-section/icon/annouce.svg'
import Img_sender_wait from '../../images/step-section/icon/wait.svg'
import Img_sender_pay from '../../images/step-section/icon/pay.svg'
import Img_driver_pay from '../../images/step-section/icon/pay.svg'
import Img_driver_search from '../../images/step-section/icon/search.svg'
import Img_driver_select from '../../images/step-section/icon/select.svg'
import R from '../resources/R'
import StepsSectionLayout from '../common/StepsLayouts'

const Container = styled(ContainerSection)`
    margin-top: 0;
`

const TextSectionCustom = styled(TextSection)`
    margin-bottom: 3.6rem;
`

const sender = {
    topic: 'อยากส่งสินค้า ต้องทำอย่างไร',
    steps: [
        {
            icon: <Img_sender_annouce />,
            name: 'ขั้นตอนที่ 1',
            detail: 'Proin fringilla viverra ultricies ut',
        },
        {
            icon: <Img_sender_wait />,
            name: 'ขั้นตอนที่ 1',
            detail: 'Proin fringilla viverra ultricies ut',
        },
        {
            icon: <Img_driver_pay />,
            name: 'ขั้นตอนที่ 1',
            detail: 'Proin fringilla viverra ultricies ut',
        },
    ],
    style_section: {
        primary_color: R.colors.base_red,
    },
}

const driver = {
    topic: 'อยากหางานขนส่ง ต้องทำอย่างไร',
    steps: [
        {
            icon: <Img_driver_search />,
            name: 'ขั้นตอนที่ 1',
            detail: 'Proin fringilla viverra ultricies ut',
        },
        {
            icon: <Img_driver_select />,
            name: 'ขั้นตอนที่ 1',
            detail: 'Proin fringilla viverra ultricies ut',
        },
        {
            icon: <Img_sender_pay />,
            name: 'ขั้นตอนที่ 1',
            detail: 'Proin fringilla viverra ultricies ut',
        },
    ],
    style_section: {
        primary_color: R.colors.base_blue,
        bg: R.colors.base_blue_l_96,
    },
}

const Steps = () => {
    return (
        <Container>
            <TextSectionCustom>ขั้นตอนการใช้บริการ</TextSectionCustom>
            <StepsSectionLayout
                topic={sender.topic}
                steps={sender.steps}
                style_section={sender.style_section}
            />
            <StepsSectionLayout
                topic={driver.topic}
                steps={driver.steps}
                style_section={driver.style_section}
            />
        </Container>
    )
}

export default Steps
