// import "@/styles/globals.css";
// import type { AppProps } from "next/app";

// export default function App({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />;
// }

import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Header from "@/components/Header/Header";
import { Provider } from "react-redux";
import store from "@/redux/store";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <Component {...pageProps} />
      </div>
    </Provider>
  );
}
