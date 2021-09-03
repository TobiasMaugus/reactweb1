import * as S from './styles';

const Main = () => {
    return(<S.Main>
        <nav>
            <table className="tabela">
                <thead>
                    <tr>
                        <th>Lançamentos</th>
                        <th>Populares</th>
                        <th>Clássicos</th>
                        <th>Dublados</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Anime 1</td>
                        <td>Anime 2</td>
                        <td>Anime 3</td>
                        <td>Anime 4</td>
                    </tr>
                    <tr>
                        <td>Anime 5</td>
                        <td>Anime 6</td>
                        <td>Anime 7</td>
                        <td>Anime 8</td>    
                    </tr>
                    <tr>
                        <td>Anime 9</td>
                        <td>Anime 10</td>
                        <td>Anime 11</td>
                        <td>Anime 12</td>    
                    </tr>
                </tbody>
            </table>
        </nav> 
    </S.Main>)
}

export default Main