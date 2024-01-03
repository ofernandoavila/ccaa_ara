import { Link } from "react-router-dom";
import PaginaBasica from "../../components/PaginaBasica";
import FiltroAvaliacoes from "../../components/filtros/FiltroAvaliacoes";
import { useTemplate } from "../../hooks/useTemplate";
import BotaoFiltro from "../../components/buttons/BotaoFiltro";
import Grid from "../../components/form/Grid";

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

export default function AvaliacoesPagina() {
    const { setAreaDestaque, setFiltro } = useTemplate();

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
                    <BotaoFiltro filtro={<FiltroAvaliacoes OnHandleProcessar={OnHandleProcessarFiltro} />} />
                </div>
            </div>
            <div className="resultados">
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
            </div>
        </PaginaBasica>
    );
}