import React from 'react';
import ImageCard from '../ImageCard/ImageCard';
import SectionHeading from '../UI/SectionHeading';
import css from './ImageCardSection.module.css';

const imageData = [
  {
    id: 1,
    image: 'https://placeimg.com/640/480/any',
    title: 'Photo title',
    text: 'Photo text',
  },
  {
    id: 2,
    image: 'https://placeimg.com/640/480/any',
    title: 'Photo title',
    text: 'Photo text',
  },
  {
    id: 3,
    image: 'https://placeimg.com/640/480/any',
    title: 'Photo title',
    text: 'Photo text',
  },
  {
    id: 1,
    image: 'https://placeimg.com/640/480/any',
    title: 'Photo title',
    text: 'Photo text',
  },
  {
    id: 2,
    image: 'https://placeimg.com/640/480/any',
    title: 'Photo title',
    text: 'Photo text',
  },
  {
    id: 3,
    image: 'https://placeimg.com/640/480/any',
    title: 'Photo title',
    text: 'Photo text',
  },
  {
    id: 1,
    image: 'https://placeimg.com/640/480/any',
    title: 'Photo title',
    text: 'Photo text',
  },
  {
    id: 2,
    image: 'https://placeimg.com/640/480/any',
    title: 'Photo title',
    text: 'Photo text',
  },
  {
    id: 3,
    image: 'https://placeimg.com/640/480/any',
    title: 'Photo title',
    text: 'Photo text',
  },
];

const ImageCardSection = (props) => {
  return (
    <section className={css.section}>
      <div className='container'>
        <SectionHeading
          title='Lorem parem mei'
          text='Lorem ipsum dolor sit sapien vestibulum ipsum primis'
        />
        <div className={css.photoCardDiv}>
          {imageData.map((obj) => (
            <ImageCard
              key={obj.id}
              image={obj.image}
              title={obj.title}
              text={obj.text}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageCardSection;
