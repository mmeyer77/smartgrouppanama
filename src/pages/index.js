import React from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { withPrefix } from "gatsby"
import catAndHumanIllustration from "../images/cat-and-human-illustration.svg";

function IndexPage() {
  return (
    <Layout>
    <Helmet>
        <meta name="icon" href="../images/favicon.png" />
      </Helmet>

      
      <SEO
        title="Smart Group Panama"
        keywords={[`CCTV`, `camaras`, `redes`, `alarmas`]}
      />

    </Layout>
  );
}

export default IndexPage;
