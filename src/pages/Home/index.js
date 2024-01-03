import { useEffect, useState } from "react"

import api from '../../services/api'

export default function Home(){
    const [pokemons, setPokemons] = useState([])
    
    async function handleCarregarLista(){
        const response = await api.get("https://pokeapi.co/api/v2/pokemon/")
        const _pokemons = []
        
        response.data.results.map((item) => {
            async function handleCarregarDetalhes(){
                const response = await api.get(item.url)
                const poke = response.data.name
                _pokemons.push(poke)
                console.log(response.data.name)
            }
            handleCarregarDetalhes();
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
            <button onClick={() =>{
                const poke = "estatico poke"
                const _pokemons = [...pokemons, poke]
                setPokemons(_pokemons)
            }}>Atualizar (Botao Teste)</button>
        </div>
    )
}