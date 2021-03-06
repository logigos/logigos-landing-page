// import 'firebase/app'

require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
    siteMetadata: {
        title: `Logigos ค้นหารถขนส่งและสินค้าขนส่ง ได้ตรงความต้องการ`,
        description: `Logigos เว็บไซต์ที่จะมาช่วยให้การค้นหารถขนส่งหรือสินค้าขนส่งให้กับธุรกิจของคุณได้อย่างคุ้มค่าและตรงความต้องการ`,
        author: `@LogigosDev`,
    },
    plugins: [
        `gatsby-plugin-styled-components`,
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
        {
            resolve: `gatsby-plugin-facebook-pixel`,
            options: {
                pixelId: process.env.GATSBY_FACEBOOK_PIXEL_ID,
            },
        },
        {
            resolve: 'gatsby-plugin-firebase',
            options: {
                credentials: {
                    apiKey: process.env.GATSBY_FIREBASE_API_KEY,
                    authDomain: process.env.GATSBY_FIREBASE_AUTH_DOMAIN,
                    databaseURL: process.env.GATSBY_FIREBASE_DATABASE_URL,
                    projectId: process.env.GATSBY_FIREBASE_PROJECT_ID,
                    storageBucket: process.env.GATSBY_FIREBASE_STORAGE_BUCKET,
                    messagingSenderId:
                        process.env.GATSBY_FIREBASE_MESSAGING_SENDER_ID,
                    appId: process.env.GATSBY_FIREBASE_APP_ID,
                    measurementId: process.env.GATSBY_FIREBASE_MEASUREMENT_ID,
                },
            },
        },
        {
            resolve: 'gatsby-plugin-react-svg',
            options: {
                rule: {
                    include: /icon\/.*\.svg/, // See below to configure properly
                    exclude: [/\.png/, /image\/.*\.svg/],
                },
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
}
