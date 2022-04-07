import React from 'react';
import ImageCard from '../ImageCard/ImageCard';
import Container from '../UI/Container';
import SectionHeading from '../UI/SectionHeading';
import css from './ImageCardSection.module.css';

const imageData = [
  {
    id: 1,
    image: 'https://placeimg.com/640/480/nature',
    title: 'Lorem, ipsum.',
    text: 'Lorem ipsum dolor sit.',
  },
  {
    id: 2,
    image: 'https://placeimg.com/640/480/arch',
    title: 'Lorem, ipsum.',
    text: 'Lorem ipsum dolor sit.',
  },
  {
    id: 3,
    image: 'https://placeimg.com/640/480/people/grayscale',
    title: 'Lorem, ipsum.',
    text: 'Lorem ipsum dolor sit.',
  },
  {
    id: 4,
    image: 'https://placeimg.com/640/480/tech',
    title: 'Lorem, ipsum.',
    text: 'Lorem ipsum dolor sit.',
  },
  {
    id: 5,
    image: 'https://placeimg.com/640/480/nature/grayscale',
    title: 'Lorem, ipsum.',
    text: 'Lorem ipsum dolor sit.',
  },
  {
    id: 6,
    image: 'https://placeimg.com/640/480/arch/sepia',
    title: 'Lorem, ipsum.',
    text: 'Lorem ipsum dolor sit.',
  },
  {
    id: 7,
    image: 'https://placeimg.com/640/480/arch',
    title: 'Lorem, ipsum.',
    text: 'Lorem ipsum dolor sit.',
  },
  {
    id: 8,
    image: 'https://placeimg.com/640/480/nature',
    title: 'Lorem, ipsum.',
    text: 'Lorem ipsum dolor sit.',
  },
  {
    id: 9,
    image: 'https://placeimg.com/640/480/tech/sepia',
    title: 'Lorem, ipsum.',
    text: 'Lorem ipsum dolor sit.',
  },
];

const ImageCardSection = (props) => {
  return (
    <section id='imageSection' className={css.section}>
      <Container>
        <SectionHeading
          title='Lorem parem mei'
          text='Lorem ipsum dolor sit sapien vestibulum ipsum primis'
        />
        <div className={css.photoCardDiv}>
          {imageData.slice(0, props.items).map((obj) => (
            <ImageCard
              key={obj.id}
              image={obj.image}
              title={obj.title}
              text={obj.text}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ImageCardSection;
