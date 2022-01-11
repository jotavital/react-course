import './App.css';
import HelloWorld from './components/HelloWorld';

function App() {

    const nome = "Vital";
    const imagem = "https://via.placeholder.com/250";

    function sum(val1, val2) {
        return val1 + val2;
    }

    return (
        <div className="App">
            <div>
                <h2>Meu nome é {nome}</h2>
                <p>2 + 2 são exatamente {sum(2, 2)}</p>
            </div>
            <div>
                <img src={imagem} alt={imagem} />
            </div>
            <hr />
            <HelloWorld />
        </div>
    );
}

export default App;