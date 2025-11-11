import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Header from "@/components/Header/Header";
import { Provider } from "react-redux";
import store from "@/redux/store";
import Footer from "@/components/footer/Footer";
import AppLayout from "@/components/app-layout/AppLayout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
        <Footer />
      </div>
    </Provider>
  );
}
