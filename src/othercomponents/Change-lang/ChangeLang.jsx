import egyptFlag from '../../assets/egypt flag.png';
import americanFlag from '../../assets/american flag.jpg';
import { useTranslation } from 'react-i18next';
import { RiArrowDropDownLine } from 'react-icons/ri'
import './ChangeLang.css';

function ChangeLang() {
    const [, i18n] = useTranslation();

    if (localStorage.getItem('lng') === 'ar') {
        document.body.style.direction = 'rtl';
    } else {
        document.body.style.direction = 'ltr';
    }

    const handelChangeLng = (lng) => {
        i18n.changeLanguage(lng);
        localStorage.setItem("lng", lng);
    }

    return(
        <div className="lang-change">
            <div className="default-lang">
                <div className="lang-icon">
                    <RiArrowDropDownLine size={30} />
                </div>
                <img src={(localStorage.getItem('lng') === 'en') ? americanFlag : egyptFlag} alt="" id='flagLang' 
                />
            </div>
            <div className="choosen-lang">
                <div className="arabic-lang" onClick={() => {
                    handelChangeLng("ar");
                    const flagLng = document.getElementById('flagLang');
                    flagLng.src = egyptFlag;
                }}>
                    <img src={egyptFlag} alt="" />
                    <span>العربية</span>
                </div>
                <div className="english-lang" onClick={() => {
                    handelChangeLng("en");
                }}>
                    <img src={americanFlag} alt="" />
                    <span>English</span>
                </div>
            </div>
        </div>
    )
}

export default ChangeLang;