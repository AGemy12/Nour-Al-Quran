
import './MainLink.css';

function MainLink(props) {
    return (
        <a className='navbar-links-ul-li-link' href={props.href}>{props.title}</a>
    );
};

export default MainLink;