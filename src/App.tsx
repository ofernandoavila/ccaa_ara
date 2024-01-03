import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AvaliacoesPagina from './pages/avaliacoes/AvaliacoesPagina';
import { TemplateContextProvider } from './contexts/TemplateContext';
import AvaliarPagina from './pages/avaliacoes/AvaliarPagina';
import FormulariosPagina from './pages/formularios/FormulariosPagina';

function App() {
	return (
		<TemplateContextProvider>
			<Router>
				<Routes>
					<Route path='/' element={ <Home /> } />
					<Route path='/avaliacoes' element={ <AvaliacoesPagina /> } />
					<Route path='/avaliacoes/avaliar' element={ <AvaliarPagina /> } />

					<Route path='/formularios' element={<FormulariosPagina />} />
				</Routes>
			</Router>
		</TemplateContextProvider>
  );
}

export default App;
