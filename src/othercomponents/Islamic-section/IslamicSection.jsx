
import './IslamicSection.css';

function IslamicSection(props) {
    return(
        <div className='islamic-section'>
            <h3 className='islamic-section-head'>{props.title}</h3>
            <p className='islamic-section-paragraph'>{props.text}</p>
                <p className='islamic-item'>
                    {props.item1}
                </p>
                <p className='islamic-item'>
                    {props.item2}
                </p>
                <p className='islamic-item'>
                    {props.item3}
                </p>
                <p className='islamic-item'>
                    {props.item4}
                </p>
                <p className='islamic-item'>
                    {props.item5}
                </p>
                <p className='islamic-item'>
                    {props.item6}
                </p>
                <p className='islamic-item'>
                    {props.item7}
                </p>
            <span>{props.span}</span>
        </div>
    )
}

export default IslamicSection;