import '../styles/Card.css';
import { useNavigate } from 'react-router-dom';

function Card({_id, _cover, _titre}) {

    let nav = useNavigate();
    const route = () =>{
        nav(`logement/${_id}`);
    }

    return (
        <figure onClick={route}>
            <div></div>
            <img src={_cover} alt='cover' />
            <figcaption>
                {_titre}
            </figcaption>
        </figure>
    );
  }
  
  export default Card;