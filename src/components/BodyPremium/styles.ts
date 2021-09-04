import styled from "styled-components"
import { colors } from "styles/GlobalStyle"

export const BodyPremium = styled.main`
    .planos {
    display:table;
    font-size: 40px;
    color: #000000;
    font-family: 'Teko', sans-serif;
    font-style: normal;
    font-weight: normal;
    text-align: center;
    width: 100%;
    table-layout: fixed;
}

.planos td{
    vertical-align: middle;
    border: 1px solid black;
    border-radius: 10px;
    background-color: #aeaeae;
    width: 33,3%;   
}

.planos a{
    text-decoration: none;
    color: ${colors.black};
    font-size: 50px;
    text-decoration: underline #4B0F83;
}

`