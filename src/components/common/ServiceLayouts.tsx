import React, { FC } from 'react'
import styled from 'styled-components'
import Content, { ServicesType } from './ServiceContent'

const Container = styled.div<{ reverse?: boolean }>`
    width: 100%;
    display: flex;
    flex-direction: ${props => (props.reverse ? 'row-reverse' : 'row')};
    margin-bottom: 4.9rem;
    justify-content: space-between;
    position: relative;
`

const ImageSideService = styled.img<ImageType>`
    position: absolute;
    right: ${props => (props.reverse ? 'auto' : '0')};
    left: ${props => (props.reverse ? '0' : 'auto')};
    top: ${props => (props.reverse ? '0' : '5.7rem')};
    margin: ${props => (props.style ? props.style.margin : '0')};
    width: ${props => props.width};
    height: ${props => props.height};
    max-width: 100%;
    height: auto;
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
    reverse?: boolean
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
            <ImageSideService
                src={image.src}
                reverse={props.reverse}
                {...image}
            />
        </Container>
    )
}

export default ServiceLayouts
