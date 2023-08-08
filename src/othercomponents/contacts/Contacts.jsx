import { RiWhatsappFill, RiFacebookCircleFill, RiMailSettingsFill, RiInstagramFill, RiTwitterFill } from 'react-icons/ri';
import Instgram from '../../assets/instagram.svg';
import Email from '../../assets/mail.svg';
import './Contacts.css';

function Contacts() {
    return(
        <>
            <div className="contacts-facebook cont-us">
                <a className='contact-link' target='__blank' href="https://www.facebook.com/profile.php?id=100087955878394">
                    <RiFacebookCircleFill />
                </a>
            </div>
            <div className="contacts-whatsapp cont-us">
                <a className='contact-link' target='__blank' href="https://wa.me/+201018278920">
                    <RiWhatsappFill />
                </a>
            </div>
            <div className="contacts-instagram cont-us">
                <a className='contact-link' target='__blank' href="https://instagram.com/nourulquran.academy?igshid=ZDdkNTZiNTM=">
                    <img src={Instgram} alt="" />
                </a>
            </div>
            <div className="contacts-twitter cont-us">
                <a className='contact-link' target='__blank' href="https://twitter.com/nour_ul_quran?t=aW29wj5kuCunsRfL-1OMtQ&s=08">
                    <RiTwitterFill />
                </a>
            </div>
            <div className="contacts-gmail cont-us">
                <a className='contact-link' target='__blank' href="mailto:info@nourulquranacademy.com">
                    <img src={Email} alt="" />
                </a>
            </div>
        </>
    )
}

export default Contacts;