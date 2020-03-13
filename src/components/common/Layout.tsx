/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useEffect } from 'react'
// import { useStaticQuery, graphql } from 'gatsby'
import GlobalStyles from './GlobalStyles'
import styled from 'styled-components'
import { Conflexcol } from './Container'
import firebase from 'gatsby-plugin-firebase'
import Navbar from './Navbar'
interface Props {
    children: React.ReactNode
}

const LayoutContainer = styled(Conflexcol)`
    width: 100%;
    margin: 0 auto;
`

const Layout = ({ children }: Props) => {
    useEffect(() => {
        firebase.analytics().logEvent('logigos log :')
    }, [])
    return (
        <LayoutContainer>
            <GlobalStyles />
            <Navbar />
            {children}
        </LayoutContainer>
    )
}

export default Layout
