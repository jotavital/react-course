import { useState } from "react";

function Evento() {

    const [name, setName] = useState('Default');
    const [password, setPassword] = useState();

    function cadastrarUsuario(e) {
        e.preventDefault();
        console.log(name);
        console.log(password);
    }

    return (
        <div>
            <h1>Meu cadastro</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name">Nome</label>
                    <input type="text" name="name" id="name" onChange={(e) => setName(e.target.value)} value={name} />
                </div>
                <br />
                <div>
                    <label htmlFor="password">Senha</label>
                    <input type="text" name="password" id="password" onChange={(e) => setPassword(e.target.value) } />
                </div>
                <br />
                <div>
                    <button type="submit">Enviar</button>
                </div>
            </form>
        </div>
    );
}

export default Evento;