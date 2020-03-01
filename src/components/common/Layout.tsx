/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
// import { useStaticQuery, graphql } from 'gatsby'
import GlobalStyles from './GlobalStyles'
import styled from 'styled-components'
import { ContainerFlexCol } from './Container'
interface Props {
    children: React.ReactNode
}

const LayoutContainer = styled(ContainerFlexCol)`
    width: 100%;
    margin: 0 auto;
`

const Layout = ({ children }: Props) => {
    return (
        <LayoutContainer>
            <GlobalStyles />
            {children}
        </LayoutContainer>
    )
}

export default Layout
