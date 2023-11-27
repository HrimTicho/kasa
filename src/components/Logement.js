import '../styles/Logement.css';
import Header from './Header';
import Footer from './Footer';
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
            </main>
            <Footer />
        </div>
    );
  }
  
  export default Logement;
  