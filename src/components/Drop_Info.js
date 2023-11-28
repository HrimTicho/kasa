import '../styles/Drop_Info.css';

function Drop_Info({_info}) {
    const CheckArray = Array.isArray(_info);
    const title = CheckArray ? 'Equipements' : 'Description';

    return (
        <div className='Drop'>
            <span>{title}</span>
            {CheckArray ? 
            <ul>
                {_info.map((n) =>(
                    <li>{n}</li>
                ))}
            </ul> : 
            <p>
                {_info}
            </p>}
        </div>
    );
  }
  
  export default Drop_Info;
  