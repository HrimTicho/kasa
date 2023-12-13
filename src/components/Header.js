import '../styles/Header.css';
import logo from '../assets/LOGO.png'

function Header() {
    return (
        <header>
            <img src={logo} alt='logo' />
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
  