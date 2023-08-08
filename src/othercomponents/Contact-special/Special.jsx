import { useTranslation } from 'react-i18next';
import './Special.css';

function Special() {
    const [t] = useTranslation();
    return(
        <div className="quran-type-contacts">
            <h5> {t('contact us')} </h5>
            <p>
                <span>  {t('Email')} : </span>
                <a href="mailto:info@nourulquranacademy.com" >info@nourulquranacademy.com</a>
            </p>
            <p>
                <span> {t('Whatsapp')} : </span>
                <a href="https://wa.me/+201018278920" target='__blank'>+201018278920</a>
            </p>
        </div>
    )
}

export default Special;