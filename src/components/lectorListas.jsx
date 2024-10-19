import { useEffect, useState } from "react";
import { Listado } from "./listado"


export const LectorListas = () =>{
    const name = ["Juan", "Pedro", "Maria"];
    const [nombres,  setNombres] = useState(name);
    const [nombreEditado, setNombreEditado] = useState('');
    const [indexEditado, setIndexEditado] = useState(null);

    useEffect(() => {
        if (indexEditado!=null) {
            setNombreEditado(nombres[indexEditado]);
        }else{
            setNombreEditado('');
        }
    }, [indexEditado, nombres]);

    const eliminarNombre =  (index) => {
        const nuevosNombres  = nombres.filter((_,i) => i !== index);
        setNombres(nuevosNombres);
    }

    const comenzarEdicion =  (index) => {
        setIndexEditado(index);
    }

    const manejarCambio = (e) => {
        setNombreEditado(e.target.value);
    }


    const guardarEdicion = (index) => {
        const nuevosNombres  = nombres.map((nombres, i) => ( i === index ? nombreEditado:nombres));

        setNombres(nuevosNombres);
        setIndexEditado(null)
    }


    return(
        <>
            <Listado lista={name} />
            <div>
                <h2>Segunda Lista</h2>
                <ul>
                    {nombres.map((nombre, index) =>(
                        <li key={index}>
                            {indexEditado === index ?(
                                <>
                                    <input type="text" value={nombreEditado} onChange={manejarCambio} />
                                    <button onClick={()=>guardarEdicion(index)}>Guardar</button>
                                </>
                                ):( 
                                    <>
                                    <span>{nombre}</span>
                                    <button onClick={() => comenzarEdicion(index)}>Editar</button>
                                    <button onClick={() => eliminarNombre(index)}>Eliminar</button>
                                    </>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}