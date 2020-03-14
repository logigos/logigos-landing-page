import React from 'react'
import Layout from '../components/common/Layout'
import SEO from '../components/common/seo'
import Header from '../components/container/Header'
import Services from '../components/container/Services'
import Steps from '../components/container/Steps'
import styled from 'styled-components'
import { Conflexcol } from '../components/common/Container'
import bg from '../images/services-section/image/bg.svg'

const Container = styled(Conflexcol)`
    width: 100%;
    height: auto;
    /* align-items: center; */
    background: url(${bg});
    background-repeat: no-repeat;
    background-position-y: 8rem;
    background-size: cover;
    /* margin-top: -1.2rem; */
`
const IndexPage = () => {
    return (
        <Layout>
            <SEO title="Home" />
            <Header />
            <Container>
                <Services />
                <Steps />
            </Container>
        </Layout>
    )
}
export default IndexPage
