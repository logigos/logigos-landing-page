import React from 'react'
import { TextSection } from '../common/Text'
import { ContainerSection } from '../common/Container'
import { ServicesType } from '../common/ServiceContent'
import ServiceLayout, { ImageType } from '../common/ServiceLayouts'
import img_sender_searching from '../../images/services-section/icon/searching.svg'
import img_sender_tracking from '../../images/services-section/icon/tracking.svg'
import img_sender_price from '../../images/services-section/icon/price.svg'
import img_driver_around_thailand from '../../images/services-section/icon/around-thailand.svg'
import img_driver_update from '../../images/services-section/icon/update.svg'
import img_driver_best_route from '../../images/services-section/icon/best-route.svg'
import img_seder from '../../images/services-section/image/sender.svg'
import img_driver from '../../images/services-section/image/driver.svg'

interface ContentType {
    services: ServicesType
    imager: ImageType
}
const sender: ContentType = {
    services: {
        featureI: {
            width: '16.6rem',
            height: '10rem',
            image: img_sender_searching,
            name: 'ค้นหารถบรรทุก',
            detail:
                'เข้าถึงรถบรรทุกรับจ้างที่อยู่ใกล้ที่สุดครอบคลุมรถทุกประเภท',
        },
        featureII: {
            width: '12rem',
            height: '10rem',
            image: img_sender_tracking,
            name: 'ติดตามการขนส่ง',
            detail:
                'เข้าถึงรถบรรทุกรับจ้างที่อยู่ใกล้ที่สุดครอบคลุมรถทุกประเภท',
        },
        featureIII: {
            width: '20.4rem',
            height: '10rem',
            image: img_sender_price,
            name: 'เช็คราคาได้ทันที',
            detail:
                'เข้าถึงรถบรรทุกรับจ้างที่อยู่ใกล้ที่สุดครอบคลุมรถทุกประเภท',
        },
    },
    imager: {
        src: img_seder,
        width: '34.4rem',
        height: '42.89rem',
        // style: {
        //     margin: 'auto 5.7rem auto 13.2rem',
        // },
    },
}

const driver: ContentType = {
    services: {
        featureI: {
            width: '11.4rem',
            height: '10rem',
            image: img_driver_around_thailand,
            name: 'ศูนย์รวมงานขนส่งทั่วไทย',
            detail:
                'เข้าถึงรถบรรทุกรับจ้างที่อยู่ใกล้ที่สุดครอบคลุมรถทุกประเภท',
        },
        featureII: {
            width: '18.6rem',
            height: '10rem',
            image: img_driver_update,
            name: 'เลือกงานที่ดีที่สุด',
            detail:
                'เข้าถึงรถบรรทุกรับจ้างที่อยู่ใกล้ที่สุดครอบคลุมรถทุกประเภท',
        },
        featureIII: {
            width: '15rem',
            height: '10rem',
            image: img_driver_best_route,
            name: 'ค้นหารถบรรทุก',
            detail:
                'เข้าถึงรถบรรทุกรับจ้างที่อยู่ใกล้ที่สุดครอบคลุมรถทุกประเภท',
        },
    },
    imager: {
        src: img_driver,
        width: '50.3rem',
        height: '55.2rem',
        // style: {
        //     margin: '0',
        // },
    },
}

const ServicesSection = () => {
    return (
        <ContainerSection>
            <TextSection>บริการของเรา</TextSection>
            <ServiceLayout services={sender.services} image={sender.imager} />
            <ServiceLayout
                services={driver.services}
                image={driver.imager}
                reverse
            />
        </ContainerSection>
    )
}

export default ServicesSection
