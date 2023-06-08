
import { Hijo } from './Hijo'
import { useCallback, useMemo, useState } from 'react';

export const Padre = () => {

    const numeros = [2,4,6,8,10];
    const [valor, setValor] = useState(0);



    const increment = useCallback(
      (num) => {
        setValor( (oldValue) => oldValue + num )
      },
      [],
    )
    

    // for (let i = 0; i < numeros.length; i++) {
    //     useMemo(() => incrementar, [numeros[i]])
        
    // }

    


    return (
        <div>
            <h1>Padre</h1>
            <p> Total: { valor } </p>

            <hr />

            {
                numeros.map( n => (
                    <Hijo 
                        key={ n }
                        numero={ n }
                        incrementar={ increment }
                    />
                ))
            }
            {/* <Hijo /> */}
        </div>
    )
}
