import './ErrorMessage.css';
import './__text/error__text.css';

export default function ErrorMessage ({ message }) {
  return (
    <div className="error">
      <p className="error__text">{ message }</p>
    </div>
  );
}
