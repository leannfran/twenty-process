import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
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
    
         {/* Aquí agregamos el código de Google Analytics */}
         <script async src="https://www.googletagmanager.com/gtag/js?id=G-0L0578NFN7"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-0L0578NFN7');
            `,
            }}
          />
        </Head>      
        <body className='bg-white'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
