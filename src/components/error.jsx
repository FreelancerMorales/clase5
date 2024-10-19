import { useState } from "react";

export const Error = ({message, onClose}) => {
    const [activo, setActivo] = useState(true);

    const cerrarError = () => {
        setActivo(false);
        onClose();
    }

    return (
        activo && (
            <div id="error" className="activo">
                <button onClick={cerrarError}>X</button>
                <h2>Error</h2>
                <p>{message}</p>
            </div>
        )
    )
}
