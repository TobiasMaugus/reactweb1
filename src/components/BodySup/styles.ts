import styled from "styled-components"
import { colors } from "styles/GlobalStyle"

export const Body = styled.main`
    .titulosup{
    font-size: 40px;
    color: ${colors.black};
    font-family: 'Teko', sans-serif;
    font-style: bold;
    text-decoration: underline ${colors.roxo};
    font-weight: normal;
    text-align: center;
}
.suporte{
    align-items: center;
    background-color: ${colors.bg};
    font-size: 40px;
    color: ${colors.black};
    font-family: 'Teko', sans-serif;
    font-style: normal;
    font-weight: normal;
    margin-left: 35%;
    margin-right: 35%;
}
.inputsup{
    height: 100px;
    width: 310px;
    background-color: ${colors.bgtables};
}
.supbotao{
    font-size: 25px;
    color: ${colors.black};
    font-family: 'Teko', sans-serif;
    font-style: normal;
    font-weight: normal;
    border-radius: 10px;
    background-color:${colors.bgtables};
}

input{
    border-radius: 6px;
}
@media (max-width: 1108px) {
        padding-bottom: 100px;
    }

`

export const F = styled.form`
legend{
    font-size: 31px;
}

`
export const I = styled.input`
`