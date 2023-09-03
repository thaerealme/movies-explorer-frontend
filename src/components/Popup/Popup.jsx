import './Popup.css';
import './__container/popup__container.css';
import './__title/popup__title.css';
import './__description/popup__description.css';
import './__button/popup__button.css';
import './__button/_type/popup__button_type_delete.css';

export default function Popup ({ title, description, onClick, buttonText }) {
  return(
    <div className="popup">
      <div className="popup__container">
        <button className="popup__button_type_delete"></button>
        <h2 className="popup__title">{title}</h2>
        <p className="popup__description">{description}</p>
        <button onClick={onClick} className="popup__button">{buttonText}</button>
      </div>
    </div>
  );
}
