import PropTypes from 'prop-types';

function ListItem({marca, ano_lancamento}) {
    return ( 
        <>
            <li>{marca} - {ano_lancamento}</li>
        </>
    );
}

ListItem.propTypes = {
    marca: PropTypes.string,
    ano_lancamento: PropTypes.number.isRequired
}

ListItem.defaultProps = {
    marca: "N/I",
    ano_lancamento: 0
}

export default ListItem;