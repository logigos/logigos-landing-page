import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/common/Layout'
import Image from '../components/image'
import SEO from '../components/common/seo'

const IndexPage = () => {
    return (
        <Layout>
            <SEO title="Home" />
            <h1>Hi people</h1>
            <p>Welcome to Logigos Website</p>
            <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
                <Image />
            </div>
            <Link to="/page-2/">Go to page 2</Link>
        </Layout>
    )
}
export default IndexPage
