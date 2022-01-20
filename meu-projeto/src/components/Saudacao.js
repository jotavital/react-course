function Saudacao({ nome }) {

    function gerarSaudacao(algumNome){
        return `Olá querido ${algumNome}!`;
    }

    return (
        <div>
            <p>{gerarSaudacao(nome)}</p>
        </div>
    );
}

export default Saudacao;