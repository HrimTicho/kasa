import '../styles/Error.css';
import Header from './Header';
import Footer from './Footer';

function Error() {
    return (
        <div>
            <Header />
            <main>
            <div className='error'>
                <h1>404</h1>
                <p>Oups! La page que vous demandez n'existe pas.</p>
                <a href="/">Retourner sur la page d'accueil</a>
            </div>
            </main>
            <Footer />
        </div>
    )
}
 
export default Error