import "../styles/assets/scss/index.scss";
import type { AppProps } from "next/app";
import { Layout } from "antd";
import Head from "next/head";
import { FooterDefault } from "@components/footer";
import { HeaderDefault } from "@components/header";
const { Header, Footer, Content } = Layout;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout className="am-layout">
      <Head>
        <title>Workshop-Team3</title>
        <meta name="description" content="Workshop: NextJS vs NuxtJS" />
        <meta name="keywords" content="workshop" />
        <meta name="subject" content="NextJS vs NuxtJS" />
        <meta name="copyright" content="Amitgroup" />
        <meta name="author" content="Nguyen Cao Anh Minh - Huynh Trung Hien" />
        <meta property="og:title" content="Workshop: NextJS vs NuxtJS" />
        <meta property="og:description" content="Workshop: NextJS vs NuxtJS" />
        <meta property="og:url" content="https://nextjs-workshop-team3.vercel.app/" />
        <meta property="og:site_name" content="Workshop: NextJS vs NuxtJS" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://i.pinimg.com/564x/44/e3/72/44e372f2e74d3f3e0cf247adda6b7b48.jpg" key="ogimage" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="noindex" />
        <meta name="theme-color" content="#317EFB" />
      </Head>
      <Header>
        <HeaderDefault />
      </Header>
      <Content className="am-layout_content">
        <Component {...pageProps} />
      </Content>
      <Footer>
        <FooterDefault />
      </Footer>
    </Layout>
  );
}

export default MyApp;
