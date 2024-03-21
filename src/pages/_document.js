import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="es">
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
              <script
          type="text/javascript"
          async="async"
          src="https://hub.fromdoppler.com/public/dhtrack.js"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window,document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1193295841632353');
            fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img height="1" width="1" style={{ display: 'none' }}
               src="https://www.facebook.com/tr?id=1193295841632353&ev=PageView&noscript=1"
          />
        </noscript>
          </script>
         
        </Head>      
        <body className='bg-white'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
