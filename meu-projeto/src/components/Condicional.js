import { useState } from 'react';

function Condicional() {

    const [email, setEmail] = useState("teste@teste");
    const [userEmail, setUserEmail] = useState();

    function enviarEmail(e) {
        e.preventDefault();
        setUserEmail(email);
        console.log(userEmail);
    }

    return (

        <div>
            <h2>Cadastre seu e-mail garai</h2>
            <form>
                <input type="email" name="email" id="email" placeholder="Digite email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <button onClick={enviarEmail}>Enviar</button>
            </form>
            {userEmail && (
                <div>
                    <p>{userEmail}</p>
                </div>
            )}
        </div>
    );
}

export default Condicional;