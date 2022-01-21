import * as S from './styles';
import logo from 'assets/img/logo.png';
const HeaderRegister = () => {
    return(<S.HeaderRegister> 
        <S.A href ="/login" target="_self">
        <h1 className="anime">LOGIN</h1> 
        </S.A> 
        <picture className="logo">
            <img src={logo} alt="Logo TM" width="150" height="120" />
        </picture>  
        <S.A href ="/" target="_self">
            <h1 className="premium">Home</h1>
        </S.A>
    </S.HeaderRegister>)
}

export default HeaderRegister