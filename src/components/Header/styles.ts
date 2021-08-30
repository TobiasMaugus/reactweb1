import styled from "styled-components"
import { colors } from "styles/GlobalStyle"

export const Header = styled.header`
    display: flex;
    border: 0.6rem solid;
    border-color: ${colors.borda};
    background-color: #fff;
    border-radius: 10px;
    justify-content: space-between;
    align-items: center;
    padding-right: 30px;
    .anime{
        font-size: 80px;
        color: ${colors.roxo};
        font-family: 'Teko', sans-serif;
        margin: 10px;
    }
    .logo{
        position: relative;
        left: -150px;
    }
    .premium{
        font-size: 70px;
        color: ${colors.roxo};
        font-family: 'Teko', sans-serif;
        font-style: normal;
        font-weight: normal;
        margin: 10px;
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
