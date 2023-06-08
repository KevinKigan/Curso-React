import React from 'react'
import { Link } from 'react-router-dom';

export const HeroItem = ({ hero }) => {

  const heroImageUrl = `/src/assets/heroes/${hero.id}.jpg`;

  return (
    <div className='col animate__animated animate__fadeIn'>
      <div className='card'>
        <div className='row no-gutters'>
          <div className='col-4'>
            <img src={heroImageUrl} className='card-img' alt={hero?.superhero} />
          </div>

          <div className="col-8">
            <div className="card-body">
              <div className="card-title">
                <h5 className='card-text'>{hero?.superhero}</h5>
                <p className='card-text'>{hero?.alter_ego}</p>
                {
                  (hero?.alter_ego !== hero?.characters) && (<p>{hero.characters}</p>)
                }
                <p className='card-text'>
                  <small className='text-muted'>{hero?.first_appearance}</small>
                </p>
                <Link to={`/hero/${hero.id}`}>
                Más...
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <p>{hero?.superhero}</p>
  )
}
