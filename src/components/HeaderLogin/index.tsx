import * as S from './styles';
import logo from 'assets/img/logo.png';
const HeaderLogin = () => {
    return(<S.HeaderLogin> 
        <S.A href ="/register" target="_self">
        <h1 className="anime">Registrar</h1> 
        </S.A> 
        <S.A href ="/adm" target="_self">
            <h1 className="premium">Administrar</h1>
        </S.A>
        <S.A href ="/" target="_self">
            <h1 className="premium">Voltar</h1>
        </S.A>
    </S.HeaderLogin>)
}

export default HeaderLogin