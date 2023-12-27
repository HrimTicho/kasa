import '../styles/Banner.css';

function Banner({_img, _text}) {

    return (
        <div className='banner'>
                <img src={_img} alt='banniere' />
                <div>
                    <p>
                        {_text}
                    </p>
                </div>
            </div>
    );
  }
  
  export default Banner;