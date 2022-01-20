function SeuNome({ setNome }) {
    return (
        <div>
            <form action="">
                <label htmlFor="nome">Seu nome: </label>
                <input onChange={(e) => setNome(e.target.value)} type="text" name="nome" id="nome" />
            </form>
        </div>
    );
}

export default SeuNome;