import React from 'react'
import { HeroList } from '../components/HeroList'

export const DcPage = () => {

  const publisher = 'DC Comics';

  return (
    <>
    <h1>DC Comics</h1>

    <HeroList publisher={publisher}></HeroList>
    </>
  )
}
