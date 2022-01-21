import styled from "styled-components"
import { colors } from "styles/GlobalStyle"

export const BodyRegister = styled.main`
label{
    margin-left: 530px;
    font-size: 40px;
}
.form{
    background-color: ${colors.white};
    font-size: 30px;
    color: ${colors.black};
    font-family: 'Teko', sans-serif;
    font-style: normal;
    font-weight: normal;
    align-items: center;
    margin-left: 500px;
}
.form legend{
    font-size: 50px;
    font-style: bold;
    text-decoration: underline ${colors.roxo};
    background-color: ${colors.white};
    margin-left: 500px;
}
.botao{
    font-size: 27px;
    color: ${colors.black};
    font-family: 'Teko', sans-serif;
    font-style: normal;
    font-weight: normal;
    border-radius: 10px;
    background-color: ${colors.bgtables};
    margin-left: 500px;
}
input{
    border-radius: 6px;
    background-color: ${colors.bgtables};
    height: 40px;
    width: 200px;
}
h1{
    font-size: 60px;
    color: ${colors.black};
    font-family: 'Teko', sans-serif;
    font-style: bold;
    text-decoration: underline ${colors.roxo};
    font-weight: normal;
    text-align: center;
    margin-bottom: 0;
}
h2{
    font-size: 40px;
    color: ${colors.black};
    font-family: 'Teko', sans-serif;
    font-style: bold;
    text-decoration: underline ${colors.roxo};
    font-weight: normal;
    text-align: center;
    margin-top: 0;
}
.senha{
    margin-left: 525px;    
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

export const A = styled.a`
    a{
        text-decoration: none;
        background-color: none;
    }
`