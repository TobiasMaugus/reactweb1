import * as S from './styles';

const BodyPremium = () => {
    return(<S.BodyPremium>
        <nav> 
            <table className="planos">
                <thead>
                    <tr>
                        <th>Plano TM básico</th>
                        <th>Plano TM Ultra</th>
                        <th>Plano TM anual Ultra</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>4,99 R$ por mês!<br /><br />sem anúncios!<br /></td>
                        <td>10,99 R$ por mês!<br /><br />Assista sem anúncios!<br />Maior qualidade de vídeo!</td>
                        <td>99,99 R$ por ano!<br /><br />Assista sem anúncios!<br />Maior qualidade de vídeo!</td>
                    </tr>
                </tbody>    
            </table>
        </nav>
    </S.BodyPremium>)
}

export default BodyPremium