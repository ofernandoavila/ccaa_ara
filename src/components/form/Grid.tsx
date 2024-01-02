import { useEffect, useState } from "react";
import { GridProps } from "../types";

export default function Grid<T extends Record<string, any>>(props: GridProps<T>) {
    const { data, nomeChave } = props;
    const [chaves, setChaves] = useState<string[]>();

    useEffect(() => {
        if(data != undefined && data.length > 0) {
            let obj = data[0];
            let chaves = Object.keys(obj);
            setChaves(chaves);
        }
    });

    if(chaves == undefined) return (<p>Não há dados para mostrar...</p>);

    return (
        <table className="table">
            <thead>
                <tr>{ chaves.map( item => ( <th scope="col">{item}</th> )) }</tr>
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
    );
}