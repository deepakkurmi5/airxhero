import React from "react";
import Link from "next/link";
import HeaderWrapper from "../../style/header.style";
import { Button } from "@chakra-ui/react";
import { useCrypto } from "../../contexts/CryptoContext";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

const Header = () => {
  const { handleAuth ,walletConnectHandleAuth ,coinBaseHandleAuth,
    address,connectWallet,disconnectAsync,onOpen,isOpen,onClose}  =  useCrypto();
    
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
                    <button onClick={onOpen}>
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
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Select connection method</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              justifyContent: "space-between",
              width: "100%",
              height: "150px",
            }}
          >
            <Button colorScheme="teal" variant="outline" onClick={handleAuth}>
              Metamask
            </Button>
            <Button
              colorScheme="teal"
              variant="outline"
              onClick={walletConnectHandleAuth}
            >
              Wallet Connect
            </Button>
            <Button
              colorScheme="teal"
              variant="outline"
              onClick={coinBaseHandleAuth}
            >
              Coinbase
            </Button>
          </div>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  </>
  );
};

export default Header;
