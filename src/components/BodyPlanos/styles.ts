import styled from "styled-components"
import { colors } from "styles/GlobalStyle"

export const BodyPlanos = styled.main`

.form{
    background-color: ${colors.white};
    font-size: 30px;
    color: ${colors.black};
    font-family: 'Teko', sans-serif;
    font-style: normal;
    font-weight: normal;
}
.form legend{
    font-size: 50px;
    font-style: bold;
    text-decoration: underline ${colors.roxo};
    background-color: ${colors.white};
}
.botao{
    font-size: 27px;
    color: ${colors.black};
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

select{
    background-color: ${colors.bgtables};
    border-radius: 6px;
}
@media (max-width: 1108px) {
        
    }

`

export const F = styled.form`
legend{
    font-size: 31px;
}

`
export const I = styled.input`
`