import { Link } from "react-router-dom";

export default function MenuHeader() {
    return (
        <nav id="menu-header" className="">
            <ul className="container d-flex" style={{ gap: '20px' }}>
                <li><Link to={'/'}>Home</Link></li>
                <li className="dropdown-menu-parent">
                    <Link to={'/avaliacoes'}>Avaliações</Link>
                    <ul className="dropdown-menu">
                        <li><Link to={'/avaliacoes'}>Avaliação</Link></li>
                        <li><Link to={'/avaliacoes/tecnicas'}>Técnicas de avaliação</Link></li>
                    </ul>
                </li>
                <li className="dropdown-menu-parent">
                    <Link to={'/formularios'}>Formulários</Link>
                    <ul className="dropdown-menu">
                        <li><Link to={'/formularios'}>Formulários</Link></li>
                        <li><Link to={'/formularios/passos'}>Passos</Link></li>
                        <li><Link to={'/formularios/grupos'}>Grupos</Link></li>
                        <li><Link to={'/formularios/perguntas'}>Perguntas</Link></li>
                        <li><Link to={'/formularios/respostas'}>Respostas</Link></li>
                    </ul>
                </li>
                <li><Link to={''}>Relatórios</Link></li>
                <li><Link to={''}>Usuários</Link></li>
            </ul>
        </nav>
    );
}