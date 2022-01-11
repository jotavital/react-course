import ListItem from "./ListItem";

function List() {
    return (
        <div id="minhaLista">
            <ul>
                <ListItem marca="Ferrari" ano_lancamento={1958} />
            </ul>
        </div>
    );
}

export default List;