import Header from "./common/Header";
import MenuHeader from "./common/MenuHeader";
import { PaginaBasicaProps } from "./types";

export default function PaginaBasica(props: PaginaBasicaProps) {
    
    const { children } = props;
    
    return (
        <>
            <Header />
            <MenuHeader />
            <main className="container pt-4">
                { children }
            </main>
        </>
    );
}