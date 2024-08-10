import { useCounter } from "../hooks/useCounter"
import { useFetch } from "../hooks/useFetch"
import { LoadingMessage } from "../03-examples/LoadingMessage"
import { PokemonCard } from "../03-examples/PokemonCard"

export const Layout = (url) => {

    const { counter, decrement, increment } = useCounter(1)
    const { data, hasError, isLoading } = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`)

    return (
        <>
            <h1>Informacion de Pokemon</h1>
            <hr />

            {isLoading ? <LoadingMessage/> : <PokemonCard {...data} />}

            <h2>{data?.name}</h2>

            <button className="btn btn-primary  mt-2"
                onClick={() => counter > 1 ? decrement(): null}>
                Anteriores
            </button>
            <button className="btn btn-primary  mt-2"
                onClick={() => increment()}>
                Siguientes
            </button>

            <pre>{JSON.stringify(data, null, 2)}</pre>
        </>
    )
}
