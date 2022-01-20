function Lista({ itens }) {

    return (
        <>
            <h3>Lista das coisinha boa da vida</h3>
            {
                itens.length > 0 ? (
                    itens.map((item, index) => (
                        <p key={index}>Item {index} é {item}</p>
                    ))
                ) : (
                    <p>tem nada</p>
                )

            }
        </>
    );
}

export default Lista;