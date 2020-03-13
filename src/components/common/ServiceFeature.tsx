import React, { FC } from 'react'
import styled from 'styled-components'
import { ConflexcolCenterH } from './Container'
import R from '../resources/R'

const Container = styled(ConflexcolCenterH)`
    margin: auto 7.3rem;
`

const IconFeature = styled.img`
    width: ${props => props.width};
    height: ${props => props.height};
    object-fit: contain;
`

const NameFeature = styled.h1`
    font-family: 'Mitr';
    font-size: 2.4rem;
    line-height: 1.8;
    letter-spacing: normal;
    color: ${R.colors.black_80};
`

const DetailFeature = styled.p`
    font-family: 'Mitr';
    font-size: 1.8rem;
    font-weight: 300;
    line-height: 1.8;
    color: ${R.colors.black_80};
    text-align: center;
`

export interface FeatureType {
    width?: string
    height?: string
    image?: string
    name?: string
    detail?: string
}

const ServiceFeature: FC<FeatureType> = props => {
    return (
        <Container>
            <IconFeature src={props.image} {...props} />
            <NameFeature>{props.name}</NameFeature>
            <DetailFeature>{props.detail}</DetailFeature>
        </Container>
    )
}

export default ServiceFeature
