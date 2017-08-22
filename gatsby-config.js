module.exports = {
  siteMetadata: {
    title: 'cottom blog',
    author: 'cottom',
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: process.env.RUN_ENV === 'travis' ?  `${__dirname}/resource/posts` : `${__dirname}/posts`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1.0725rem',
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
          'gatsby-remark-autolink-headers',
          'gatsby-remark-smartypants',
          'gatsby-plugin-glamor',
          'gatsby-plugin-catch-links'
        ],
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        //trackingId: 'ADD YOUR TRACKING ID HERE',
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap'
  ],
}
