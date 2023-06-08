import React from 'react'
import { HeroList } from '../components/HeroList';

export const MarvelPage = () => {

  const publisher = 'Marvel Comics';

  return (
    <>
      <h1>Marvel Comics</h1>
      <HeroList publisher={publisher}></HeroList>
    </>
  )
}
