import * as S from './styles';
import logo from 'assets/img/logo.png';
import { useAuth } from "hooks/auth";
import { useCallback } from "react";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";


const HeaderLogout = () => {
    const { signOut } = useAuth();
    const history = useHistory();
  
    const sair = useCallback(async () => {
      try {
        await signOut();
        toast.success("LOGOUT REALIZADO COM SUCESSO!!!");
        history.push("/");
      } catch (error) {
        toast.error("Falha ao sair!");
      }
    }, [history, signOut]);
  
    return(<S.HeaderLogout> 
        <h1 className="anime">TM ANIMES</h1>
        <picture className="logo">
            <img src={logo} alt="Logo TM" width="150" height="120" />
        </picture>
        <S.A href ="/" target="_self">
            <h1 className="premium">Home</h1>
        </S.A>
        {/* <button type="button" onClick={sair}>
              Sair
        </button> */}
        <S.A href ="#" onClick={sair} target="_self">
            <h1 className="premium">Sair</h1>
        </S.A>
    </S.HeaderLogout>)
}

export default HeaderLogout

