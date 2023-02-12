import styled from "styled-components";

const HeaderWrapper = styled.div`

  .navbar_component {
    background: inherit !important;

    nav {
      padding: 0.3rem 0.8rem;
      justify-content: inherit !important;

      .navbar-brand {
        flex-grow: 0 !important;

        img {
          height: 5rem;
          width: auto;
        }
      }

      .left_ui_block {
        display: flex !important;

        li {
          padding-left: 0.1rem;
          padding-right: 0.1rem;

          .mint{
             button {
              border:none;
              outline:none;
              border-radius:50px;
              padding: 0.7rem 2.4rem;
              color:white;
              font-size:1.1rem;
              background:#daa520;
              font-weight:600;
              box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
              letter-spacing:0.1rem;
             }
          }
        }
      }
    }
  }

  @media only screen and (max-width: 600px) {
    .navbar_component {
      nav {
        padding: 0.2rem 0rem;

        .navbar-brand {
          img {
            height: 3.7rem;
            width: auto;
            margin-left: 10px;
          }
        }

        .left_ui_block {
          li {
          .mint{
            button {
              padding: 0.6rem 1.3rem;
              font-size: 1rem;
              border-radius:4px;
            } 
          }
        }
      }
    }
  }
`;

export default HeaderWrapper;