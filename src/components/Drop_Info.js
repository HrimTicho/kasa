import '../styles/Drop_Info.css';
import {useState, useEffect} from 'react'

function Drop_Info({_info}) {
    const checkArray = Array.isArray(_info);
    const title = checkArray ? 'Equipements' : 'Description';
    const [checkOpen, setCheckOpen] = useState(false);

    return (
        <div className='Drop'>
            <span onClick={()=>
                checkOpen ? setCheckOpen(false)
                : setCheckOpen(true)
            }>{title}</span>
            
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
  