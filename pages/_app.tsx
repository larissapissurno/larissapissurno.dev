import type { AppProps } from 'next/app';
import Home from ".";
import "../styles/normalize.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <Home />;
}

export default MyApp;
