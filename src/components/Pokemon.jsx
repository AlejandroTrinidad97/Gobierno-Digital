import { Link } from 'react-router-dom';
import pokeballsvg from './../assets/Pokeball.png';

const Pokemon = ({ pokemon }) => {
    const { name } = pokemon
    return (
       <div className="card" style={{width: "15rem", textTransform: "uppercase", display: "flex"}}>
            <div className="card-body">
                <img className="card-img-top" src={ pokeballsvg } width = { 10 } height={ 200 } alt="¿Quien es Ese Pokemon?"></img>
                <center>{ name }</center>
                <br></br>
                <center><Link to={`${name}`} className='btn btn-primary'>Ver pokemon</Link></center>
            </div>
       </div> 
    )
}

export default Pokemon;