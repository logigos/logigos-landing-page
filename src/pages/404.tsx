import React from 'react'

import Layout from '../components/common/Layout'
import SEO from '../components/common/seo'

const NotFoundPage = () => {
    return (
        <Layout>
            <SEO title="404: Not found" />
            <h1>NOT FOUND</h1>
            <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        </Layout>
    )
}

export default NotFoundPage
