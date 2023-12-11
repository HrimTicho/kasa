import '../styles/Drop_Info.css';
import {useState, useEffect} from 'react'
import arrow_H from '../assets/Vector_H.png'
import arrow_B from '../assets/Vector_B.png'

function Drop_Info({_info}) {
    const checkArray = Array.isArray(_info);
    const title = checkArray ? 'Equipements' : 'Description';
    const [checkOpen, setCheckOpen] = useState(false);


    return (
        <div className='Drop'>
            <div onClick={()=>
                checkOpen ? setCheckOpen(false)
                : setCheckOpen(true)
            } className='Drop__Top'>
                <span>{title}</span>
                <img src={
                    checkOpen ? arrow_H : arrow_B
                    } alt='fleche' />
            </div>
            { checkOpen ?
                <div className='Drop__Content'>
                {checkArray ? 
                    <ul>
                        {_info.map((n) =>(
                            <li>{n}</li>
                        ))}
                    </ul> : 
                    <p>
                        {_info}
                    </p>
                }
                </div>
            : <div></div>}
        </div>
    );
  }


  
  export default Drop_Info;
  