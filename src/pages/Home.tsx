import PaginaBasica from "../components/PaginaBasica";
import FiltroUsuarios from "../components/filtros/FiltroUsuarios";
import { useTemplate } from "../hooks/useTemplate";

export default function Home() {

    const { setAreaDestaque, setFiltro } = useTemplate();

    const HandleOpenFilter = (e: any) => {
        setFiltro(<FiltroUsuarios OnHandleProcessar={OnHandleProcessarFiltro} />);
        setAreaDestaque(true);
    }

    function OnHandleProcessarFiltro() {
        setAreaDestaque(false);
    }

    return (
        <PaginaBasica>
            <div className="d-flex justify-content-between py-4">
                <h2>Home</h2>
                <button onClick={HandleOpenFilter} className="btn btn-primary">Abrir filtro</button>
            </div>
        </PaginaBasica>
    );
}