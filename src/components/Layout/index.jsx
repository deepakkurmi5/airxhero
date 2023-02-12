import React from "react";
import Head from "next/head";
import styled from "styled-components";
import Header from "../Header";

const LayoutWrapper = styled.div`
  display:flex;
  justify-content:center;
    .bgImg {
      position: absolute;
      background-repeat: no-repeat;
      background-position:  center center;
      background-size: 100%;  
    }
`;

const Layout = ({ children }) => {
  return (
    <>
      <LayoutWrapper>
      <img src="images/bg.png" alt="bg" className="bgImg" />
      </LayoutWrapper>
      <Head>
        <title>airxhero</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      {children}
    </>
  );
};

export default Layout;
