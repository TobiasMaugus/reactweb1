import * as S from './styles';

const Footer = () => {
    return(<S.Footer> 
        <nav>
                <h4 className="linksuporte">Suporte</h4>
                <h4 className="foruns">Fóruns</h4>

            <div className="icones">
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-facebook"></i>
                    <i className="fab fa-twitter-square"></i>  
            </div>
        </nav>
    </S.Footer>)
}

export default Footer