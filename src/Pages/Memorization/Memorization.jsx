import { QuranSection, Special } from '../../othercomponents'
import { useTranslation } from 'react-i18next';
import memorizationImage from '../../assets/memorization.jpg'; 

function Memorization() {
    const [t] = useTranslation();
    return(
        <>
            <QuranSection title={t('memorization course')} image={memorizationImage} 
            description1={t('The Quran memorization course will help you learn Quran memorization through individual Quran online classes to become Hafiz Quran / Hafiza Al Quran. You or your children will learn how to memorize the Quran in a practical and interactive way. Whether you need to learn Quran memorization for yourself or your children, our dedicated Quran teachers will do their best to simplify the entire Quran memorization program. They will start with you or your children by memorizing the short surahs and moving on to the long surahs, then memorizing the complete surahs (the juz’), and the whole Quran at the end.')}
            description2={t('Our Quran memorization course provides you with all the advantages, You will get a Quran memorization certificate through our online Quran memorization course.')}
            description3={t('We have a perfect Quran memorization program; if you learn and memorize Quran with us, you will reach a high level of Quran memorization.')}
            description4={t('We offer you Quran memorization for adults and memorize Quran for kids with the best ways and the most modern methods.')}
            description5={t('Want to memorize the Quran online? Nourulquran Academy are here to help you do so. Our professional Quran teachers provide online Quran memorization lessons to help students memorize Quran online. Your child will be guided at every step in the process of memorizing the Quran. We intend to make your child an excellent Hafiz Quran / Hafiza Al-Quran under the supervision of our experienced Quran teachers.')} 
            description6={t('Possessing the ability to memorize the Quran by heart is an attractive feeling, an excellent possession, and a sacred possession in itself. As if you carry the Quran in your heart. Wherever you go and whatever you do, the light of the holy Quran will follow you. Do you want to try the same? Would you like to bring spiritual words very close to yourself? Do you have outstanding strength as well as endurance ability to memorize the Quran by heart? Are you looking for a specialist to help you achieve this desire? You have come to the best site, we are here to lead the way towards your goal.')}
            description7={t('Memorizing the Holy Quran is different from memorizing any other part of the text. It is great to learn Quran correctly since you also cannot change any kind of words or maybe the smallest exits. Alterations in exits usually change the full meaning as well as the context of the word as well as the knowledge in its entirety. It is the message of Allah Almighty. Thus, it must be discovered and taken up with tremendous focus and great responsibility.')}
            />
            <Special />
        </>
    )
}

export default Memorization;