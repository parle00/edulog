import Loading from "@/components/Loading";
import LogoutButton from "@/components/LogoutButton";
import { AuthProvider } from "@/context/AuthContext";
import { persistor, store } from "@/store";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <PersistGate loading={<Loading />} persistor={persistor}>
        <Provider store={store}>
          <LogoutButton />
          <Component {...pageProps} />
        </Provider>
      </PersistGate>
    </AuthProvider>
  );
}
