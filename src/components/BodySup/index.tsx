import * as S from './styles';

const BodySup = () => {
    return(<S.Body>
       <h2 className="titulosup">SUPORTE</h2>
        <S.F className="suporte" method="GET" action="">
            <legend>
                Relate aqui seu problema:
            </legend>
            <S.I className="inputsup" type="text" required />
            <br />
            <button className="supbotao" type="submit"> Enviar </button>
            <button className="supbotao" type="reset"> Limpar </button>
        </S.F>
    </S.Body>)
}

export default BodySup