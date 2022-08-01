module.exports = {
  siteMetadata: {
    siteUrl: `https://smartgrouppanama.com`,
    title: `Smart Group Panamá`,
    description: `Lo que necesitas para que te mantengas protegido 24/7. Contáctanos y prueba nuestras soluciones profesionales de seguridad.`,
    author: `Mango Digital Studio`,
    github: ``,
    blog: ``,
    product: ``,
    docs: ``

  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-tailwind`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#4dc0b5`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`
      }
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-postcss`,
    {
      resolve: "gatsby-plugin-purgecss",
      options: {
        tailwind: true,
        purgeOnly: ["src/css/style.css", "src/css/global.css","src/css/glide.core.min.css" ]
      }
    }
  ]
};
