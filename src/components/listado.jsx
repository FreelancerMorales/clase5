import { useState } from "react";
import { Error } from "./error";

export const Listado = ({ lista }) => {
    const [error, setError] = useState('');

    const simularError = () => {
        setError('Error de servidor');
    }

    const cerrarError = () => {
        setError('');
    }

    return (
        <>
            <ul>
                {lista.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <button onClick={simularError}>Error</button>
            {error && <Error message={error} onClose={cerrarError} />}  {/* Pasamos la función onClose */}
        </>
    );
}
