import { memo } from "react"


export const Small = memo(({counter}) => {

    console.log('Me volví a cargar :(');

    return (
        <small>{counter}</small>
    )
})
