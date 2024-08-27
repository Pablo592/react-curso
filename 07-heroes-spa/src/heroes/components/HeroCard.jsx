import { Link } from 'react-router-dom';

const charactersByHero = (alter_ego, characters) => {
    if (alter_ego !== characters) {
        return <p>{characters}</p> ;
    } else {
        return '';
    }
}

export const HeroCard = ({
    id,
    superhero,
    alter_ego,
    first_appearance,
    characters,
    publisher
}) => {

    const imageUrl = `../../assets/heroes/${id}.jpg`

    return (
        <div className='card ms-3' style={{ maxWidth: 540 }}>
            <div className='row no-gutters'>
                <div className='col-md-4'>
                    <img src={imageUrl} className='card-img' alt={superhero} />
                </div>
                <div className='col-md-8'>
                    <div className='card-body'>
                        <h5 className='card-title'>{superhero}</h5>
                        <p className='card-text'>{alter_ego}</p>
        
                        {
                            charactersByHero(alter_ego, characters)
                        }
                        <p className='card-text'>
                            <small className='text-muted'>{first_appearance}</small>
                        </p>
                        <Link to={`/hero/${id}`}>
                            More...
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
