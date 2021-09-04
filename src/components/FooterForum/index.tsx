import * as S from './styles';

const FooterForum = () => {
    return(<S.FooterForum> 
        <nav>   
                <S.A href ="home" target="_self">  
                <h4 className="linkhome">Home</h4>
                </S.A>
                <S.A href ="suporte" target="_self">
                <h4 className="foruns">Suporte</h4>
                </S.A>
                <S.A href ="https://facebook.com" target="_blank">
                <h4 className="follow">Follow us</h4>
                </S.A>
        </nav>
    </S.FooterForum>)
}

export default FooterForum