import styled from "styled-components"
import { colors } from "styles/GlobalStyle"

export const HeaderLogin = styled.header`
    display: flex;
    border: 0.6rem solid;
    border-color: ${colors.borda};
    background-color: ${colors.white};
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    width: auto;
    height: 130px;
    @media (max-width: 1108px) {
        display: block;
        height: 275px;
    }
    *{
        background-color: ${colors.white};
    }

    h1{
        display: flex;
        margin-block-start: 0.67em;
        margin-block-end: 0.67em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        font-weight: bold;
        background-color: none;
    }
    .anime{
        font-size: 90px;
        color: ${colors.roxo};
        font-family: "Teko", sans-serif;
        margin: 10px;
        background-color: none;
    }
`
export const A = styled.a`
    text-decoration: none;
    background-color: none;
`
