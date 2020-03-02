import React from 'react'
// import { Link } from 'gatsby'
import Layout from '../components/common/Layout'
import SEO from '../components/common/seo'
import Header from '../components/common/Header'
import Img from '../images/assets/img.png'

const IndexPage = () => {
    return (
        <Layout>
            <SEO title="Home" />
            <Header />
            <img src={Img} width="50px" />
        </Layout>
    )
}
export default IndexPage
