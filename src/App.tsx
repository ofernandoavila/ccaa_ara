import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AvaliacoesPagina from './pages/avaliacoes/AvaliacoesPagina';

function App() {
	return (
		<Router>
			<Routes>
				<Route path='/' element={ <Home /> } />
				<Route path='/avaliacoes' element={ <AvaliacoesPagina /> } />
			</Routes>
		</Router>
  );
}

export default App;
