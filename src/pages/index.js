import React from "react";
import Helmet from "react-helmet";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { withPrefix } from "gatsby"
import catAndHumanIllustration from "../images/cat-and-human-illustration.svg";

function IndexPage() {
  return (
    <Layout>
    
      <SEO
        title="GatsbyJS Tailwind Starter"
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
      />

    </Layout>
  );
}

export default IndexPage;
