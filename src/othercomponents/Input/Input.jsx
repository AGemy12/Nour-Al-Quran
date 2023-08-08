
import './Input.css';

function Input(props) {
    return(
        <div className="form-field">
            <label className='form-field-label'>{props.title}</label>
            <input className={props.class} name={props.name} required type={props.type} value={props.value}/>
        </div>
    )
}

export default Input;
