import usePokemons from '../hooks/usePokemons'
import Pokemon from './Pokemon';

const ListPokemons = () => {
    const { pokemons } = usePokemons()
    console.log(pokemons)
    return (
        <div>
            { pokemons.map( pokemon => (
				<Pokemon 
					key={pokemon.name}
					pokemon={pokemon}
				/>
			))}
        </div>
        
    )
}


export default ListPokemons;