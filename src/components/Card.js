import '../styles/Card.css';

function Card({_id, _cover, _titre}) {
    return (
        <figure key={_id}>
            <div></div>
            <img src={_cover} alt='' />
            <figcaption>
                {_titre}
            </figcaption>
        </figure>
    );
  }
  
  export default Card;