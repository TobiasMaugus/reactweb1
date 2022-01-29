import * as S from './styles';
import logo from 'assets/img/logo.png';
const HeaderAdm = () => {
    return(<S.HeaderAdm> 
        <S.A href ="/register" target="_self">
        <h1 className="anime">REGISTRAR</h1> 
        </S.A> 
        <picture className="logo">
            <img src={logo} alt="Logo TM" width="150" height="120" />
        </picture>  
        <S.A href ="/" target="_self">
            <h1 className="premium">SAIR</h1>
        </S.A>
    </S.HeaderAdm>)
}

export default HeaderAdm