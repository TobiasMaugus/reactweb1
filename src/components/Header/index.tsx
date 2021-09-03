import * as S from './styles';
import logo from 'assets/img/logo.png';

const Header = () => {
    return(<S.Header> 
        <h1 className="anime">TM ANIMES</h1>
        <picture className="logo">
            <img src={logo} alt="Logo TM" width="160" height="124" />
        </picture>
        
        <h1 className="premium">Seja premium</h1>
        
        <h1 className="pesquisar">Pesquisar:</h1>
    </S.Header>)
}

export default Header