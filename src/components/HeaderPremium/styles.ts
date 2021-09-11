import styled from "styled-components"
import { colors } from "styles/GlobalStyle"

export const HeaderPremium = styled.header`
    display: flex;
    border: 0.6rem solid;
    border-color: ${colors.borda};
    background-color: ${colors.white};
    border-radius: 10px;
    justify-content: space-between;
    align-items: center;
    padding-right: 30px;
    width: auto;
    height: 130px;
    @media (max-width: 1268px) {
        .logo{
            display: none;
        }
    }
    @media (max-width: 1108px) {
        display: block;
        height: 250px;
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
        font-size: 50px;
        color: ${colors.roxo};
        font-family: "Teko", sans-serif;
        margin: 10px;
        background-color: none;
    }
    .logo:not(*){
        position: relative;
        left: -30px;
    }
    .premium{
        font-size: 65px;
        color: ${colors.roxo};
        font-family: 'Teko', sans-serif;
        font-style: normal;
        font-weight: normal;
        margin: 10px;
        left: -40px;
    }
    .pesquisar{
    font-size: 70px;
    color: ${colors.roxo};
    font-family: 'Teko', sans-serif;
    font-style: normal;
    font-weight: normal;
    margin: 10px;
    }
`
export const A = styled.a`
    text-decoration: none;
    background-color: none;
`
