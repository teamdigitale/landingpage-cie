module.exports = {
  siteMetadata: {
    name: "Identità Digitale",
    hostname: "identitadigitale.gov.it",
    siteUrl: "https://identitadigitale.gov.it/",
  },
  plugins: [
    "gatsby-plugin-sitemap",
    "gatsby-plugin-jss",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "contents",
        path: `${__dirname}/contents`,
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          "gatsby-remark-attr",
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 740,
            },
          },
        ],
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-matomo",
      options: {
        siteId: "OEDqe88pGg",
        matomoUrl: `https://ingestion.webanalytics.italia.it/`,
        siteUrl: "https://identitadigitale.gov.it",
        matomoPhpScript: "matomo.php",
        matomoJsScript: "matomo.js",
        localScript: "/assets/matomo.js",
        dev: true,
        enableJSErrorTracking: true,
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "G-Q21N3HDKYT",

        // Include GTM in development.
        //
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: true,

        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        //
        // Defaults to null
        defaultDataLayer: { platform: "gatsby" },

        // Name of the event that is triggered
        // on every Gatsby route change.
        //
        // Defaults to gatsby-route-change
        routeChangeEventName: "Click su Ancora",
      },
    },
  ],
};
