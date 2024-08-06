export const PokemonCard = ({ id, name, sprites = [] }) => {
    return (
        <section style={{ height: 200 }}>
            <h2 className="text-capitalize" > #{id} - {name} </h2>


            {/* Imagenes */}

            <div>
                <img src={sprites.front_default} alt={name} style={{ width: 100 }} />
                <img src={sprites.front_shiny} alt={name} style={{ width: 100 }} />
                <img src={sprites.back_default} alt={name} style={{ width: 100 }} />
                <img src={sprites.back_shiny} alt={name} style={{ width: 100 }} />


            </div>

        </section>
    )
}
