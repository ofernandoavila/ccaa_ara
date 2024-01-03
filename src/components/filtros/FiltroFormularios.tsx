import { useState } from "react";
import { FiltroProps } from "../types";

export default function FiltroFormularios(props: FiltroProps) {

    const { OnHandleProcessar } = props;

    const [formulario, setformulario] = useState('');
    const [dataInicio, setDataInicio] = useState<Date>();
    const [dataFim, setDataFim] = useState<Date>();

    function ProcessarFiltro() {
        var dados = {
            formulario,
            dataFim,
            dataInicio
        };

        OnHandleProcessar(dados);
    }

    return (
        <div className="area-lateral area-lateral-direita">
            <h4 className="py-2">Filtrar formulários</h4>
            <div className="row py-2">
                <div className="input-group">
                    <span className="input-group-text">Avaliação</span>
                    <input onChange={e => setformulario(e.target.value)} value={formulario} className="form-control" type="text" name="avaliacao" />
                </div>
            </div>
            <div className="row py-2">
                <div className="col-md-6">
                    <div className="input-group">
                        <span className="input-group-text">Data início</span>
                        <input onChange={e => setDataInicio(new Date(e.target.value))} className="form-control" type="date" name="data_inicio" />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="input-group">
                        <span className="input-group-text">Data fim</span>
                        <input onChange={e => setDataFim(new Date(e.target.value))} className="form-control" type="date" name="data_fim" />
                    </div>
                </div>
            </div>
            <div className="row py-2">
                <div className="col-md-6">
                </div>
                <div className="col-md-6">
                    <button className="btn btn-primary" onClick={ProcessarFiltro}>Processar</button>
                    <button className="btn btn-default">Limpar</button>
                </div>
            </div>
        </div>
    );
}