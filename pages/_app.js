import GlobalStyle from "../components/GlobalStyle";
import useStore from "../store/useStore";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  const getInitialGameState = useStore((state) => state.getInitialGameState);
  useEffect(() => {
    getInitialGameState();
  }, []);

  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
