import React from 'react'
import styled from 'styled-components'
import { TextSection } from '../common/Text'
import { ContainerSection } from '../common/Container'
import img_sender_annouce from '../../images/step-section/icon/annouce.svg'
import img_sender_wait from '../../images/step-section/icon/wait.svg'
import img_sender_pay from '../../images/step-section/icon/pay.svg'
import img_driver_search from '../../images/step-section/icon/search.svg'
import img_driver_select from '../../images/step-section/icon/select.svg'
import R from '../resources/R'
// import { StepType } from '../common/StepFeature'
import StepsSectionLayout from '../common/StepsLayouts'

const Container = styled(ContainerSection)`
    margin-top: 10.4rem;
`

const TextSectionCustom = styled(TextSection)`
    margin-bottom: 3.6rem;
`

const sender = {
    topic: 'อยากส่งสินค้า ต้องทำอย่างไร',
    steps: [
        {
            image: img_sender_annouce,
            name: 'ขั้นตอนที่ 1',
            detail: 'Proin fringilla viverra ultricies ut',
        },
        {
            image: img_sender_wait,
            name: 'ขั้นตอนที่ 1',
            detail: 'Proin fringilla viverra ultricies ut',
        },
        {
            image: img_sender_pay,
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
            image: img_driver_search,
            name: 'ขั้นตอนที่ 1',
            detail: 'Proin fringilla viverra ultricies ut',
        },
        {
            image: img_driver_select,
            name: 'ขั้นตอนที่ 1',
            detail: 'Proin fringilla viverra ultricies ut',
        },
        {
            image: img_sender_pay,
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
