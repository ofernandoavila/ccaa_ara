import { ReactNode } from "react"

type PaginaBasicaProps = {
    children?: ReactNode;
}

type GridProps<T extends Record<string, any>> = {
    renderItem: (item:T) => JSX.Element;
    nomeChave?: string;
    data?: T[];
    actions?: {
        previa?: GridAction;
        editar?: GridAction;
        remover?: GridAction;
    };
}

type GridAction = {
    icone?: string;
    acao: () => void;
}

type AreaDestaqueProps = {
    children?: ReactNode;
}

type FiltroProps = {
    OnHandleProcessar: any;
}

type BotaoFiltroProps = {
    filtro: JSX.Element;
}