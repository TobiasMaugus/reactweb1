import * as S from './styles';

const FooterSup = () => {
    return(<S.FooterSup> 
        <nav>   
                <S.A href ="home" target="_self">  
                <h4 className="linkhome">Home</h4>
                </S.A>
                <S.A href ="forum" target="_self">
                <h4 className="foruns">Fóruns</h4>
                </S.A>
                <S.A href ="https://facebook.com" target="_blank">
                <h4 className="follow">Follow us</h4>
                </S.A>
        </nav>
    </S.FooterSup>)
}

export default FooterSup