import Head from "next/head";
import Script from "next/script";
import { useRouter } from "next/router";
import { useEffect } from "react";
import "../styles/globals.css";
import { ThemeProvider } from "@material-tailwind/react";
import { Provider } from "react-redux";
import store from "../redux/store";
import { CartProvider } from "@/context/cartContext";

// IDs públicos (no son secretos, se ven en el HTML de cualquier visitante),
// hardcodeados a propósito: proyecto chico sin entornos de staging.
const GA_MEASUREMENT_ID = "G-0L0578NFN7";
const GOOGLE_ADS_ID = "AW-11317549295";
const FB_PIXEL_ID = "1193295841632353";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  // Next.js hace navegación client-side (SPA): sin esto, gtag solo
  // registraría la primera carga y no los cambios de página posteriores.
  useEffect(() => {
    if (!GA_MEASUREMENT_ID) return;

    const handleRouteChange = (url) => {
      window.gtag?.("config", GA_MEASUREMENT_ID, { page_path: url });
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => router.events.off("routeChangeComplete", handleRouteChange);
  }, [router.events]);

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
      <link rel="icon" href="/twentyLOGO.ico"  />
      <link rel="icon" href="./public/twentyLOGO.ico"  type="image/png" />
      <link rel="apple-touch-icon" href="./public/twentyLOGO.png" />


      {/* Preconexión a recursos externos (como fuentes) */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />

      <meta
        name="keywords"
        content="merchandising personalizado, productos promocionales, merchandising de calidad, productos promocionales para empresas, regalos corporativos, promoción de marca, artículos promocionales, merchandising, Argentina"
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
      </Head>

      {/* Google Analytics (GA4) + Google Ads */}
      {GA_MEASUREMENT_ID && (
        <>
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          />
          <Script id="gtag-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}');
              ${GOOGLE_ADS_ID ? `gtag('config', '${GOOGLE_ADS_ID}');` : ""}
            `}
          </Script>
        </>
      )}

      {/* Meta (Facebook) Pixel */}
      {FB_PIXEL_ID && (
        <>
          <Script id="fb-pixel" strategy="afterInteractive">
            {`
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window,document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${FB_PIXEL_ID}');
              fbq('track', 'PageView');
            `}
          </Script>
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
              alt=""
            />
          </noscript>
        </>
      )}

      {/* Doppler tracking */}
      <Script
        strategy="afterInteractive"
        src="https://hub.fromdoppler.com/public/dhtrack.js"
      />

      <Provider store={store}>
        <CartProvider>
          <Component {...pageProps} />
        </CartProvider>
      </Provider>
    </ThemeProvider>
  );
}
