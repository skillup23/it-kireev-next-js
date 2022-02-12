import Head from "next/head";
import Layout from '../components/Layout';
import Image from "next/image";
import wildFoto from "../public/wild.png";
import '../styles/globals.scss'

const MyApp = ({ Component, pageProps }) => (
  <Layout>
    <Head>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap" rel="stylesheet" />
    </Head>
    <main>
      <Component {...pageProps} />
    </main>
    <Image
      src={wildFoto}
      width={500}
      height={350}
      alt="wild-foto"
      placeholder="blur"
    />
  </Layout>
);

export default MyApp;