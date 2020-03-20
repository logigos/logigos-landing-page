import React, { FC } from 'react'
import styled from 'styled-components'
import { generateMedia } from 'styled-media-query'
import Feature, { FeatureType } from './ServiceFeature'
import { Conflexcol } from './Container'

const customMedia = generateMedia({
    large: '1680px' /*size for service section*/,
})

const Layouts = styled(Conflexcol)`
    margin-top: 5.2rem;
    width: 74%;
    z-index: 1;
    ${customMedia.greaterThan('large')`
            margin: 5.2rem 15.9rem 0 15.9rem; 
        `}
`

const ContainerFeature = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`

export interface ServicesType {
    featureI?: FeatureType
    featureII?: FeatureType
    featureIII?: FeatureType
}
const ServiceContentLayout: FC<ServicesType> = props => {
    let { featureI } = props
    let { featureII } = props
    let { featureIII } = props
    return (
        <Layouts>
            <ContainerFeature>
                <Feature {...featureI} />
            </ContainerFeature>
            <ContainerFeature>
                <Feature {...featureII} />
                <Feature {...featureIII} />
            </ContainerFeature>
        </Layouts>
    )
}

export default ServiceContentLayout
