
import './AboutSection.css';

function AboutSection(props) {
    return(
        <div className="about-section">
            <h4 className='about-head-section'>{props.head}</h4>
            <p className='about-paragraph-section'>{props.text}</p>
        </div>
    )
}

export default AboutSection;