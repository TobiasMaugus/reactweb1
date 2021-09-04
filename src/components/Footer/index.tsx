import * as S from './styles';

const Footer = () => {
    return(<S.Footer> 
        <nav>   
                <S.A href ="Suporte" target="_self">  
                <h4 className="linksuporte">Suporte</h4>
                </S.A>
                <S.A href ="forum" target="_self">
                <h4 className="foruns">Fóruns</h4>
                </S.A>
                <S.A href ="https://facebook.com" target="_blank">
                <h4 className="follow">Follow us</h4>
                </S.A>
        </nav>
    </S.Footer>)
}

export default Footer