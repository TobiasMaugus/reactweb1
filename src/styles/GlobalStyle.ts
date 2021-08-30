import {createGlobalStyle} from "styled-components"

export default createGlobalStyle`
    /* latin */
    @font-face {
    font-family: 'Teko';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: url('assets/Teko.woff2') format('woff2');
    }
    * {
        font-family: "Teko";
    }
`   
export const colors = {
    white: "#fff",
    borda: "#423B3B",
    roxo: "#4B0F83",
    bg: "#2B2323",
    black: "#000000",
    bgtables: "#aeaeae"
}

