import '../styles/Slider.css';
import { useState } from 'react';
import fleche_R from '../assets/Vector_R.png';
import fleche_L from '../assets/Vector_L.png';

function Slider({img}) {
    
    const [currentImage, setCurrentImage] = useState(0);

    const nextImage = () => {
        setCurrentImage((index) => (index + 1) % img.length);
    };

    const prevImage = () => {
        setCurrentImage((index) => (index - 1 + img.length) % img.length);
    };

    const renderButtons = () => {
        if (img.length > 1) {
            return (
                <div className='slider__fleche'>
                    <img src={fleche_L} onClick={prevImage} alt='precedent' className='slider__fleche__L'/>
                    <img src={fleche_R} onClick={nextImage} alt='suivant' className='slider__fleche__R'/>
                </div>
            );
        }
        return null;
    };

    return (
        <div className='slider'>
            {renderButtons()}
            <img src={img[currentImage]} alt={`img-${currentImage}`} />
        </div>
    );
  }


  
  export default Slider;
  