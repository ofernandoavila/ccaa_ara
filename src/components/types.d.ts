import { ReactNode } from "react"

type PaginaBasicaProps = {
    children?: ReactNode;
}

type GridProps<T extends Record<string, any>> = {
    nomeChave?: string;
    data?: T[];
}