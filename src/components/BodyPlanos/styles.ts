import styled from "styled-components"
import { colors } from "styles/GlobalStyle"

export const BodyPlanos = styled.main`

.form{
    background-color: ${colors.white};
    font-size: 30px;
    color: #000000;
    font-family: 'Teko', sans-serif;
    font-style: normal;
    font-weight: normal;
}
.form legend{
    font-size: 50px;
    font-style: bold;
    text-decoration: underline #4B0F83;
    background-color: ${colors.white};
}
.botao{
    font-size: 27px;
    color: #000000;
    font-family: 'Teko', sans-serif;
    font-style: normal;
    font-weight: normal;
    border-radius: 10px;
    background-color: ${colors.bgtables};
}
input{
    border-radius: 6px;
    background-color: ${colors.bgtables};
}

padding-bottom: 100px;

`

export const F = styled.form`
legend{
    font-size: 31px;
}

`
export const I = styled.input`
`