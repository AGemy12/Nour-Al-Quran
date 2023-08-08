import './Section.css';

function Section(props) {
    return(
        <div className="section">
            <div className="heading-sections">
                <h2 className="section-header">ijazah course</h2>
            </div>
            <div className="section-image">
                <img src={props.image} alt={props.alt} />
            </div>
            <div className="section-content">
                <p></p>
            </div>
        </div>
    )
}

export default Section;