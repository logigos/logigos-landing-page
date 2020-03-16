import React from 'react'
import Layout from '../components/common/Layout'
import SEO from '../components/common/seo'
import Header from '../components/container/Header'
import Services from '../components/container/Services'
import Steps from '../components/container/Steps'
import FAQs from '../components/container/FAQ'

const IndexPage = () => {
    return (
        <Layout>
            <SEO title="Home" />
            <Header />
            <Services />
            <Steps />
            <FAQs />
        </Layout>
    )
}
export default IndexPage
