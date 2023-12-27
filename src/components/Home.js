import '../styles/Home.css';
import _b from '../assets/banner.png';
import Banner from './Banner';
import Card from './Card';
import DATAS from '../datas/logements.json';

function Home() {
    return (
        <main>
            <Banner _img={_b} _text={'Chez vous, partout et ailleurs'} />
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
  