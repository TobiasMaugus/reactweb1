import { colors } from "./GlobalStyle";
import styled from "styled-components";
const Button = styled.button`
  display: flex;
  align-items: center;
  margin: auto;
  border: 0;
  border-radius: 0.3rem;
  color: ${colors.white};
  font-weight: bold;
  padding: 0.3rem;
  cursor: pointer;
  svg {
    width: 2rem;
    height: 2rem;
  }
`

export default Button;