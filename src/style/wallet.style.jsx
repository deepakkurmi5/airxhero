import styled from "styled-components";

const WalletWrapper = styled.div`

import styled from "styled-components";
  .popup {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.8);
    transition: all 0ms ease-in-out 200ms;
    z-index: -1;
    visibility: hidden;
    overflow-y: scroll;
    padding: 1rem 0rem;

    &::-webkit-scrollbar {
      display: none;
      background: inherit;
    }
  }

  .popup.active {
    transition: all 0ms ease-in-out;
    z-index: 1000;
    visibility: visible;
  }

  .popup .popup-container {
    position: relative;
    transform: scale(0);
    max-width: 400px !important;
    min-width: 400px !important;
    padding: 1rem 1.5rem;
    margin: auto;
    height: auto !important;
    border-radius: 18px;
    opacity: 0.5;
    transition: all 300ms ease-in-out;
    background: black;
    border: 1px solid grey;
  }

  .popup.active .popup-container {
    opacity: 1;
    transform: scale(1);
  }

  .popup {
    .wallet {
      padding: 0.2rem 0rem;

      .wallet_top_Section {
        border-bottom: 3px solid rgba(255, 255, 255, 0.2);

        .title {
          p {
            font-size: 1.5rem;
            color: white;
            font-weight: bold;
          }
        }
        .close {
          i {
            color: white;
            font-size: 1.3rem;
            cursor: pointer;
          }
        }
      }

      .wallet_section {
        display: flex;
        align-items: center;
        justify-content: center;

        button {
          border:none;
          outline:none;
          border-radius:4px;
          padding: 0.7rem 2.4rem;
          color:white;
          font-size:1.1rem;
          background:#daa520;
          font-weight:600;
          box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
          letter-spacing:0.1rem;
          width:100%;
        }
      }
    }
  }

  @media only screen and (max-width: 1200px) {
    .popup .popup-container {
      width: 95% !important;
      max-width: auto !important;
      min-width: auto !important;
      padding: 0.5rem 0.2rem;
    }

    .popup {
      .pieChart {
        padding: 1rem 0.3rem;
      }
    }
  }
`;

export default WalletWrapper;