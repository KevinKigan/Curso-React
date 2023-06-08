import React from 'react'
import queryString from 'query-string'
import { useForm } from '../../hooks/useForm'
import { useLocation, useNavigate } from 'react-router-dom'
import { getHeroesByName } from '../helpers'
import { HeroItem } from '../components'

export const SearchPage = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const { q = '' } = queryString.parse(location.search);
  const heroes = getHeroesByName(q);

  const { searchText, onInputChange } = useForm({
    searchText: q
  })

  const onSearchSubmit = (event) => {
    event.preventDefault();
    // if (searchText.trim().length <= 1) return;
    navigate(`?q=${searchText}`);
  }

  return (
    <>
      <div>SearchPage</div>
      <hr></hr>

      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr></hr>
          <form onSubmit={onSearchSubmit}>
            <input
              type='text'
              placeholder='Search a hero'
              className='form-control'
              name='searchText'
              autoComplete='off'
              value={searchText}
              onChange={onInputChange}
            ></input>
            <button className='btn btn-outline-primary mt-1'>
              Search
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />
          {
            (q === '')
              ? <div className="alert alert-primary animate__animated animate__fadeIn">Search a hero</div>
              : (heroes.lenght === 0)
              && <div className="alert alert-danger animate__animated animate__fadeIn">No hero {q} founded</div>
          }
          {
            heroes.map(hero => (
              <HeroItem key={hero.id} hero={hero}></HeroItem>
            ))
          }
        </div>
      </div>

    </>
  )
}
