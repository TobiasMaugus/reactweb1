import styled from "styled-components"
import { colors } from "styles/GlobalStyle"

export const Main = styled.main`
    .tabela{
    display:table;
    font-size: 50px;
    color: ${colors.black};
    font-family: 'Teko', sans-serif;
    font-style: normal;
    font-weight: normal;
    margin: 0;
    text-align: center;
    width: 100%;
    }
    .tabela th{
        text-decoration: ${colors.roxo};
    }
    .tabela td{
    border: 1px solid black;
    border-radius: 10px;
    background-color: ${colors.bgtables};
    width: 25%;
    margin: 50px;
    border-spacing: 50px 10px;
    padding-left: 50px;
    padding-right: 50px;
    }

    main nav table{
        border-collapse: separate;
        border-spacing: 9px;
    }
`