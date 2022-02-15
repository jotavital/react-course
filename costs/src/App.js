import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Contact from './pages/Contact';
import Company from './pages/Company';
import CreateProject from './pages/Projects/CreateProject';

import Container from './components/layouts/Container';

function App() {
    return (
        <Router>
            <Link to='/'>Home</Link>
            <Link to='/contact'>Contato</Link>
            <Link to='/company'>Empresa</Link>
            <Link to='/projects/create'>Criar Projeto</Link>

            <Container customClass="min-h-75">
                <Routes>
                    <Route path='/' element={<Home></Home>}></Route>
                    <Route path='/contact' element={<Contact></Contact>}></Route>
                    <Route path='/company' element={<Company></Company>}></Route>
                    <Route path='/projects/create' element={<CreateProject></CreateProject>}></Route>
                </Routes>
            </Container>

            <p>footer</p>
        </Router>
    );
}

export default App;
