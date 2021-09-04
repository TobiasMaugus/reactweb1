import * as S from './styles';

const BodyForum = () => {
    return(<S.BodyForum>
      <main>
        <table className="tableforun">
            <caption>
                <h3>FÓRUNS</h3>
            </caption>
            <thead>
                <tr>
                    <th>Nome do fórun</th>
                    <th>Nome do criador</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Fórun 1</td>
                    <td>Nome 1</td>
                </tr>
                <tr>
                    <td>Fórun 2</td>
                    <td>Nome 2</td>
                </tr>
                <tr>
                    <td>Fórun 3</td>
                    <td>Nome 3</td>
                </tr>
                <tr>
                    <td>Fórun 4</td>
                    <td>Nome 4</td>
                </tr>
                <tr>
                    <td>Fórun 5</td>
                    <td>Nome 5</td>
                </tr>
                <tr>
                    <td>Fórun 6</td>
                    <td>Nome 6</td>
                </tr>
            </tbody>
        </table>
    </main>
    </S.BodyForum>)
}

export default BodyForum