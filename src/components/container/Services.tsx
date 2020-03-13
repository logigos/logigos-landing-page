import React from 'react'
import styled from 'styled-components'
import { TextSection } from '../common/Text'
import { ContainerSection, Conflexcol } from '../common/Container'
import { ServicesType } from '../common/ServiceContent'
import ServiceLayout, { ImageType } from '../common/ServiceLayouts'
import img_searching from '../../images/services-section/icon/searching.svg'
import img_tracking from '../../images/services-section/icon/tracking.svg'
import img_price from '../../images/services-section/icon/price.svg'
import img_seder from '../../images/services-section/image/sender.svg'
import img_driver from '../../images/services-section/image/driver.svg'
import bg from '../../images/services-section/image/bg.svg'

const Container = styled(Conflexcol)`
    width: 100%;
    height: auto;
    align-items: center;
    background: url(${bg});
    background-repeat: no-repeat;
    background-position: top center;
    background-size: cover;
    margin-top: -1.2rem;
`

const services_sender: ServicesType = {
    featureI: {
        width: '16.6rem',
        height: '10rem',
        image: img_searching,
        name: 'ค้นหารถบรรทุก',
        detail: 'เข้าถึงรถบรรทุกรับจ้างที่อยู่ใกล้ที่สุดครอบคลุมรถทุกประเภท',
    },
    featureII: {
        width: '12rem',
        height: '10rem',
        image: img_tracking,
        name: 'ค้นหารถบรรทุก',
        detail: 'เข้าถึงรถบรรทุกรับจ้างที่อยู่ใกล้ที่สุดครอบคลุมรถทุกประเภท',
    },
    featureIII: {
        width: '20.4rem',
        height: '10rem',
        image: img_price,
        name: 'ค้นหารถบรรทุก',
        detail: 'เข้าถึงรถบรรทุกรับจ้างที่อยู่ใกล้ที่สุดครอบคลุมรถทุกประเภท',
    },
}

const services_driver: ServicesType = {
    featureI: {
        width: '16.6rem',
        height: '10rem',
        image: img_searching,
        name: 'ค้นหารถบรรทุก',
        detail: 'เข้าถึงรถบรรทุกรับจ้างที่อยู่ใกล้ที่สุดครอบคลุมรถทุกประเภท',
    },
    featureII: {
        width: '12rem',
        height: '10rem',
        image: img_tracking,
        name: 'ค้นหารถบรรทุก',
        detail: 'เข้าถึงรถบรรทุกรับจ้างที่อยู่ใกล้ที่สุดครอบคลุมรถทุกประเภท',
    },
    featureIII: {
        width: '20.4rem',
        height: '10rem',
        image: img_price,
        name: 'ค้นหารถบรรทุก',
        detail: 'เข้าถึงรถบรรทุกรับจ้างที่อยู่ใกล้ที่สุดครอบคลุมรถทุกประเภท',
    },
}
const image_sender: ImageType = {
    src: img_seder,
    width: '34.4rem',
    height: '42.89rem',
    style: {
        margin: 'auto 5.7rem auto 0',
    },
}

const image_driver: ImageType = {
    src: img_driver,
    width: '50.3rem',
    height: '55.2rem',
    style: {
        margin: '0',
    },
}

const ServicesSection = () => {
    return (
        <ContainerSection>
            <TextSection>บริการของเรา</TextSection>
            <Container>
                <ServiceLayout
                    services={services_sender}
                    image={image_sender}
                />
                <ServiceLayout
                    services={services_driver}
                    image={image_driver}
                    reverse
                />
            </Container>
        </ContainerSection>
    )
}

export default ServicesSection
