import "../styles/globals.css";
import Header from "../Components/Header/header";
import { ChakraProvider, Container, Box } from "@chakra-ui/react";
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import { store } from "../redux/store/store";

const MyApp = ({ Component, pageProps }) => {
  return (
    <ChakraProvider>
      <Provider store={store}>
        <Box width="100%" p={["12px 0 0", "24px 0 0"]}>
          <Header />
          <Box width="100%" p={["0 12px", "0 24px", "0 87.6px"]}>
            <Component {...pageProps} />
          </Box>
        </Box>
      </Provider>
    </ChakraProvider>
  );
};

const makeStore = () => store;

export default withRedux(makeStore)(MyApp);
