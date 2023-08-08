import { QuranSection, Special } from '../../othercomponents';
import { useTranslation } from 'react-i18next';
import arabicImage from '../../assets/arabic.png'
import './Arabic.css';

function Arabic() {
    const [t] = useTranslation()
    return (
        <>
            <QuranSection title={t('arabic language')} image={arabicImage} />
            <div className="arabic-summary">
                <h3 className="arabic-summary-head">
                    {t('summary')}
                </h3>
                <p className='arabic-summary-paragraph'>
                    {t('Arabic language curriculum produced by Nourul-Quran Academy; Through it, a non-Arabic speaker learns, starting with reading basics and passing through the acquisition of linguistic vocabulary and syntactic rules that enable him to form sentences, speak for himself, write well and during 550 hours, he will be able to speak Arabic like Arabic speakers, write articles, improvise and speak spontaneously for more than an hour.')}
                </p>
            </div>
            <div className="arabic-discription">
                <h3 className="arabic-discription-head">
                    {t('Description')}
                </h3>
                <p>
                    {t('The Arabic language has a great history and heritage in the fields of literature, theology and science in addition to being the language of the Quran.')}
                    {t('Nourulquran presents an online Arabic course which will enable you to learn how to')} : <br />
                    - {t('Write words and sentences accurately')} <br />
                    - {t('Use words to identify objects')} <br />
                    - {t('Form questions and respond to others questions')} <br />
                    - {t('Produce sentences used in daily life situations')} <br />
                    - {t('Learn about greetings, introductions, social life and activities')} <br />
                    - {t('You will be introduced to vocabulary such as days of the week, numbers and colours, weather and seasons, that will give you confidence to continue building your knowledge of Arabic vocabulary and speak fluently')}
                </p>
                <Special />
            </div>
        </>
    )
}

export default Arabic
