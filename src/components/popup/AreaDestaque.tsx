import { useTemplate } from "../../hooks/useTemplate";
import { AreaDestaqueProps } from "../types";

export default function AreaDestaque(props: AreaDestaqueProps) {
    const { filtro, areaDestaque, setAreaDestaque } = useTemplate();

    return ( 
        areaDestaque ? 
            <div className="area-destaque">
                <div  onClick={e => setAreaDestaque(false)} className="area-destaque-background"></div>
                { filtro }
            </div> 
            : <></> 
    );
}