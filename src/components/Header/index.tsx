import * as S from './styles';
import logo from 'assets/img/logo.png';

const Header = () => {
    return(<S.Header> 
        <h1 className="anime">TM ANIMES</h1>
        <picture className="logo">
            <img src={logo} alt="Logo TM" width="150" height="120" />
        </picture>
        <S.A href ="premium" target="_self">
            <h1 className="premium">Seja premium</h1>
        </S.A>
        <S.A href ="login" target="_self">
        <h1 className="pesquisar">Login</h1>
        </S.A>
    </S.Header>)
}

export default Header