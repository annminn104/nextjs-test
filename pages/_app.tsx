import "../styles/assets/scss/index.scss";
import type { AppProps } from "next/app";
import { Layout } from "antd";
const { Header, Footer, Content } = Layout;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout className="am-layout">
      <Header>header</Header>
      <Content className="am-layout_content">
        <Component {...pageProps} />
      </Content>
      <Footer>footer</Footer>
    </Layout>
  );
}

export default MyApp;
