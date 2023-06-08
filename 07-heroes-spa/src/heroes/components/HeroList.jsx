import { useMemo } from "react"
import { getHeroresByPublisher } from "../helpers/getHeroesByPublisher"
import { HeroItem } from "./HeroItem"



export const HeroList = ({ publisher }) => {

    const heroes = useMemo(() => getHeroresByPublisher(publisher), [publisher]);

    return (
        <div className="row rows-cols-1 row-cols-md-3 g-3">
            {
                heroes.map(hero => {
                    return <li key={hero.id}>
                        <HeroItem hero={hero}></HeroItem>
                    </li>
                })
            }
        </div>
    )
}
