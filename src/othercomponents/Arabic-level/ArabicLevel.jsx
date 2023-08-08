import './ArabicLevel.css';

function ArabicLevel(props) {
    return(
        <div className="arabic-level">
            <h4>{props.title}</h4>      
            <p>{props.text}</p>      
        </div>
    )
}

export default ArabicLevel;