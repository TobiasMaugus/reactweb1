import styled from "styled-components"
import { colors } from "styles/GlobalStyle"

export const BodyForum = styled.main`
    padding-bottom: 100px;
    .tableforun{
    display:table;
    font-size: 40px;
    color: ${colors.black};
    font-family: 'Teko', sans-serif;
    font-style: normal;
    font-weight: normal;
    text-align: center;
    width: 100%;
    border-collapse: separate;
    border-spacing: 100px 10px;
}

.tableforun td{
    vertical-align: middle;
    border: 1px solid black;
    border-radius: 10px;
    background-color: ${colors.bgtables};
    width: 33,3%;   
    padding-left: 50px;
    padding-right: 50px;
}

.tableforun caption{
    font-size: 40px;
    text-decoration: underline ${colors.roxo};
}
`