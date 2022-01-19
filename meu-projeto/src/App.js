import './App.css';
import Condicional from './components/Condicional';
import Lista from './components/Lista';

function App() {

    const minhaLista = ['React', 'Vue', 'Angular'];

    return (
        <div className="App">
            <h1>Listinhas</h1>
            <Lista></Lista>
        </div>
    );
}

export default App;