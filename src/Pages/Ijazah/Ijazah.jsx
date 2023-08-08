import { QuranSection, Special } from '../../othercomponents'
import ijazatImage from '../../assets/ijazah.jpeg'; 
import { useTranslation } from 'react-i18next';
import './Ijazah.css';

function Ijazah() {
    const [t] = useTranslation();
    return(
        <>
            <QuranSection title={t('Ijazat quranic course')} image={ijazatImage} 
            description1={t('This Quran Ijazah course will help you to get qualified for obtaining Ijazah online in Quran Recitation with Tajweed or Quran Memorization (Hifz) through one-to-one online sessions with Ijazah certified Quran Sheikhs. At the end of course after passing tests & evaluations successfully, you will get the corresponding Ijazah certificate. During the course, our certified teachers will walk with you step-by-step from the basics of the Quran to the excellent level when you are ready to teach the words of Allah (SWT) to others.')} 
            description2={t('Quran Ijaza is a license or permission authorizing its holder to transmit the Quran, which is issued by someone already possessing such authority. In other words, Ijazah is a certificate used primarily by Sunni Muslims to indicate that one has been authorized by a higher authority that already holding Ijazah to teach the Holy Quran.')} 
            description3={t('Since this is a matter of religion, so it’s very important to gain your Quranic & Islamic knowledge from an accredited and authenticated source. Accordingly, obtaining Ijazah in Quran Recitation with Tajweed or Ijazah in Quran Memorization is a MUST for anyone seeking to teach the Quran. Yet, it’s not limited to Quran tutors, but also anyone excels in reading Quran Tajweed or Hafiz/Hafiza Quran.')} 
            description4={t('Due to the importance of Ijazah, Nourulquran Academy presents “Quran Ijazah Online Classes” for those Muslims who are either Non-Arabs or living in Non-Muslim countries.')}
            description5={t('Now, you can take “Quran Ijazah” course with highly qualified & certified Quran teachers from Al-Azhar University through one-to-one live sessions.')}
            description6={t('Why Taking Quran Ijazah Online at Nourulquran Academy?')}
            description7={t('Through the “Quran Ijazah” course, our certified Quran tutors will verify your skills and abilities, asses your knowledge of Quran and Hadith, test your area of interest, and then grant you Ijazah.')}
            description8={t('Utilizing repeated tests and quizzes, we will assess your knowledge and hold over that arena. You would need to pass the tests and evaluations to be able to get the Ijazah, and it would not be difficult with us.')}
            description9={t('Ijazah gives you the confidence to recite and memorize the Holy Quran. And helps you to follow up on the Quran lessons provided to your children, and even to teach Quran to your family members. So, get yourself registered for the “Quran Ijazah” online course and become certified teacher and preacher of Allah’s words.')} 
            description10={t('If you’d like to be a preacher and teach the Quran, Nourulquran Academy provides a complete Quran Ijazah course for Quran Recitation with Tajweed and Quran Memorization.')} 
            />
            <div className="learn-in-ijazah">
                <h3> {t('What You’ll Learn in Ijazah Course')} : </h3>
                <ul>
                    <li>
                        - {t('Arabic Alphabet')}
                    </li>
                    <li>
                        - {t('Arabic Grammar')}
                    </li>
                    <li>
                        - {t('Arabic Language Reading')}
                    </li>
                    <li>
                        - {t('Quran Reading Basics')}
                    </li>
                    <li>
                        - {t('Quran Recitation')}
                    </li>
                    <li>
                        - {t('Tajweed Rules')}
                    </li>
                </ul>
            </div>
            <Special />
        </>
    )
}

export default Ijazah;