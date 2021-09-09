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
    vertical-align: middle;
    table-layout: fixed;
}

.planos td{
    vertical-align: middle;
    border: 1px solid black;
    border-radius: 10px;
    background-color: #aeaeae;
    width: 33,3%;   
    margin-bottom: 0;
    padding-bottom: 0;
}
.planos th{
    text-decoration: underline #4B0F83;
}

.planos a{
    text-decoration: none;
    color: ${colors.black};
    font-size: 50px;
    text-decoration: underline #4B0F83;
}
.acesso{
    vertical-align: middle;
    text-align: center;
    align-content: center;
    margin: auto;
    margin: auto;
    text-decoration: none;
    color: ${colors.black};
    font-size: 50px;
    text-decoration: underline #4B0F83;
}

padding-bottom: 100px;

`

export const A = styled.a`
    a{
        text-decoration: none;
        background-color: none;
        display: block;
    }
`