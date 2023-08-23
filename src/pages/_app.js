import Head from "next/head";
import "../styles/globals.css";
import { ThemeProvider } from "@material-tailwind/react";
import { Provider } from "react-redux";
import store from "../redux/store";
import { CartProvider } from "@/context/cartContext";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Head>
        <title>Twenty | Página de inicio</title>
        <link rel="icon" href="./public/twentyLOGO.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />

        {/* Metaetiquetas */}
        <meta
          name="description"
          content="TWENTY es una empresa de merchandising B2B especializada en productos promocionales personalizados. Contáctanos para solicitar presupuestos, conocer más sobre nosotros y descargar nuestros catálogos de productos."
        />
        <meta
          name="keywords"
          content="merchandising, productos promocionales, personalizados, B2B, empresa, TWENTY"
        />
        <meta name="author" content="TWENTY" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Provider store={store}>
        <CartProvider>
          <Component {...pageProps} />
        </CartProvider>
      </Provider>
    </ThemeProvider>
  );
}
