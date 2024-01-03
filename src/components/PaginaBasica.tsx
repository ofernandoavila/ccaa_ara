import Header from "./common/Header";
import MenuHeader from "./common/MenuHeader";
import AreaDestaque from "./popup/AreaDestaque";
import AreaLateral from "./popup/AreaLateral";
import { PaginaBasicaProps } from "./types";

export default function PaginaBasica(props: PaginaBasicaProps) {
    
    const { children } = props;
    
    return (
        <>
            <AreaDestaque />
            <Header />
            <MenuHeader />
            <main className="container pt-4">
                { children }
            </main>
        </>
    );
}