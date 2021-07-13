/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { graphql, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import styled, { ThemeProvider } from "styled-components"
import Header from "../global/header"
import Footer from "../global/footer"
import SEO from "../seo"

import { primaryTheme, secondaryTheme } from "../../styles/theme"
import GlobalStyle from "../../styles/global"

interface Props {
  children?: any
  title?: string
  description?: string
}

const Layout = ({ children, title, description }: Props) => {
  const [mode, setMode] = useState(true)
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={mode ? primaryTheme : secondaryTheme}>
      <GlobalStyle />
      <SEO title={title} description={description} />
      <Header />
      <Content>{children}</Content>
      <Footer />
    </ThemeProvider>
  )
}

const Content = styled.main`
  display: grid;
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
