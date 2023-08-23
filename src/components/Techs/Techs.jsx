import SectionTitle from '../SectionTitle/SectionTitle';
import TechCard from '../TechCard/TechCard';
import ('./Techs.css');
import ('./__container/techs__container.css');
import ('./__title/techs__title.css');
import ('./__subtitle/techs__subtitle.css');
import ('./__cards-list/techs__cards-list.css');

export default function Techs ({refScroll}) {
  return (
    <section className="techs" ref={refScroll}>
      <SectionTitle title='Технологии' />
      <div className="techs__container">
          <h3 className="techs__title">7 технологий</h3>
          <p className="techs__subtitle">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
          <ul className="techs__cards-list">
            <TechCard title='HTML'/>
            <TechCard title='CSS'/>
            <TechCard title='JS'/>
            <TechCard title='React'/>
            <TechCard title='Git'/>
            <TechCard title='Express.js'/>
            <TechCard title='mongoDB'/>
          </ul>
      </div>
    </section>
  );
}
