import '../styles/Logement.css';
import Header from './Header';
import Footer from './Footer';
import Rating from './Rating';
import DropInfo from './DropInfo';
import Slider from './Slider';
import DATAS from '../datas/logements.json';
import { useParams } from 'react-router-dom';

function Logement() {

    const {id} = useParams();
    const _L = DATAS.find(DATAS => DATAS.id === id);

    if(!_L){
        return(
            <div>
            <Header />
            <main>
                <div>
                    Logement inconnu
                </div>
            </main>
            <Footer />
        </div>
        )
    }

    const userName = _L.host.name.split(' ');

    return (
        <div>
            <Header />
            <main>
                <div className='slider_bloc'>
                    <Slider img={_L.pictures} />
                </div>
                <div className='Descr'>
                    <div className='Descr__Titre'>
                        <h2>{_L.title}</h2>
                        <p>
                            {_L.location}
                        </p>
                    </div>
                    <div className='Descr__Person'>
                        <div className='Descr__Person__Name'>
                        {userName.map((n, index) => (
                            <p key={id+index} >{n}</p>
                        ))}
                        </div>
                        <img src={_L.host.picture} alt="avatar" />
                    </div>
                    <div className='Descr__Tags'>
                        {_L.tags.map((n, index) => (
                            <span key={id+index} >{n}</span>
                        ))}
                    </div>
                    <div className='Descr__Rating'>
                        <Rating note={_L.rating} />
                    </div>
                    <div className='Descr__Description'>
                        <DropInfo name={'Description'} info={_L.description} />
                    </div>
                    <div className='Descr__Equipement'>
                        <DropInfo name={'Équipements'} info={_L.equipments} />
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
  }
  
  export default Logement;
  