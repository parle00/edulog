import Loading from "@/components/commons/Loading";
import Layout from "@/components/layout/Layout";
import { AuthProvider } from "@/context/AuthContext";
import { persistor, store } from "@/store";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <PersistGate loading={<Loading />} persistor={persistor}>
        <Provider store={store}>
          <style jsx global>{`
            html {
              font-family: ${inter.style.fontFamily};
            }
          `}</style>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Provider>
      </PersistGate>
    </AuthProvider>
  );
}
