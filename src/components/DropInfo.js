import '../styles/Drop_Info.css';
import {useState} from 'react'
import arrow_H from '../assets/Vector_H.png'
import arrow_B from '../assets/Vector_B.png'

function DropInfo({info, name}) {
    const [checkOpen, setCheckOpen] = useState(false);


    return (
        <div className='Drop'>
            <div onClick={()=>
                checkOpen ? setCheckOpen(false)
                : setCheckOpen(true)
            } className='Drop__Top'>
                <span>{name}</span>
                <img src={
                    checkOpen ? arrow_H : arrow_B
                    } alt='fleche' />
            </div>
            { checkOpen ?
                <div className='Drop__Content'>
                {Array.isArray(info) ? 
                    <ul>
                        {info.map((n, index) =>(
                            <li key={n+index}>{n}</li>
                        ))}
                    </ul> : 
                    <p>
                        {info}
                    </p>
                }
                </div>
            : <div></div>}
        </div>
    );
  }


  
  export default DropInfo;
  