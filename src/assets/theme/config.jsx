import { createGlobalStyle } from "styled-components";

export const lightTheme = {};

export const darkTheme = {};

export const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;  
}

html {
    scroll-behavior: smooth;
    -ms-text-size-adjust:100%;
    -webkit-text-size-adjust:100%
    -webkit-tap-highlight-color:rgba(0,0,0,0);
}

body {
  margin:0;
  font-family: "Exo", "Courier New", monospace !important;
  background: black !important;
  padding-right: 0px;
  padding-left: 0px;
  margin-right: auto;
  margin-left: auto;
  position: relative;
}

h1,
h2,
h3,
h4,
h5,
h6 {   
  
  font-weight:600 !important;
  letter-spacing:0.1rem;
}

h1{
  color: white;
  font-size: 2.8rem !important;
}

h3 { 
  color: #daa520;
  font-size: 1.8rem !important;
}

p {
  color: white;
  margin-bottom: 0 !important;
  font-weight:600 !important; 
  letter-spacing:0.1rem;
}

ul {
  margin-bottom: inherit !important;
}

.container {
  max-width: 1352px !important;
  padding-left:100px;
  padding-right:100px;
}

.not-allowed {
  cursor: not-allowed! important;
}
 
@media only screen and (max-width: 1250px) { 
  .container {
    padding-left:30px;
    padding-right:30px;
  }  
}

@media only screen and (max-width: 900px) { 
  .container {
    padding-left:15px;
    padding-right:15px;
  } 
}

@media only screen and (max-width: 600px) {
  .container {
    padding-left:15px;
    padding-right:15px;
  }
}
`;
