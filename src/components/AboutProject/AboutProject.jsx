import SectionTitle from '../SectionTitle/SectionTitle';
import './AboutProject.css';
import './__title/about-project__title.css';
import './__container/about-project__container.css';
import './__description/about-project__description.css';
import './__info-col/about-project__info-col.css';

import './__roadmap/about-project__roadmap.css';
import './__line/about-project__line.css';
import './__milestone/about-project__milestone.css';
import './__milestone/_colored/about-project__milestone_colored.css';
import './__stage/about-project__stage.css';

export default function AboutProject ({refScroll}) {
  return (
    <section className='about-project' ref={refScroll}>
      <SectionTitle title='О проекте'/>
      <div className="about-project__container">
        <div className="about-project__info-col">
          <h3 className="about-project__title">Дипломный проект включал 5 этапов</h3>
          <p className="about-project__description">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </div>
        <div className="about-project__info-col">
          <h3 className="about-project__title">На выполнение диплома ушло 5 недель</h3>
          <p className="about-project__description">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
      </div>
      <div className="about-project__roadmap">
        <div className="about-project__milestone about-project__milestone_colored">
          <div className="about-project__line">1 неделя</div>
          <p className="about-project__stage">Back-end</p>
        </div>
        <div className="about-project__milestone">
          <div className="about-project__line">4 недели</div>
          <p className="about-project__stage">Front-end</p>
        </div>
      </div>
    </section>
  );
}
