import '../styles/Slider.css';
import { useState, useEffect } from 'react';
import fleche_R from '../assets/Vector_R.png';
import fleche_L from '../assets/Vector_L.png';
import fleche_R_M from '../assets/Vector_R_m.png';
import fleche_L_M from '../assets/Vector_L_m.png';


function Slider({img}) {
    
    const [CheckMobile, setCheckMobile] = useState(window.matchMedia("(max-width: 767.98px)").matches);
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const handler = (e) => setCheckMobile(e.matches);
        const matchMedia = window.matchMedia("(max-width: 767.98px)");
    
        matchMedia.addEventListener('change', handler);
        return () => matchMedia.removeEventListener('change', handler);
    }, []);

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
                    { CheckMobile ? (
                        <>
                        <img src={fleche_L_M} onClick={prevImage} alt='precedent' className='slider__fleche__L'/>
                        <img src={fleche_R_M} onClick={nextImage} alt='suivant' className='slider__fleche__R'/>
                        </>
                    ) : (
                        <>
                        <img src={fleche_L} onClick={prevImage} alt='precedent' className='slider__fleche__L'/>
                        <img src={fleche_R} onClick={nextImage} alt='suivant' className='slider__fleche__R'/>
                        </>
                    )}
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
  