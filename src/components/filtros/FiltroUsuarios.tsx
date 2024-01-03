import { useTemplate } from "../../hooks/useTemplate";
import { FiltroProps } from "../types";

export default function FiltroUsuarios(props: FiltroProps) {

    const { OnHandleProcessar } = props;

    return (
        <div className="area-lateral area-lateral-direita">
            <h4 className="py-2">Filtrar Usuários</h4>
            <div className="row py-2">
                <div className="input-group">
                    <span className="input-group-text">Username</span>
                    <input className="form-control" type="text" name="username" />
                </div>
            </div>
            <div className="row py-2">
                <div className="col-md-6">
                </div>
                <div className="col-md-6">
                    <button className="btn btn-primary" onClick={OnHandleProcessar}>Processar</button>
                    <button className="btn btn-default">Limpar</button>
                </div>
            </div>
        </div>
    );
}