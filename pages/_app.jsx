import dynamic from "next/dynamic";
import { publicProvider } from "wagmi/providers/public";
import { ChakraProvider } from "@chakra-ui/react";
import {CryptoProvider} from "../src/contexts/CryptoContext"
import {
  createClient,
  configureChains,
  defaultChains,
  WagmiConfig,
} from "wagmi";
const Layout = dynamic(() => import("../src/components/Layout"));
const ModeProvider = dynamic(() => import("../src/assets/theme"));

const { provider, webSocketProvider } = configureChains(defaultChains, [
  publicProvider(),
]);

const client = createClient({
  provider,
  webSocketProvider,
  autoConnect: true,
});

function MyApp({ Component, pageProps }) {
  return (
    <ModeProvider>
      <WagmiConfig client={client}>
        <ChakraProvider>
          <CryptoProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </CryptoProvider>
        </ChakraProvider>
      </WagmiConfig>
    </ModeProvider>
  );
}

export default MyApp;
