import { IslamicSection, Special } from '../../othercomponents'
import IslamicImage from '../../assets/islamic-studies.jpg';
import { useTranslation } from 'react-i18next';
import './Islamic.css';

function Islamic() {
    const [t] = useTranslation();
    return (
        <div className="islamic margin">
            <div className="islamic-header heading-sections">
                <h2> {t('islamic studies')} </h2>
            </div>
            <div className="islamic-image">
                <img src={IslamicImage} alt="" />
            </div>
            <IslamicSection 
            title ={t('(1) Aqidah :')} 
            text={t('Aqidah: is an Islamic term meaning (creed).Our Aqidah course  cement articles of faith. It covers the essentials of Aqidah such as:')}
            item1 = {t('- Belief in God and tawhid (monotheism)')}
            item2 = {t('- Belief in the angels')}
            item3 = {t('- Belief in the Islamic holy books')}
            item4 = {t('- Belief in the prophets and messengers')}
            item5 = {t('- Belief in the Last Judgment and Resurrection')}
            item6 = {t('- Belief in predestination.')}
            span ={t('As well as study of advanced topics.')}
            />
            <IslamicSection 
            title ={t('(2) Fiqh :')} 
            text={t('The word fiqh is an Arabic term meaning “deep understanding”, Technically it refers to the human understanding of Islamic law.  Our course develops deep understanding in the different matters of Islamic law. It interprets rules of Allah that concern actions, what is required (Wajib), sinful (haraam), recommended (mandub), disapproved (makruh) or neutral (mubah). The syllabus is divided into Fiqh Essentials and Advanced Topics that cover the opinions of the four prominent schools (Malki, Shafi, Hanfi and Hanbali)')}
            />
            <IslamicSection 
            title ={t('(3) Hadith :')} 
            text={t('it refers to record of the traditions or sayings of the Prophet Muhammad, Our Hadith course covers the essentials of Hadith such as :')}
            item1 = {t('40 Hadith Nawawi')}
            item2 = {t('40 Hadith Qudsi')}
            item3 = {t('Sahih al-Bukhari')}
            item4 = {t('Sahih Muslim')}
            item5 = {t('Sunan an-Nasa’i')}
            item6 = {t('Sunan Abi Dawud')}
            />
            <IslamicSection 
            title ={t('(4) Islamic History (Seerah) :')} 
            text={t('The Islamic History Syllabus covers the full history of Islam from the beginning of creation, the Golden Age in Islam and until recent history. The course  develops identity and pride in Islamic History and recognizes the achievements of Muslims across the ages.')}
            />
            <IslamicSection 
            title ={t('(5) Tafseer of Quran (interpretation) :')} 
            text={t('The Islamic History Syllabus covers the full history of Islam from the beginning of creation, the Golden Age in Islam and until recent history. The course  develops identity and pride in Islamic History and recognizes the achievements of Muslims across the ages.')}
            item1= {t('This course  helps Muslims to understand Allah’s book(word by word or inside stories with pictures), recognize the purposes of verses & surahs and reasons behind revelation through various syllabuses which suit every student (Adults & children).')}
            item2 = {t('As we provide you with essential background information on each surah (or chapter) that gives them the historical perspective of each chapter which will enable you to understand the surah fully.')}
            item3= {t('Four levels of treating with Quran :')}
            item4 = {t('1- Reading or Reciting the Holy Quran')}
            item5 = {t('2- Memorizing the Holy Quran')}
            item6 = {t('3- Understanding the Holy Quran')}
            item7 = {t('4- Implementing or Reflecting the Holy Quran into our lives')}
            />
            <Special />
        </div>
    )
}

export default Islamic