import { useTranslation } from 'react-i18next';
import { Special } from '../../othercomponents';
import './Fees.css';

function Fees() {
    const [t] = useTranslation();
    return(
        <div className="fees padding">
            <div className="heading-sections">
                <h2> {t('fees')} </h2>
            </div>
            <div className="fees-text">
                <p>
                    {t('Nourul-Quran Academy offers affordable fees for all students. Payment is done in advance at the beginning of every month, through easy payment methods.')}
                </p>
            </div>
            <div className="fees-method">
                <p> {t('Students pay £7 ($8) per 1 hour if they take 4 hours or less per month.')} </p>
            </div>
            <div className="fees-method">
                <p> {t('Students pay £6 ($7) per 1 hour if they take 6 or 8 hours per month.')} </p>
            </div>
            <div className="fees-method">
                <p> {t('Students pay £5 ($6) per 1 hour if they take more than 12 hours per month.')} </p>
            </div>
            <Special />
        </div>
    )
}

export default Fees;