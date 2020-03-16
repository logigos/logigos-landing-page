import React from 'react'
import styled from 'styled-components'
import { TextSection } from '../common/Text'
import { ContainerSection, Conflexcol } from '../common/Container'
import { ServicesType } from '../common/ServiceContent'
import ServiceLayout, { ImageType } from '../common/ServiceLayouts'
import IconSenderSearch from '../../images/services-section/icon/searching.svg'
import IconSenderTracking from '../../images/services-section/icon/tracking.svg'
import IconSenderPrice from '../../images/services-section/icon/price.svg'
import IconDriverAroundThailand from '../../images/services-section/icon/around-thailand.svg'
import IconDriverUpdate from '../../images/services-section/icon/update.svg'
import IconDriverBestRoute from '../../images/services-section/icon/best-route.svg'
import img_seder from '../../images/services-section/image/sender.svg'
import img_driver from '../../images/services-section/image/driver.svg'
import bg from '../../images/services-section/image/bg.svg'
import bg_right from '../../images/services-section/image/blue-triangle.svg'
import bg_left from '../../images/services-section/image/red-triangle.svg'

const Container = styled(Conflexcol)`
    width: 100%;
    height: 129.2rem;
    background: url(${bg_right}), url(${bg_left});
    background-repeat: no-repeat;
    background-position: top right, 0 43rem;
    /* background-size: init; */
`
interface ContentType {
    services: ServicesType
    imager: ImageType
}

const sender: ContentType = {
    services: {
        featureI: {
            // width: '16.6rem',
            // height: '10rem',
            icon: <IconSenderSearch />,
            name: 'ค้นหารถบรรทุก',
            detail:
                'เข้าถึงรถบรรทุกรับจ้างที่อยู่ใกล้ที่สุดครอบคลุมรถทุกประเภท',
        },
        featureII: {
            // width: '12rem',
            // height: '10rem',
            icon: <IconSenderTracking />,
            name: 'ติดตามการขนส่ง',
            detail:
                'เข้าถึงรถบรรทุกรับจ้างที่อยู่ใกล้ที่สุดครอบคลุมรถทุกประเภท',
        },
        featureIII: {
            // width: '20.4rem',
            // height: '10rem',
            icon: <IconSenderPrice />,
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
            // width: '11.4rem',
            // height: '10rem',
            icon: <IconDriverAroundThailand />,
            name: 'ศูนย์รวมงานขนส่งทั่วไทย',
            detail:
                'เข้าถึงรถบรรทุกรับจ้างที่อยู่ใกล้ที่สุดครอบคลุมรถทุกประเภท',
        },
        featureII: {
            // width: '18.6rem',
            // height: '10rem',
            icon: <IconDriverUpdate />,
            name: 'เลือกงานที่ดีที่สุด',
            detail:
                'เข้าถึงรถบรรทุกรับจ้างที่อยู่ใกล้ที่สุดครอบคลุมรถทุกประเภท',
        },
        featureIII: {
            // width: '15rem',
            // height: '10rem',
            icon: <IconDriverBestRoute />,
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
            <Container>
                <ServiceLayout
                    services={sender.services}
                    image={sender.imager}
                />
                <ServiceLayout
                    services={driver.services}
                    image={driver.imager}
                    reverse
                />
            </Container>
        </ContainerSection>
    )
}

export default ServicesSection
