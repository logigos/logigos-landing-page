import React from 'react'
import Layout from '../components/common/Layout'
import SEO from '../components/common/seo'
import Header from '../components/container/Header'
import Services from '../components/container/Services'
import Steps from '../components/container/Steps'
import FAQs from '../components/container/FAQ'
import Contact from '../components/container/Contact'
import CallToAction from '../components/container/CallToAction'
import Footer from '../components/container/Footer'

const IndexPage = () => {
    return (
        <Layout>
            <SEO title="Home" />
            <Header />
            <Services />
            <Steps />
            <FAQs />
            <Contact />
            <CallToAction />
            <Footer />
        </Layout>
    )
}
export default IndexPage
