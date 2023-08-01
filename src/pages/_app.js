import Head from "next/head";
import "../styles/globals.css";
import { ThemeProvider } from "@material-tailwind/react";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Head>
      <title>Twenty | Página de inicio</title>
        <link rel="icon" href="/icon/twentyLOGO.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />

        {/* Metaetiquetas */}
        <meta name="description" content="TWENTY es una empresa de merchandising B2B especializada en productos promocionales personalizados. Contáctanos para solicitar presupuestos, conocer más sobre nosotros y descargar nuestros catálogos de productos." />
        <meta name="keywords" content="merchandising, productos promocionales, personalizados, B2B, empresa, TWENTY" />
        <meta name="author" content="TWENTY" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
