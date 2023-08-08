import { AboutSection } from '../../othercomponents';
import { useTranslation } from 'react-i18next';
import { RxCheck } from 'react-icons/rx';
import './About.css';

function About() {
    const [t] = useTranslation();
    return(
        <div className="about padding">
            <div className="about-header heading-sections">
                <h2 className='about-header-h2'> {t('about academy')} </h2>
            </div>
            <div className="about-text">
                <AboutSection head={t('WHO ARE WE?')} text={t('Nourulquran Academy is an online academy that offers one of the most effective Arabic and online Quran teaching programs in addition to Islamic studies for both children and Adults. With a lot of satisfied students all over the World including USA, UK, UAE,  Egypt and others. Having Tutors who graduated from  Al-Azhar University.')} />
                <div className="about-text-courses">
                    <h4 className='about-head-section'> {t('OUR COURSES')} </h4>
                    <ul>
                        <li>
                            <RxCheck />
                            <span> {t('NOOR EL BYAN (THE FOUNDATION COURSE)')} </span>
                        </li>
                        <li>
                            <RxCheck />
                            <span> {t('QURAN RECITATION COURSE')} </span>
                        </li>
                        <li>
                            <RxCheck />
                            <span> {t('QURAN MEMORIZATION COURSE (HIFZ)')} </span>
                        </li>
                        <li>
                            <RxCheck />
                            <span> {t('ISLAMIC STUDIES COURSE')} </span>
                        </li>
                        <li>
                            <RxCheck />
                            <span> {t('ARABIC LANGUAGE COURSE')} </span>
                        </li>
                    </ul>
                </div>
                <AboutSection head={t('OUR TUTORS')} text={t('Our Tutors have  experience in  Quran, Arabic & Islamic studies Teaching. Also, we have designed a great methodology in teaching by which we motivate young children and make it interesting for them to Learn Quran Online With Expert Tutors in the comfort of their own home.So, you can Learn Quran&Arabic Online With Expert Tutors.')} />
                <AboutSection head={t('OUR VISION')} text={t('Nourulquran Academy vision is to avail effective learning through the dedication and teamwork of our highly qualified teachers. So, you can Learn Quran Online inside an interactive digital environment.')} />
                <AboutSection head={t('OUR AIM')} text={t('One of our aims at Nourulquran Academy is to produce engaging – have fun while you learn – content for Muslim children & adults . As we also help students to learn Quran online at the comfort of home. Having both Male and Female tutors. Beside that we provide feedback to parents on the progress of their kids continuously.')} />
                <AboutSection head={t('WHY US?')} text={t('Nourulquran Academy-Great progress + Best curriculum – We assess the level of the student then design the learning path most suitable for them. As We have a ready-made curriculum prepared by certified scholars.')} />
                <AboutSection head={t('FREE TRIAL+ Best Package')} text={t('You have to learn with us before any registration. Do not pay any thing during your free trial lesson. In addition to affordable study fees that suit every one.')} />
                <AboutSection head={t('QUALIFIED TEACHERS')} text={t('Expert Native Arab Male and Female tutors to make your learning more proficient. They are Also available for teaching in different languages (English- French- Arabic).')} />
                <AboutSection head={t('24/7 SUPPORT & SCHEDULE')} text={t('No worries, we are very flexible 24/7 support & schedule at anytime of the day. So, you can book your online classes at your convenient time and days.')} />
                <AboutSection head={t('-PROGRESS REPORTS')} text={t('Certainly. you can check your kid’s performance through our quarterly progressive reporting system.')} />
                <AboutSection head={t('SECURE METHOD')} text={t('We use smooth and secure payment methods with money back guarantee if you want to leave.')} />
                <AboutSection head={t('ONE – TO – ONE')} text={t('Our classes are set up one -on- one with male and female Quran Tutors. Therefore we guarantee fast progress of Students.')} />
                <AboutSection head={t('ONLINE INTERACTIVE COURSE')} text={t('we are also trying our best to create interactive courses to make it comfortable and interesting for our students, using latest and best online teaching softwares & technologies: Zoom meetings, Class Dojo, ActivInspire board and more.')} />
                <AboutSection head={t('ONLINE QURAN CLASSES FOR KIDS, ADULTS AND SISTERS')} text={t('Enhanced Learning: Video and Audio Streaming, Text Chat, White Board and more to help you learn Tajweed online & Islamic Studies online.')} />
            </div>
        </div>
    )
}

export default About;