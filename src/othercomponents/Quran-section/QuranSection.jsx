
import './QuranSection.css';

function QuranSection(props) {
    return(
        <div className='quran-type margin'>
            <div className="quran-type-head heading-sections">
                <h2>{props.title}</h2>
            </div>
            <div className="quran-type-image">
                <img src={props.image} alt='' />
            </div>
            <div className="quran-type-description">
                <p>{props.description1}</p>
                <p>{props.description2}</p>
                <p>{props.description3}</p>
                <p>{props.description4}</p>
                <p>{props.description5}</p>
                <p>{props.description6}</p>
                <p>{props.description7}</p>
                <p>{props.description8}</p>
                <p>{props.description9}</p>
                <p>{props.description10}</p>
            </div>
            
        </div>
    )
}


export default QuranSection;