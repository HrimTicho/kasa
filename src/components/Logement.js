import '../styles/Logement.css';
import Header from './Header';
import Footer from './Footer';
import Rating from './Rating';
import Drop_Info from './Drop_Info';
import DATAS from '../datas/logements.json';
import { useParams } from 'react-router-dom';

function Logement() {

    const {id} = useParams();
    const _L = DATAS.find(DATAS => DATAS.id === id);

    return (
        <div>
            <Header />
            <main>
                <div className='slider'>
                    {_L.pictures.map((n) => (
                        <img src={n} alt='img' />
                    ))}
                </div>
                <div className='Descr'>
                    <div className='Descr__Titre'>
                        <h2>{_L.title}</h2>
                        <p>
                            {_L.location}
                        </p>
                    </div>
                    <p className='Descr__Person'>
                        {_L.host.name}
                        <img src={_L.host.picture} alt="avatar" />
                    </p>
                    <ul className='Descr__Tags'>
                        {_L.tags.map((n) => (
                            <span key={id} >{n}</span>
                        ))}
                    </ul>
                    <div className='Descr__Rating'>
                        <Rating _note={_L.rating} />
                    </div>
                    <div className='Descr__Description'>
                        <Drop_Info _info={_L.description} />
                    </div>
                    <div className='Descr__Equipement'>
                        <Drop_Info _info={_L.equipments} />
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
  }
  
  export default Logement;
  