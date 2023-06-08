import { memo } from "react";


export const ShowIncrement = memo(({increment}) => {

    console.log('Me dibujé');

  return (
    <button
    className="btn btn-primary"
    onClick={() => {increment(5);}}
    >Incremantar</button>
  )
})
