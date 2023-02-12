import React from "react";
import Link from "next/link";
import HeaderWrapper from "../../style/header.style";
import { useCrypto } from "../../contexts/CryptoContext";
import WalletModel from "../../models/walletModel";

const Header = () => {
  const { handleAuth ,walletConnectHandleAuth ,coinBaseHandleAuth,
    address,connectWallet,disconnectAsync,isModel,setIsModel}  =  useCrypto();

  return (
    <>
    <HeaderWrapper>
      <div className="container navbar_component">
        <div className="row">
          <div className="col-12">
            <nav className="navbar navbar-light">
              <Link href="/" className="navbar-brand">
                <img src="images/logo.png" alt="Logo..." />
              </Link>

              <ul className="navbar-nav left_ui_block ml-auto d-flex justify-content-center  align-items-center flex-row">
                <li className="nav-item">
                {!connectWallet ? (
                  <div className="mint">
                    <button onClick={() => setIsModel(true)}>
                      Connect wallet
                    </button>
                  </div>
                ) : (
                  <div className="mint">
                    <button onClick={() => disconnectAsync()}>
                       {address?.slice(0,4)}.... {address?.slice(address?.length-4,address?.length)}
                    </button>
                  </div>
                )}
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </HeaderWrapper>

    {isModel && 
      <WalletModel 
        isOpen={isModel} 
        isClose={() => setIsModel(false)} 
        handleAuth={handleAuth}
        walletConnectHandleAuth={walletConnectHandleAuth}
        coinBaseHandleAuth={coinBaseHandleAuth} 
      />}
  </>
  );
};

export default Header;
