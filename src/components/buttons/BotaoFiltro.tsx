import { useTemplate } from "../../hooks/useTemplate";
import { BotaoFiltroProps } from "../types";

export default function BotaoFiltro(props: BotaoFiltroProps) {
    
    const { filtro } = props; 
    const { setFiltro, setAreaDestaque } = useTemplate();

    function OnHandleFiltro() {
        setFiltro(filtro);
        setAreaDestaque(true);
    }

    return (
        <button onClick={OnHandleFiltro} className="btn btn-primary">Filtro</button>
    );
}