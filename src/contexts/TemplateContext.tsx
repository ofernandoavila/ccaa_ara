import { createContext, ReactNode, useEffect, useState } from "react";
import FiltroAvaliacoes from "../components/filtros/FiltroAvaliacoes";

type Template = {
    areaDestaque: boolean;
}

type TemplateContextType = {
    template: Template;
    areaDestaque: boolean;
    
    filtro: JSX.Element;
    setFiltro: React.Dispatch<React.SetStateAction<JSX.Element>>;

    setAreaDestaque: React.Dispatch<React.SetStateAction<boolean>>;
    trocarPropriedadeTemplate: (propriedade: string, valor: any) => void;
}

type TemplateContextProviderProps = {
    children: ReactNode;
}

export const TemplateContext = createContext({} as TemplateContextType);

export function TemplateContextProvider(props: TemplateContextProviderProps) {
    const [template, setTemplate] = useState<Template>({
        areaDestaque: false
    });

    const [areaDestaque, setAreaDestaque] = useState<boolean>(false);
    const [filtro, setFiltro] = useState<JSX.Element>(<FiltroAvaliacoes OnHandleProcessar={null} />);

    function trocarPropriedadeTemplate(propriedade: string, valor: any) {
        let tmp = template;
        if (tmp != undefined && tmp.hasOwnProperty(propriedade)) {
            switch (propriedade) {
                case 'areaDestaque':
                    tmp['areaDestaque'] = valor;
                    break;
            }

            setTemplate(tmp);
        }
    }

    return (
        <TemplateContext.Provider value={{ 
            template, 
            trocarPropriedadeTemplate, 
            areaDestaque, 
            setAreaDestaque,
            filtro,
            setFiltro
        }}>
            {props.children}
        </TemplateContext.Provider>
    );
}