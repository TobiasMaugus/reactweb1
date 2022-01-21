import * as S from './styles';
import logo from 'assets/img/logo.png';
const HeaderLogin = () => {
    return(<S.HeaderLogin> 
        <h1 className="anime">TM ANIMES</h1>  
        <picture className="logo">
            <img src={logo} alt="Logo TM" width="150" height="120" />
        </picture>  
        <S.A href ="/" target="_self">
            <h1 className="premium">Voltar</h1>
        </S.A>
    </S.HeaderLogin>)
}

export default HeaderLogin