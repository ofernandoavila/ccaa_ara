import { useEffect, useState } from "react";
import { GridProps } from "../types";

export default function Grid<T extends Record<string, any>>(props: GridProps<T>) {
    const { data, renderItem, actions } = props;
    const [chaves, setChaves] = useState<string[]>();

    useEffect(() => {
        if(data != undefined && data.length > 0) {
            let obj = data[0];
            let chaves = Object.keys(obj);
            setChaves(chaves);
        }
    }, []);

    if(chaves == undefined) return (<p>Não há dados para mostrar...</p>);

    return (
        <table className="table">
            <thead>
                <tr>
                { chaves.map( (item, key) => {
                        return ( <th key={key} scope="col">{item}</th> );
                })}

                { actions != undefined ?
                    (<th scope="col">Ações</th>)
                : ''}
                </tr>
            </thead>
            <tbody>
                { data ? data.map( (item, key) => (
                    <tr key={key}>
                        { renderItem(item) }
                        { actions != undefined ?
                            (
                                <td>
                                    <ul className="d-flex" style={{ gap: '10px' }}>
                                        { actions.previa != undefined ? ( <li onClick={e => actions.previa!.acao}>Ver</li> ) : '' }
                                        { actions.editar != undefined ? ( <li onClick={e => actions.editar!.acao}>Editar</li> ) : '' }
                                        { actions.remover != undefined ? ( <li onClick={e => actions.remover!.acao}>Remover</li> ) : '' }
                                    </ul>
                                </td>
                            )
                        : ''}
                    </tr>
                ) ) : '' }
                
            </tbody>
        </table>
    );
}