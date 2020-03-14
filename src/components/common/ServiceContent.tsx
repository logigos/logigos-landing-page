import React, { FC } from 'react'
import styled from 'styled-components'
import Feature, { FeatureType } from './ServiceFeature'
import { Conflexcol } from './Container'

const Layouts = styled(Conflexcol)`
    margin-top: 5.2rem;
    width: 85%;
    z-index: 1;
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
