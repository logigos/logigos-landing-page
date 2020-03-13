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
    margin: 0 auto;
    object-fit: contain;
    filter: drop-shadow(
        9px 9px 12px 0 hsla(0, 0%, 90%, 0.5),
        -9px -9px 12px 0 hsla(0, 0%, 99%, 0.5)
    );
`

const NameFeature = styled.p`
    font-family: 'Mitr';
    font-size: 2.4rem;
    line-height: 1.8;
    letter-spacing: normal;
    color: ${R.colors.black_l_20};
    margin: 1rem auto;
`

const DetailFeature = styled.p`
    width: 27.8rem;
    font-family: 'Mitr';
    font-size: 1.8rem;
    font-weight: 300;
    line-height: 1.8;
    color: ${R.colors.black_l_40};
    text-align: center;
    margin: 0 auto 3.2rem auto;
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
