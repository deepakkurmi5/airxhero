import React, { useEffect, memo } from "react";
import WalletWrapper from "../style/wallet.style";

const WalletModel = ({
  isOpen,
  isClose,
  handleAuth,
  walletConnectHandleAuth,
  coinBaseHandleAuth
}) => {
  useEffect(() => {
    if (isOpen) {
      document.querySelector(".popup").classList.add("active");
    }
  }, [isOpen]);

  const CloseModel = () => {
    document.querySelector(".popup").classList.remove("active");
    setTimeout(() => {
      isClose();
    }, 400);
  };

  return (
    <WalletWrapper>
      <div className="popup">
        <div className="popup-container">
          <div className="container-fluid wallet">
            <div className="row d-flex align-items-center wallet_top_Section">
              <div className="col-lg-8 col-md-8 col-10 d-flex align-items-center">
                <div className="title">
                  <p>Select wallet</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-2 close d-flex justify-content-end">
                <i className="zmdi zmdi-close" onClick={CloseModel} />
              </div>
            </div>
            <div className="row wallet_section my-lg-4">
              <div className="col-12">
                <button colorScheme="teal" variant="outline" onClick={handleAuth}>
                  Metamask
                </button>
              </div>
              <div className="col-12 mt-3">
                <button
                  colorScheme="teal"
                  variant="outline"
                  onClick={walletConnectHandleAuth}
                >
                  Wallet Connect
                </button>
              </div>
              <div className="col-12 mt-3">
                <button
                  colorScheme="teal"
                  variant="outline"
                  onClick={coinBaseHandleAuth}
                >
                  Coinbase
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </WalletWrapper>
  );
};

export default memo(WalletModel);