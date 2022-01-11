function Evento() {

    function sum(val1, val2) {
        console.log(2 + 2);
        return 2 + 2;
    }

    return (
        <div>
            <div>
                <label htmlFor="val1">val1</label>
                <input type="number" name="val1" id="val1" />
            </div>
            <div>
                <label htmlFor="val2">val2</label>
                <input type="number" name="val2" id="val2" />
            </div>
            <div>
                <button onClick={sum}>Somar</button>
            </div>
        </div>
    );
}

export default Evento;