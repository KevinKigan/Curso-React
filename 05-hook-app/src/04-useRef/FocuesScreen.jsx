import { useRef } from "react"


export const FocuesScreen = () => {

    const inputRef = useRef()

    const onClick = () => {
        // document.querySelector('input').select();
        inputRef.current.select()
    }

    return (
        <>
            <h1>FocuesScreen</h1>
            <hr></hr>

            <input
                ref={inputRef}
                type="text"
                className="form-control"
                placeholder="Ingrese su nombre"
            />

            <button className="btn btn-primary mt-4" onClick={onClick}>
                Botón
            </button>
        </>

    )
}
