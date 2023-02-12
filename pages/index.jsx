
import React, {useState} from "react";
import {AavtarRegistry} from "../src/assets/registry";
import HomeWrapper from "../src/style/home.style";
import Slide from "react-slick";
import { useContractWrite, usePrepareContractWrite } from "wagmi";
import ABI from "./api/abi.json";
import { ethers } from "ethers";
import { useCrypto } from "../src/contexts/CryptoContext";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: true,
  arrows: false,
  slidesToShow: 1,
  slidesToScroll: 1,
};

function HomePage() {

  const { address,connectWallet }  =  useCrypto();
  const [errorData, setErrorData] = useState({});

  const { config } = usePrepareContractWrite({
    addressOrName: "0x3ec229aA3ee1445aF61E57bDd6F5f6a42A4398d3",
    contractInterface: ABI,
    functionName: "mint",
    args: [1],
    enabled: Boolean(1),
    overrides: {
      from: address,
      value: ethers.utils.parseEther("0"),
    },
    onSettled(data, error) {
      if (error) {
        setErrorData(error)
      }
    },
  });

  const { write, isLoading, isError, isSuccess } = useContractWrite(config);

  return (
   <HomeWrapper>
      <section className="home">
        <div className="container">
          <div className="row mt-lg-0 mt-md-0 mt-sm-0 mt-4">
            <div className="col-12 d-flex justify-content-center">
              <div className="title text-center">
                <h1>HERO</h1>
                <p>First AI HERO NFT Collection</p>
                <span>Mint Starts at 0.05ETH</span>
              </div>
            </div>
          </div>
          <div className="row d-flex justify-content-center mt-4">
            <div className="col-lg-4 col-12 about order-lg-0 order-1 mt-lg-0 mt-3">
              <div className="about_details text-center">
                <h3>About HERO</h3>
                <p>AIR HEROs are the next generation of Metaverse
                Avatars. Al has founds it way into the metaverse and HEROs were created!
                Own unique one of 5050
                Avatars that will bring you new adventures!
                </p>              
              </div>
            </div>
            <div className="col-lg-4  col-12 gallery order-lg-1 order-0">
              <div>
                <Slide {...settings}>
                  {AavtarRegistry.map((item) => {
                      return <div className="col-12 d-flex justify-content-center" key={item.id}>
                        <div className="imgSection">
                          <img
                            src={item.img}
                            alt="elon"
                          />
                        </div>
                    </div>
                    })}
                </Slide>
              </div>
            </div>
            <div className="col-lg-4 col-12 bennifts order-lg-2 order-2 mt-lg-0 mt-3">
              <div className="about_bennifts text-center">
                  <h3>HERO Bennifts</h3>
                  <p>Get a chance to finally own cool looking avatars that you can use on your socials.
                    Collect HEROs, Earn on Chain monthly rewards and also get to dual with another Hero using the Battle DAPP.
                    Coming Soon!
                    new adventures!
                  </p>              
                </div>
              </div>
          </div>
          {connectWallet  && (
            <div className="row mt-4 mint d-flex justify-content-center">
              <div className="col-lg-3 col-md-5 col-12">
                <button
                  disabled={errorData && errorData.reason?.length > 0}
                  onClick={() => {
                    console.log("call");
                    write?.();
                    console.log("end");
                  }}
                >
                  {isLoading ? (
                    <p
                      style={{
                        color: "snow",
                        fontSize: "1.7rem",
                        display: "flex",
                        justifyContent: "center",
                        alignItem: "center",
                        marginTop: "3px",
                      }}
                    >
                      <i className="zmdi zmdi-rotate-left zmdi-hc-spin-reverse"></i>
                    </p>
                  ) : (
                    "MINT"
                  )}
                </button>
              
              </div>
              <div className="col-12 d-flex justify-content-center mt-3">
                <div className="message text-center">
                  {isError && <p>Mint Failed</p>}
                  {isSuccess && <p>Mint success</p>}
                </div>
              </div>
          </div>
          )}
          
        </div>
      </section>
    </HomeWrapper>
  );
}

export default HomePage;
