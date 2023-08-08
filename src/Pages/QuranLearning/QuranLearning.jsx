import { SelectPro } from '../../othercomponents/index';
import recitaion from '../../assets/recitation.jpg';
import kidsImg from '../../assets/kids.jpg';
import ijazah from '../../assets/ijazah.jpeg';
import { useTranslation } from 'react-i18next';
import './QuranLearning.css';

function QuranLearning() {
    const [t] = useTranslation();
    return (
        <div className='quran-learning padding'>
            <div className="quran-learning-header heading-sections">
                <h2 className="quran-learning-header-head"> {t('quran courses')} </h2>
            </div>
            <div className="quran-learning-content">
                <SelectPro title={t('recitation')} path='/quran-courses/recitation' image={recitaion} alt='Recitation'/>
                <SelectPro title={t('memorization')} path='/quran-courses/memorization' image={kidsImg} alt='Memorization'/>
                <SelectPro title={t('ijazat quranic')} path='/quran-courses/ijazah' image={ijazah} alt='Ijazat Quranic'/>
            </div>
        </div>
    )
}

export default QuranLearning;