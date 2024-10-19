
export const Listado = ({lista}) =>{
    return (
        <>
            <ul>
                {lista.map((item, index) =>(
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </>
    )
}