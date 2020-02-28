module.exports = {
    siteMetadata: {
        title: `Logigos ค้นหารถขนส่งและสินค้าขนส่ง ได้ตรงความต้องการ`,
        description: `Logigos เว็บไซต์ที่จะมาช่วยให้การค้นหารถขนส่งหรือสินค้าขนส่งให้กับธุรกิจของคุณได้อย่างคุ้มค่าและตรงความต้องการ`,
        author: `@LogigosDev`,
    },
    plugins: [
        `gatsby-plugin-preact`,
        `gatsby-plugin-typescript`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
}
