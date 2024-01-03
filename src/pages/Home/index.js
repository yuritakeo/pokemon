import { useEffect, useState } from "react"
import api from '../../services/api'

export default function Home(){
    const [pokemons, setPokemons] = useState([])
    
    async function handleCarregarLista(){
        const response = await api.get("https://pokeapi.co/api/v2/pokemon/")
        const _pokemons = await Promise.all(response.data.results.map(async (item) => {
            const detailsResponse = await api.get(item.url)
            return detailsResponse.data.name
        }))
        
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
                const poke = "estático poke"
                const _pokemons = [...pokemons, poke]
                setPokemons(_pokemons)
            }}>Atualizar (Botão Teste)</button>
        </div>
    )
}