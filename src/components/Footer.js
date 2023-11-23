import '../styles/Footer.css';
import _l from '../assets/LOGO_w.png'

function Footer() {
    return (
        <footer>
            <img src={_l} alt='logo' />
            <p>
                © 2020 Kasa. All rights reserved
            </p>
        </footer>
    );
  }
  
  export default Footer;