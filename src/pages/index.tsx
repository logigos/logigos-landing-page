import React from 'react'
// import { Link } from 'gatsby'
import Layout from '../components/common/Layout'
import SEO from '../components/common/seo'
import Header from '../components/container/Header'
import Services from '../components/container/Services'
const IndexPage = () => {
    return (
        <Layout>
            <SEO title="Home" />
            <Header />
            <Services />
        </Layout>
    )
}
export default IndexPage
