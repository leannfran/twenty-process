import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>

         {/* Aquí agregamos el código de Google Analytics */}
         <script async src="https://www.googletagmanager.com/gtag/js?id=G-0L0578NFN7"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-0L0578NFN7');
              gtag('config', 'AW-11317549295');
            `,
            }}

          />
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-0L0578NFN7"></script>
          <script>
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-0L0578NFN7');
            `}
          </script>

          {/* Fragmento de evento para la cotización del carrito */}
          <script>
            {`
              function gtag_report_conversion_cotizacion(url) {
                var callback = function () {
                  if (typeof(url) != 'undefined') {
                    window.location = url;
                  }
                };
                gtag('event', 'conversion', {
                  'send_to': 'AW-11317549295/EKgOCODspeMYEO-x0JQq',
                  'event_callback': callback
                });
                return false;
              }
            `}
          </script>
         
        </Head>      
        <body className='bg-white'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
