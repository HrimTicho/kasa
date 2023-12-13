import '../styles/Home.css';
import _b from '../assets/banner.png';
import Card from './Card';
import DATAS from '../datas/logements.json';

function Home() {
    return (
        <main>
            <div className='banner'>
                <img src={_b} alt='Blabla' />
                <div>
                    <p>
                        Chez vous, partout et ailleurs
                    </p>
                </div>
            </div>
            <div className='card_list'>
                {DATAS.map(({id, cover, title}) => (
                    <Card
                    key={id} 
                    _id={id} 
                    _cover={cover} 
                    _titre={title} />
                )
                )}
            </div>
        </main>
    );
  }
  
  export default Home;
  