import { Link } from 'react-router-dom';

const Pokemon = ({ pokemon }) => {
    const { name } = pokemon
    return (
       <div>
            <Link to={`${name}`} className='btn btn-primary'>Ver pokemon</Link>
            { name }
       </div> 
    )
}

export default Pokemon;