import { Contacts, Logo, MainLink } from '../../othercomponents/index';
import { useTranslation } from 'react-i18next';
import './Footer.css';

function Footer() {
    const [t] = useTranslation();
    return(
        <div className="footer">
            <div className="footer-content">
                <div className="footer-links">
                    <h3 className='footer-menu-head footer-head'> {t('menu')} </h3>
                    <ul className='footer-links-ul'>
                        <li className='footer-links-ul-li'>
                            <MainLink title={t('home')} href='/' />
                        </li>
                        <li className='footer-links-ul-li'>
                            <MainLink title={t('quran courses')} href='/quran-courses' />
                        </li>
                        <li className='footer-links-ul-li'>
                            <MainLink title={t('islamic studies')} href='/islamic' />
                        </li>
                        <li className='footer-links-ul-li'>
                            <MainLink title={t('arabic language')} href='/arabic' />
                        </li>
                        <li className='footer-links-ul-li'>
                            <MainLink title={t('about academy')} href='/about' />
                        </li>
                        <li className='footer-links-ul-li'>
                            <MainLink title={t('contact us')} href='/contact' />
                        </li>
                    </ul>
                </div>
                <div className="footer-logo">
                    <Logo />
                </div>
                <div className="footer-contacts">
                    <h3 className='footer-contacts-head footer-head'>{t('contact us')}</h3>
                    <div className="footer-container">
                        <Contacts />
                    </div>
                </div>
            </div>
            <div className="footer-copy-right">
                <p className='copy-right-text'>
                    <a href='/'>{t('Nour Al Quran')}</a> {t('All Rights Reserved.')} 
                </p>
            </div>
        </div>
    )
}

export default Footer;