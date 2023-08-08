import './Select.css';

function SelectPro(props) {
    return (
        <div className="quran-learning-select">
            <div className="quran-learning-select-image">
                <img src={props.image} alt={props.alt} />
            </div>
            <div className="quran-learning-select-title">
                <a href={props.path}>{props.title}</a>
            </div>
        </div>
    )
}

export default SelectPro;