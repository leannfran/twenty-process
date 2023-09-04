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
       
      <title>Merchandising Personalizado | TWENTY</title>
      <meta
          name="description"
          content="TWENTY es una empresa de merchandising B2B especializada en productos promocionales personalizados. Contáctanos para solicitar presupuestos, conocer más sobre nosotros y descargar nuestros catálogos de productos."
        />
       
      
        <meta name="author" content="TWENTY" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />


      {/* Título de la página */}

      {/* Iconos de la página */}
      <link rel="icon" href="./public/twentyLOGO.ico"  />
      <link rel="icon" href="./public/twentyLOGO.ico"  type="image/png" />
      <link rel="apple-touch-icon" href="./public/twentyLOGO.png" />


      {/* Preconexión a recursos externos (como fuentes) */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />

     
      <meta
        name="keywords"
        content="merchandising personalizado, productos promocionales, merchandising de calidad, productos promocionales para empresas, regalos corporativos, promoción de marca, artículos promocionales, merchandising B2B, Argentina"
        />

      {/* Metadatos para redes sociales (opcional, si tienes habilitada la funcionalidad) */}
      <meta property="og:title" content="Merchandising Personalizado | TWENTY" />
      <meta
        property="og:description"
        content="TWENTY es tu fuente confiable de productos promocionales personalizados. Somos una empresa B2B especializada en merchandising de calidad. ¡Contáctanos hoy mismo para solicitar presupuestos y conocer nuestros productos!"
      />
      <meta property="og:url" content="https://www.twenty.com.ar" />
      <meta name="twitter:card" content="summary_large_image" />

      {/* Metadatos para SEO local (si tienes una ubicación física) */}
      <meta name="geo.region" content="AR" />
      <meta name="geo.placename" content="Buenos Aires" />
      <meta name="geo.position" content="-34.611778;-58.417306" />
      <meta name="ICBM" content="-34.611778, -58.417306" />
    
        {/* Metaetiquetas */}
      

      </Head>
      <Provider store={store}>
        <CartProvider>
          <Component {...pageProps} />
        </CartProvider>
      </Provider>
    </ThemeProvider>
  );
}
