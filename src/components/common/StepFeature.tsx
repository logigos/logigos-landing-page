import React, { FC, ReactNode } from 'react'
import styled from 'styled-components'
import { ConflexcolCenter } from './Container'
import R from '../resources/R'
// import SVGIcon, { SVGType } from '../utility/SVGIcon'

const Container = styled(ConflexcolCenter)`
    background: transparent;
`

const IconStep = styled.img`
    width: ${props => props.width || '9rem'};
    height: ${props => props.height || '9rem'};
    margin: 0 auto;
    object-fit: contain;
    filter: drop-shadow(
        9px 9px 12px 0 hsla(0, 0%, 90%, 0.5),
        -9px -9px 12px 0 hsla(0, 0%, 99%, 0.5)
    );
`

const NameStep = styled.p`
    font-family: 'Mitr';
    font-size: 2.4rem;
    font-weight: 500;
    line-height: 1.8;
    letter-spacing: normal;
    color: ${R.colors.black_l_40};
    margin: 1rem auto;
`

const DetailStep = styled.p`
    width: 17.8rem;
    font-family: 'Mitr';
    font-size: 1.8rem;
    font-weight: 300;
    line-height: 1.8;
    color: ${R.colors.black_l_40};
    text-align: center;
    margin: 0;
`

export interface StepType {
    width?: string
    height?: string
    image?: string
    name?: string
    detail?: string
    icon?: ReactNode
}

const StepFeature: FC<StepType> = props => {
    // let { icon } = props
    return (
        <Container>
            {props.icon ? (
                props.icon
            ) : (
                <IconStep src={props.image} {...props} />
            )}

            {/* <SVGIcon {...icon} /> */}
            <NameStep>{props.name}</NameStep>
            <DetailStep>{props.detail}</DetailStep>
        </Container>
    )
}

export default StepFeature
