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
