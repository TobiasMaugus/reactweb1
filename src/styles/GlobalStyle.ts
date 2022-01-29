import {createGlobalStyle} from "styled-components"
import 'react-toastify/dist/ReactToastify.css';
import 'react-confirm-alert/src/react-confirm-alert.css'

export default createGlobalStyle`
    /* latin */
    @font-face {
    font-family: 'Teko';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/teko/v10/LYjCdG7kmE0gdQhfsCRgqA.woff2) format('woff2');
    }
    *{
        font-family: "Teko";
        background-color: #2B2323;
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

