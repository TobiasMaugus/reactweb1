import * as S from './styles';

const BodyPlanos = () => {
    return(<S.BodyPlanos>
        <S.F className="suporte" method="GET" action="">
        <fieldset>
                <legend>
                    Cadastro
                </legend>
                <label htmlFor="plano">
                    Plano: 
                </label>
                <select id="plano" name="plano">
                    <option value="basico">Plano TM básico</option> 
                    <option value="ultra">Plano TM Ultra</option> 
                    <option value="anual">Plano TM anual Ultra</option> 
                </select>
                <br /><br />
                <label htmlFor="nome">
                    Nome:
                </label>
                <input 
                    type="text" 
                    id="nome"
                    required    
                />
                <br /><br />

                <label htmlFor="sobrenome">
                    Sobrenome:
                </label>
                <input 
                    type="text" 
                    id="sobrenome"
                    required    
                />
                <br /><br />

                <label htmlFor="cpf">
                    CPF:
                </label>
                <input 
                    type="text" 
                    id="cpf"
                    required
                />
                <br /><br />

                <label htmlFor="data">
                    Data de nascimento:
                </label>
                <input 
                    type="date" 
                    id="data"
                    required
                />
                <br /><br />

                <label htmlFor="email">
                    Email:
                </label>
                <input 
                    type="email" 
                    id="email"
                    required
                />
                <br /><br />

                <label htmlFor="tel">
                    Telefone:
                </label>
                <input 
                    type="tel" 
                    id="tel"
                    required
                />
                <br /><br />

                <label htmlFor="conta">
                    Número da conta:
                </label>
                <input 
                    type="text" 
                    id="conta"
                    required
                />
                <br /><br />

                <label htmlFor="cartao">
                    Número do cartão:
                </label>
                <input 
                    type="text" 
                    id="cartao"
                    required
                />
                <br /> <br />
                
                <button className="botao" type="submit">Enviar</button>
                <button className="botao" type="reset">Limpar</button>
            </fieldset>  
        </S.F>
    </S.BodyPlanos>)
}

export default BodyPlanos