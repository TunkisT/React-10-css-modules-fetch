import IconCard from '../IconCard/IconCard';
import Btn from '../UI/Btn';
import SectionHeading from '../UI/SectionHeading';
import css from './IconCardSection.module.css';

const cardData = [
  {
    id: 1,
    img: 'fa-eye',
    title: 'Sinum melitamus',
    text: 'Ornare nulla proin odio consequat sapien vestibulum ipsum primis sed amet consequat lorem dolore.',
  },
  {
    id: 2,
    img: 'fa-money',
    title: 'Leram tasimotus',
    text: 'Ornare nulla proin odio consequat sapien vestibulum ipsum primis sed amet consequat lorem dolore.',
  },
  {
    id: 3,
    img: 'fa-smile-o',
    title: 'Kitarus o pelates',
    text: 'Ornare nulla proin odio consequat sapien vestibulum ipsum primis sed amet consequat lorem dolore.',
  },
];

const IconCardSection = () => {
  return (
    <section className={css.section}>
      <div className='container'>
        <SectionHeading
          title='Lorem parem mei'
          text='Lorem ipsum dolor sit sapien vestibulum ipsum primis'
        />
        <div className='icon-cards grid'>
          {cardData.map((obj) => (
            <IconCard key={obj.id} {...obj} />
          ))}
        </div>
        <p className={css.para}>
          Lorem ipsum dolor sit sapien vestibulum ipsum primis?
        </p>
        <Btn>See some of my art</Btn>
      </div>
    </section>
  );
};
export default IconCardSection;
