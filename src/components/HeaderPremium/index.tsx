import * as S from './styles';
import logo from 'assets/img/logo.png';

const HeaderPremium = () => {
    return(<S.HeaderPremium> 
        <h1 className="anime">TM ANIMES</h1>
        <picture className="logo">
            <img src={logo} alt="Logo TM" width="150" height="120"  />
        </picture>
        <S.A href ="home" target="_self">
            <h1 className="premium">Home</h1>
        </S.A>
        <h1 className="pesquisar">Pesquisar:</h1>
    </S.HeaderPremium>)
}

export default HeaderPremium