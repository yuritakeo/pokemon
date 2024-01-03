import {Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'
import Pokemons from '../pages/Pokemons'

export default function RoutesApp(){
    return(
        <Routes>
            <Route path="/" element={ <Home/> } />
            <Route path="/pokemons" element={ <Pokemons/> } />
        </Routes>
    )
}