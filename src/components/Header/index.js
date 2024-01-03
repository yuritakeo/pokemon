import { Link } from "react-router-dom"

import "./header.css"

import imagemPokeBola from '../../asserts/pokebola.png'

export default function Header(){
    return(
        <header>
            <Link className="logo" to="/">
                <img src={imagemPokeBola}/>
            </Link>
            <Link className="pokemons" to="/pokemons">Pokemons</Link>
        </header>
    )
}