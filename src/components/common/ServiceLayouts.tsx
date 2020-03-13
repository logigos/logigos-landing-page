import React, { FC } from 'react'
import styled from 'styled-components'
import Content, { Services } from './ServiceContent'

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`

const ImageSideService = styled.img<ImageType>`
    width: ${props => props.width};
    height: ${props => props.height};
    margin: auto 5.7rem;
`

export interface ImageType {
    src: string
    width: string
    height: string
}

interface Props {
    services: Services
    image: ImageType
}

const ServiceLayouts: FC<Props> = props => {
    let { image } = props
    let { services } = props
    return (
        <Container>
            <Content {...services} />
            <ImageSideService src={image.src} {...image} />
        </Container>
    )
}

export default ServiceLayouts
