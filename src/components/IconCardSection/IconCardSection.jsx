import IconCard from '../IconCard/IconCard';
import Btn from '../UI/Btn';
import Container from '../UI/Container';
import SectionHeading from '../UI/SectionHeading';
import css from './IconCardSection.module.css';
import styled from 'styled-components';

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

const Section = styled.section`
  background-color: rgb(226, 219, 219);
  padding: 7% 0;
  text-align: center;
`;

const Para = styled.p`
  text-align: center;
`;

const IconCardSection = () => {
  return (
    <Section>
      <Container>
        <SectionHeading
          title='Lorem parem mei'
          text='Lorem ipsum dolor sit sapien vestibulum ipsum primis'
        />
        <div className='icon-cards grid'>
          {cardData.map((obj) => (
            <IconCard key={obj.id} {...obj} />
          ))}
        </div>
        <Para>Lorem ipsum dolor sit sapien vestibulum ipsum primis?</Para>
        <Btn>See some of my art</Btn>
      </Container>
    </Section>
  );
};
export default IconCardSection;
