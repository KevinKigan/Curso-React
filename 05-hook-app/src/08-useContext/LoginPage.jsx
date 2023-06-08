import { useContext } from "react"
import { UserContext } from "./context/UserContext"

export const LoginPage = () => {

    const { user, setUser } = useContext(UserContext)

    return (
        <>
            <h1>LoginPage</h1>
            <hr></hr>
            <button
                className="btn btn-primary"
                onClick={() => setUser({
                    id: 123,
                    name: 'Kevin',
                    email: '@gmail.com'
                })}>
                Establecer usuario
            </button>
        </>
    )
}
