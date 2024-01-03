import PaginaBasica from "../../components/PaginaBasica";
import BotaoFiltro from "../../components/buttons/BotaoFiltro";
import FiltroFormularios from "../../components/filtros/FiltroFormularios";
import Grid from "../../components/form/Grid";
import { useTemplate } from "../../hooks/useTemplate";

const formularios = [
    {
        id: 1,
        nome: "Teste formulario 1",
        curso: "English course",
        idioma: "Inglês"
    },
    {
        id: 2,
        nome: "Teste formulario 2",
        curso: "English course",
        idioma: "Inglês"
    },
    {
        id: 3,
        nome: "Teste formulario 3",
        curso: "English course",
        idioma: "Inglês"
    },
    {
        id: 4,
        nome: "Teste formulario 4",
        curso: "English course",
        idioma: "Inglês"
    },
    {
        id: 5,
        nome: "Teste formulario 5",
        curso: "English course",
        idioma: "Inglês"
    }
];

export default function FormulariosPagina() {

    return (
        <PaginaBasica>
            <div className="py-4 d-flex justify-content-between">
                <h3>Formulários</h3>
                <BotaoFiltro 
                    filtro={
                        <FiltroFormularios 
                            OnHandleProcessar={() => {}} 
                        />
                    }
                />
            </div>
            <Grid
                data={formularios}
                renderItem={ item => (
                    <>
                        <td scope="row">{ item.id }</td>
                        <td>{ item.nome }</td>
                        <td>{ item.curso }</td>
                        <td>{ item.idioma }</td>
                    </>
                )}
                actions={{
                    previa: {
                        icone: 'icone',
                        acao: () => {

                        }
                    },
                    remover: {
                        icone: 'icone',
                        acao: () => {

                        }
                    }
                }}
            />
        </PaginaBasica>
    );
}