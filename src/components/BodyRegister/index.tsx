import * as S from './styles';

const BodyRegister = () => {
    return(<S.BodyRegister>
        <h1>REGISTRO</h1>
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
                <h2>Efetuar Registro</h2>
                </S.A>
           
        </S.F>
    </S.BodyRegister>)
}

export default BodyRegister