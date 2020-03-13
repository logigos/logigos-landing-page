import React, { FC } from 'react'
import styled from 'styled-components'
import Content, { ServicesType } from './ServiceContent'

const Container = styled.div<{ reverse?: boolean }>`
    width: 100%;
    display: flex;
    flex-direction: ${props => (props.reverse ? 'row-reverse' : 'row')};
    margin-bottom: 4.9rem;
    justify-content: space-between;
`

const ImageSideService = styled.img<ImageType>`
    width: ${props => props.width};
    height: ${props => props.height};
    margin: ${props => (props.style ? props.style.margin : '0')};
`

export interface ImagestyleType {
    margin?: string
}

export interface ContainstyleType {
    margin?: string
    flow?: string
}
export interface ImageType {
    src: string
    width: string
    height: string
    style?: ImagestyleType
}
interface Props {
    services: ServicesType
    image: ImageType
    style?: ContainstyleType
    reverse?: boolean
}

const ServiceLayouts: FC<Props> = props => {
    let { image } = props
    let { services } = props
    let { style } = props
    return (
        <Container reverse={props.reverse} {...style}>
            <Content {...services} />
            <ImageSideService src={image.src} {...image} />
        </Container>
    )
}

export default ServiceLayouts
