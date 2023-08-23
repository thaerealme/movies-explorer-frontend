import ('./TechCard.css');
import ('./__title/tech-card__title.css');

export default function TechCard ({ title }) {
  return (
    <article className="tech-card">
      <p className="tech-card__title">{title}</p>
    </article>
  );
}
