import React, { FC } from 'react'
import styled from 'styled-components'
import R from '../resources/R'
import Step, { StepType } from './StepFeature'

const Section = styled.div<{ bg?: string }>`
    display: flex;
    justify-content: center;
    width: 100%;
    background: ${props => props.bg || 'transparent'};
`

const Layout = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
`

const Container = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    margin-bottom: 3.6rem;
`

const TextHeader = styled.p<{ primary_color: string }>`
    font-family: 'Mitr';
    font-size: 3.6rem;
    font-weight: 500;
    color: ${R.colors.black_l_40};
    &:before {
        content: '';
        width: 2.6rem;
        height: 2.6rem;
        border-radius: 50%;
        background: ${props => props.primary_color};
        display: inline-block;
        margin-right: 2.4rem;
    }
`

const IconNext = styled.img`
    width: 44.9px;
    height: 30.2px;
    background: ${R.colors.base_red};
`

interface StyleSectionType {
    primary_color: string
    bg?: string
}

interface ContentType {
    topic: string
    steps: StepType[]
    style_section: StyleSectionType
}

const StepsLayouts: FC<ContentType> = props => {
    let { steps } = props
    let { style_section } = props
    return (
        <Section bg={style_section.bg}>
            <Layout>
                <TextHeader primary_color={style_section.primary_color}>
                    {props.topic}
                </TextHeader>
                <Container>
                    {steps.map(step => {
                        return (
                            <>
                                <Step {...step} />
                                {step !== steps[steps.length - 1] ? (
                                    <IconNext />
                                ) : null}
                            </>
                        )
                    })}
                </Container>
            </Layout>
        </Section>
    )
}

export default StepsLayouts
