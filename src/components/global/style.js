import { createGlobalStyle } from "styled-components";

export default createGlobalStyle `
    * {
        margin: 0;
        padding: 0;
        outline: none;
        box-sizing: border-box;
        text-decoration: none;
    }

    body {
        background: #282A36 ;
        font-family: Roboto;
        -webkit-font-smoothing: antialiased;
    }

    #App {
        max-width: 1020px;
        margin: 0px auto;
        padding: 10px 20px;
    }

    button {
        border: none;
        border-radius: 4px;
    }
`;