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
