import { useCounter, useFetch } from "../hooks"
import { LoadingQuote, Quote } from "./"


export const MultipleCustomHooks = () => {

    const {counter, increment} = useCounter(1)
    const { data, isLoading, hasError } = useFetch(`https://rickandmortyapi.com/api/character/${counter}`)

    // const { name, species } = !!data && data[0]? data[0] : '' // data puede ser undefined hasta que termine el fetch. con !data undefined pasa a true y con !!data se pasa a false y ya sirve como condicion booleana
    const { name, species } = !isLoading && data ? data : ''

    return (
        <>
            <h1>MultipleCustomHooks</h1>

            <hr></hr>

            {
                isLoading
                ? <LoadingQuote></LoadingQuote>
                : <Quote name = {name} species = {species}></Quote>
            }

            <button className="btn btn-primary" onClick={() => increment(1)}>
                Siguiente personaje
            </button>
            

            
        </>
    )
}
