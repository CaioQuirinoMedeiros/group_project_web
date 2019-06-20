import { createGlobalStyle } from 'styled-components';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';

export default createGlobalStyle`
  @import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,700&display=swap");

  * {
    padding: 0;
    margin: 0;
    outline: none;
    box-sizing: border-box;
  }

  body {
    background: #353940;
    color: #fff;
    font-family: 'Source Sans Pro', "Arial", sans-serif;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
  }

  html, body, #root {
    height: 100%
  }

  input, button {
    font-family: 'Source Sans Pro', "Arial", sans-serif;
  }

  button {
    cursor: pointer;
  }
`;
