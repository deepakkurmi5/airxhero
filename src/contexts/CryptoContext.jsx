import React, { useState, useContext, createContext, useEffect } from "react";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
import { CoinbaseWalletConnector } from "wagmi/connectors/coinbaseWallet";
import { mainnet } from "wagmi/chains";

export const CryptoContext = createContext();

export const CryptoProvider = ({ children }) => {
  const [isModel, setIsModel] = useState(false); 
  const [connectWallet, setConnect] = useState(false);
  const { connectAsync } = useConnect();
  const { disconnectAsync } = useDisconnect();
  const { isConnected, address } = useAccount();
  
  const handleAuth = async () => {
    try {
      if (connectWallet) {
        await disconnectAsync();
      }
  
      await connectAsync({
        connector: new MetaMaskConnector({ chains: [mainnet] }),
      });

      setConnect(true)
      setIsModel(false);

    } catch (err) {
      console.log(err)
    }
  };

  const walletConnectHandleAuth = async () => {
    try {
      if (connectWallet) {
        await disconnectAsync();
      }
  
      await connectAsync({
        connector: new WalletConnectConnector({chains: [mainnet], options: { qrcode: true, rpc: {
          1: `https://eth-mainnet.alchemyapi.io/v2/${process.env.NEXT_PUBLIC_ALCHEMY_API_KEY}`,
        }, } }),
      });
  
      setConnect(true)
     setIsModel(false);
    } catch (err) {
      console.log(err)
    }
    
  };

  const coinBaseHandleAuth = async () => {
    try {
      if (connectWallet) {
        await disconnectAsync();
      }
  
      await connectAsync({
        connector: new CoinbaseWalletConnector({
          chains: [mainnet],
          options: {
            appName: "elon8888.com",
          },
        }),
      });
      setConnect(true)
     setIsModel(false);
    } catch (err) {
      console.log(err)
    }
   
  };

    const connect = () => {
        setConnect(isConnected);
    };

    useEffect(() => {
        connect();
    }, [isConnected]);

  return (
    <CryptoContext.Provider
      value={{
        handleAuth,
        walletConnectHandleAuth,
        coinBaseHandleAuth,
        address,
        connectWallet,
        disconnectAsync,
        setIsModel,
        isModel
      }}
    >
      {children}
    </CryptoContext.Provider>
  );
};

export const useCrypto = () => useContext(CryptoContext);