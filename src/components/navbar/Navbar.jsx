import { useState } from 'react';
import { MainLink, Logo, Contacts, ChangeLang } from '../../othercomponents';
import { RiArrowDownSLine, RiArrowDropDownLine, RiArrowDropUpLine , RiAlignJustify, RiCloseLine, RiArrowLeftSLine } from 'react-icons/ri';
import { useTranslation } from 'react-i18next';
import './Navbar.css';

function Navbar() {
    const [togglerMenu, setTogglerMenu] = useState(false);
    const [nestedMenu, setNestedMenu] = useState(false);
    const [t] = useTranslation();

    return(
        <div className='navbar padding' id='navbar'>
            <div className="navbar-logo">
                <Logo />
            </div>
            <div className='navbar-links'>
                <ul className='navbar-links-ul'>
                    <li className='navbar-links-ul-li'>
                        <MainLink title ={t('home')} href = '/' />
                    </li>
                    <li className='navbar-links-ul-li'>
                        <MainLink title ={t('courses')} href = '/#' />
                        <RiArrowDownSLine />
                        <div className="nested-link" >
                            <p className='nested-link-container'>
                                <div className="nested-link-container-inner">
                                    <MainLink title ={t('quran courses')} href = '/quran-courses' />
                                    <RiArrowLeftSLine />
                                </div>
                                <div className="inner-courses" id='inner-courses'>
                                    <ul className='inner-courses-ul'>
                                        <li className='inner-courses-ul-li'>
                                            <MainLink title ={t('recitation')} href = '/quran-courses/recitation' />
                                        </li>
                                        <li className='inner-courses-ul-li'>
                                            <MainLink title ={t('memorization')} href = '/quran-courses/memorization' />
                                        </li>
                                        <li className='inner-courses-ul-li'>
                                            <MainLink title ={t('ijazat quranic')} href = '/quran-courses/ijazah' />
                                        </li>
                                    </ul>
                                </div>
                            </p>
                            <p className='nested-link-container'>
                                <MainLink title ={t('islamic studies')} href = '/islamic' />
                            </p>
                            <p className='nested-link-container'>
                                <MainLink title ={t('arabic language')} href = '/arabic' />
                            </p>
                        </div>
                    </li>
                    <li className='navbar-links-ul-li'>
                        <MainLink title ={t('fees')} href = '/fees' />
                    </li>
                    <li className='navbar-links-ul-li'>
                        <MainLink title ={t('about academy')} href = '/about' />
                    </li>
                    <li className='navbar-links-ul-li'>
                        <MainLink title ={t('contact us')} href = '/contact' />
                    </li>
                </ul>
            </div>
            <div className="contacts">
                <Contacts />
            </div>
            <div className="free-class">
                <a className='free-class-link' href="/contact">{t('start your free sessino')}</a>
            </div>
            <div className="lang-change">
                <ChangeLang />
            </div>
            <div className="mini-nav-bar">
                {
                    togglerMenu 
                    ? <RiCloseLine color='#000' size={26} onClick={() => {setTogglerMenu(false)}}/>
                    : <RiAlignJustify color='#000' size={26} onClick={() => {setTogglerMenu(true)}}/>
                }
                {
                    togglerMenu && (
                        <div className="mini-navbar-links">
                            <ul className='mini-list'>
                                <li className='mini-list-li'>
                                    <MainLink title={t('home')} href='/' />
                                </li>
                                <li className='mini-list-li'>
                                    <div className="mini-list-content">
                                        <MainLink title={t('courses')} href='/quran-courses' />
                                    {
                                        nestedMenu 
                                        ? <RiArrowDropDownLine size={30} onClick={() => setNestedMenu(false)} /> 
                                        : <RiArrowDropUpLine size={30} onClick={() => setNestedMenu(true)} /> 
                                    }
                                    </div>
                                    {
                                        nestedMenu && (
                                            <div className="nested-nested-menu nested-">
                                                <ul>
                                                    <li>
                                                        <MainLink title={t('quran courses')} href='/quran-courses' />
                                                    </li>
                                                    <li>
                                                        <MainLink title={t('islamic studies')} href='/islamic' />
                                                    </li>
                                                    <li>
                                                        <MainLink title={t('arabic language')} href='/arabic' />
                                                    </li>
                                                </ul>
                                            </div>
                                        )
                                    }
                                </li>
                                <li className='mini-list-li'>
                                    <MainLink title={t('about academy')}  href='/about' />
                                </li>
                                <li className='mini-list-li'>
                                    <MainLink title={t('contact us')} href='/contact' />
                                </li>
                            </ul>
                            <div className="min-navbar-contacts">
                                <Contacts />
                            </div>
                            <div className="mini-free-class free-class">
                                <a className='mini-free-class-link free-class-link' href="/contact">{t('start your free sessino')}</a>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}


export default Navbar;
