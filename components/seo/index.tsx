import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";

const Seo = (props: any) => {
  return (
    <Head>
      <title>{props.title}</title>
      <meta name="description" content="TRANSFORM DIGI TOGETHER. AMIT Group provides information technology solutions and all-inclusive design services" />
      <meta name="keywords" content={props.keywords} />
      <meta name="subject" content="TRANSFORM DIGI TOGETHER" />
      <meta name="copyright" content="Amitgroup" />
      <meta name="author" content="Le Quoc Thao, lequocthao@amitgroup.vn" />
      <meta property="og:title" content="Amitgroup - TRANSFORM DIGI TOGETHER" />
      <meta property="og:description" content="TRANSFORM DIGI TOGETHER. AMIT Group provides information technology solutions and all-inclusive design services" />
      <meta property="og:url" content={props.url} />
      <meta property="og:site_name" content="Amitgroup - Transform Digi Together" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://ibb.co/MDBj3nk" key="ogimage" />
      {/* <link rel="shortcut icon" href="/favicon.png" /> */}
    </Head>
  );
};

Seo.propTypes = {
  title: PropTypes.string,
  keywords: PropTypes.string,
  url: PropTypes.string,
};

export default Seo;
