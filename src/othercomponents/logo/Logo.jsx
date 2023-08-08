import LogoImg from '../../assets/Logo.png';
import './Logo.css';

function Logo() {
    return(
        <a className='navbar-logo-link' href='/'>
            <img className='navbar-logo-link-img' src={LogoImg} alt="" />
        </a>
    );
};


export default Logo;