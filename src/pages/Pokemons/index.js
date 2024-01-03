import { useEffect, useState } from "react"

import api from '../../services/api'

export default function Pokemons(){
    const [pokemons, setPokemons] = useState([])
    
    async function handleCarregarLista(){
        const response = await api.get("https://pokeapi.co/api/v2/pokemon/")
        const _pokemons = []
        
        response.data.results.map((item) => {
            _pokemons.push(item.name + " - " + item.url)
        })
        setPokemons(_pokemons)
    }

    return(
        <div>
            <h1>Minha lista</h1>
            <ul>
                {
                    pokemons.map((item, index) => {
                        return <li key={index}>{item}</li>;
                    })
                }
            </ul>
            <button onClick={handleCarregarLista}>Adicionar</button>
            <button onClick={()=>{
                const poke = "estatico poke"
                const _pokemons = [...pokemons, poke]
                setPokemons(_pokemons)
            }}>Add poke estatico (Teste)</button>
        </div>
    )
}