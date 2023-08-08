import  quran  from '../../assets/qur.jpg';
import  islamic  from '../../assets/islamic.png';
import  arabic  from '../../assets/arabic-language.jpg';
import { useTranslation } from 'react-i18next';
import './Courses.css';

function Courses() {
    const [t] = useTranslation();
    return (
        <div className="courses padding" id='our-courses'>
            <div className="courses-header heading-sections">
                <h2 > {t('our courses')} </h2>
            </div>
            <div className="courses-content">
                <div className="courses-type">
                    <div className="courses-type-image">
                        <img src={quran} alt="" />
                    </div>
                    <div className="course-link">
                        <a href="/quran-courses"> {t('quran courses')} </a>
                    </div>
                </div>
                <div className="courses-type">
                    <div className="courses-type-image">
                        <img src={islamic} alt="" />
                    </div>
                    <div className="course-link">
                        <a href="/islamic"> {t('islamic studies')} </a>
                    </div>
                </div>
                <div className="courses-type">
                    <div className="courses-type-image">
                        <img src={arabic} alt="" />
                    </div>
                    <div className="course-link">
                        <a href="/arabic"> {t('arabic language')} </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Courses;