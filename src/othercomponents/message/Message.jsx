import { useTranslation } from 'react-i18next';
import './Message.css';

function Message(props) {
    const [t] = useTranslation();
    return(
        <div className="message-container">
            <textarea id="" cols="50" rows="3" placeholder={t('Your Message')} name={props.name}></textarea>
        </div>
    )
}

export default Message;