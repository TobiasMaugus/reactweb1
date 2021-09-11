import styled from "styled-components"
import { colors } from "styles/GlobalStyle"

export const Footer = styled.footer`
    nav {
    position: fixed;
    bottom:0;
    left: 0;
    right: 0;
    width: 94,5%;
    height: 70px;
    display: flex;
    border: 0.6rem solid;
    border-color: ${colors.borda};
    background-color: ${colors.white};
    border-radius: 10px;
    justify-content: space-between;
    align-items: center;
    padding-right: 30px;
    padding-left: 30px;
    margin: 7px;
    }
    .linksuporte{
    font-size: 45px;
    color: ${colors.roxo};
    font-family: 'Teko', sans-serif;
    margin: 0px;
    font-style: normal;
    font-weight: normal;
    background-color: ${colors.white};
    }
    .foruns{
        font-size: 45px;
        color: ${colors.roxo};
        font-family: 'Teko', sans-serif;
        margin: 10px;
        font-style: normal;
        font-weight: normal;
        background-color: ${colors.white};
        margin: 0px;
    }
    .follow{
        font-size: 45px;
        color: ${colors.roxo};
        font-family: 'Teko', sans-serif;
        margin: 0px;
        font-style: normal;
        font-weight: normal;
        background-color: ${colors.white};
    }
    a{
        text-decoration: none;
        background-color: none;
    }
    @media (max-width: 1108px) {
        position: fixed;
        bottom: 0px;
    }
    @media (max-width: 638px) {
        .follow{
            height: 50px;
        }
    }
`
export const A = styled.a`
    a{
        text-decoration: none;
        background-color: none;
    }
`