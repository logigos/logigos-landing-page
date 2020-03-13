import React from 'react'
import { TextSection } from '../common/Text'
import { ContainerSection } from '../common/Container'
import { Services } from '../common/ServiceContent'
import ServiceLayout from '../common/ServiceLayouts'
import img_searching from '../../images/services-section/icon/searching.svg'
import img_seder from '../../images/services-section/image/sender.svg'
const services: Services = {
    featureI: {
        width: '16.6rem',
        height: '10rem',
        image: img_searching,
        name: 'ค้นหารถบรรทุก',
        detail: 'เข้าถึงรถบรรทุกรับจ้างที่อยู่ใกล้ที่สุดครอบคลุมรถทุกประเภท',
    },
    featureII: {
        width: '16.6rem',
        height: '10rem',
        image: img_searching,
        name: 'ค้นหารถบรรทุก',
        detail: 'เข้าถึงรถบรรทุกรับจ้างที่อยู่ใกล้ที่สุดครอบคลุมรถทุกประเภท',
    },
    featureIII: {
        width: '16.6rem',
        height: '10rem',
        image: img_searching,
        name: 'ค้นหารถบรรทุก',
        detail: 'เข้าถึงรถบรรทุกรับจ้างที่อยู่ใกล้ที่สุดครอบคลุมรถทุกประเภท',
    },
}

const image = {
    src: img_seder,
    width: '34.4rem',
    height: '42.89rem',
}

const ServicesSection = () => {
    return (
        <ContainerSection>
            <TextSection>บริการของเรา</TextSection>
            <ServiceLayout services={services} image={image} />
        </ContainerSection>
    )
}

export default ServicesSection
