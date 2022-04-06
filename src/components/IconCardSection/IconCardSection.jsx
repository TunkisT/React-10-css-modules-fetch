import IconCard from '../IconCard/IconCard';
import css from './IconCardSection.module.css';

const cardData = [
  {
    img: 'fa-eye',
    title: 'Sinum melitamus',
    text: 'Ornare nulla proin odio consequat sapien vestibulum ipsum primis sed amet consequat lorem dolore.',
  },
  {
    img: 'fa-money',
    title: 'Leram tasimotus',
    text: 'Ornare nulla proin odio consequat sapien vestibulum ipsum primis sed amet consequat lorem dolore.',
  },
  {
    img: 'fa-smile-o',
    title: 'Kitarus o pelates',
    text: 'Ornare nulla proin odio consequat sapien vestibulum ipsum primis sed amet consequat lorem dolore.',
  },
];

const IconCardSection = () => {
  return (
    <section className={css.section}>
      <div className='container'>
        <h2 className={css.title}>Here's all the stuff I do.</h2>
        <p className={css.para}>
          Odio turpis amet sed consequat eget posuere consequat.
        </p>
        <div className='icon-cards grid'>
          {cardData.map((obj) => (
            <IconCard
              key={obj.img}
              img={obj.img}
              title={obj.title}
              text={obj.text}
            />
          ))}
        </div>
        <p className={css.para}>
          Lorem ipsum dolor sit sapien vestibulum ipsum primis?
        </p>
        <button className={css.btn}>See some of my recent work</button>
      </div>
    </section>
  );
};
export default IconCardSection;
