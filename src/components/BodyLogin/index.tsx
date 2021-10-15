import * as S from './styles';

const BodyLogin = () => {
    return(<S.BodyLogin>
        <h1>LOGIN</h1>
        <S.F className="suporte" method="GET" action="">
                <br />
                <label htmlFor="email">
                    Email: 
                </label>
                <input 
                    type="email" 
                    id="email"
                    required
                />
                <br /><br />
                <label htmlFor="senha" className="senha">
                    Senha: 
                </label>
                <input 
                    type="password" 
                    id="password"
                    required
                />
                <br /><br /><br />
                <S.A href ="home" target="_self">
                <h2>Efetuar Login</h2>
                </S.A>
           
        </S.F>
    </S.BodyLogin>)
}

export default BodyLogin