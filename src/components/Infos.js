import '../styles/Infos.css';
import Header from './Header';
import Footer from './Footer';
import Drop_Info from './Drop_Info';
import _b from '../assets/kalen-emsley.png';

function Infos() {
    return (
        <div>
            <Header />
            <main>
                <div className='banner_info'>
                    <img src={_b} alt='Blabla' />
                </div>
                <div className='Info_list'>
                    <Drop_Info name={'FIabilité'} info={'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.'} />
                    <Drop_Info name={'Respect'} info={'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'} />
                    <Drop_Info name={'Service'} info={'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'} />
                    <Drop_Info name={'Sécurité'} info={'La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l\'hôte qu\'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.'} />
                </div>
            </main>
            <Footer />
        </div>
    );
  }
  
  export default Infos;
  