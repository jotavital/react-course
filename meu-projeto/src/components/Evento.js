import Button from "./Button";

function Evento() {

    function meuEvento() {
        alert("Evento passado por props");
    }

    function outroEvento(){
        alert("Segundo evento!");
    }

    return (
        <div>
            <p>clique para disparar um evento</p>
            <Button event={meuEvento} text="Primeiro evento" />
            <Button event={outroEvento} text="Segundo evento" />
        </div>
    );
}

export default Evento; 