import { Link } from "react-router-dom";
import PaginaBasica from "../../components/PaginaBasica";
import FiltroAvaliacoes from "../../components/filtros/FiltroAvaliacoes";
import { useTemplate } from "../../hooks/useTemplate";

export default function AvaliacoesPagina() {
    const { setAreaDestaque, setFiltro } = useTemplate();

    const HandleOpenFilter = (e: any) => {
        setFiltro(<FiltroAvaliacoes OnHandleProcessar={OnHandleProcessarFiltro} />);
        setAreaDestaque(true);
    }

    function OnHandleProcessarFiltro(dados: any) {
        console.log('teste com dados nome: ' + dados.avaliacao);
        setAreaDestaque(false);
    }

    return (
        <PaginaBasica>
            <div className="d-flex justify-content-between py-4">
                <h2>Avaliações</h2>
                <div>
                    <Link to={'/avaliacoes/avaliar'}><button className="btn btn-primary mx-2">Criar avaliação</button></Link>
                    <button onClick={HandleOpenFilter} className="btn btn-secundary">Filtro</button>
                </div>
            </div>
            <div className="resultados">
                <table className="table">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        </tr>
                        <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        </tr>
                        <tr>
                        <th scope="row">3</th>
                        <td colSpan={2}>Larry the Bird</td>
                        <td>@twitter</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </PaginaBasica>
    );
}