import '../styles/Header.css';
import logo from '../assets/LOGO.png'
import { useNavigate } from 'react-router-dom';

function Header() {
    let nav = useNavigate();
    const route = () =>{
        nav(`/`);
    }

    return (
        <header>
            <img src={logo} alt='logo' onClick={route}/>
            <nav>
                <ul>
                <li>
                    <a href="/">Accueil</a></li>
                    <li><a href="/infos">A Propos</a></li>
                </ul>
            </nav>
        </header>
    );
  }
  
  export default Header;
  