import { QuranSection, Special } from '../../othercomponents'
import recitationImage from '../../assets/recitation.jpg'; 
import { useTranslation } from 'react-i18next';

function Recitation() {
    const [t] = useTranslation();
    return(
        <>
            <QuranSection title={t('recitation course')} image={recitationImage} description1={t('Online Quran Recitation Course aims to help Muslim brothers and sisters to recite Quran correctly through personal online Quran lessons. You or your children will be able to pronounce the letters, words, and verses of the Quran correctly with practical application. Our Quran-certified teachers will guide you or your children step by step from the basics of Quran reading to excellent recitation without any mistakes. So, you never have to worry if you don’t have any background in Arabic or Quran.')} 
            description2={t('One of the best ways to learn the recitation of the Noble Qur’an is for a person to accompany a person who is proficient in reciting the Holy Qur’an from whom he learns the recitation. Hence, he hears the recitation of the Sheikh. The Sheikh hears his recitation so that the person becomes one of the masters of reciting the Noble Qur’an, so our platform will give you the opportunity to learn the recitation in its correct way.')}
            description3={t('Learning Quran recitation online with professional and authentic Quran teachers is the key to correcting and perfecting Quran recitation in Arabic.')}
            description4= {t('Reciting the Quran is a work that involves your soul, heart, mind, tongue, and body. During the recitation of the Quran, the mind and body, as well as sensation, lose distinction, and become integrated.')}
            description5={t('As the tongue reads and so the words flow from the lips, the mind contemplates, the heart appears, the soul sucks, and tears increase in the eyes, the heart trembles and also trembles, the skin trembles as well as soften as much as the heart there is no longer any kind of duality between them, Your hair may also stand on end.')}
            description6={t('Online Quran recitation classes aim to show students how to pronounce the correct pronunciation using Quran recitation methods.As we know, the significance of the words of the Quran can change even with a small change in the pronunciation of the words. You can learn recitation with Nourulquran academy. Educates students on the different regulations used in the pronunciation of Arabic words.')}
            />
            <Special />
        </>
    )
}

export default Recitation;