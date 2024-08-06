import { useFetch } from "../hooks/useFetch"

export const MultipleCustomHooks = (url) => {
    
    const {data, hasError, isLoading} = useFetch('https://pokeapi.co/api/v2/pokemon/2')
  
    return (
        <>
            <h1>Informacion de Pokemon</h1>
            <hr />

            { isLoading && <p>Cargando...</p> }

            <h2>{data?.name}</h2>

            <pre>{ JSON.stringify( data,null,2) }</pre>
        </>
  )
}
