import './App.css';
import Lista from './components/Lista';

function App() {

    const minhaLista = ['React', 'Vue', 'Angular'];

    return (
        <div className="App">
            <h1>Listinhas</h1>
            <Lista itens={minhaLista}></Lista>
        </div>
    );
}

export default App;