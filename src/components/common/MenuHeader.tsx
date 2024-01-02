import { Link } from "react-router-dom";

export default function MenuHeader() {
    return (
        <nav id="menu-header" className="">
            <ul className="container d-flex justify-content-between">
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/avaliacoes'}>Avaliações</Link></li>
                <li><Link to={''}>Relatórios</Link></li>
                <li><Link to={''}>Usuários</Link></li>
            </ul>
        </nav>
    );
}