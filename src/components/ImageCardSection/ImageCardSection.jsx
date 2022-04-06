import React from 'react';
import SectionHeading from '../UI/SectionHeading';
import css from './ImageCardSection.module.css';

const ImageCardSection = (props) => {
  return (
    <section className={css.section}>
      <div className='container'>
        <SectionHeading
          title='Lorem parem mei'
          text='Lorem ipsum dolor sit sapien vestibulum ipsum primis'
        />
      </div>
    </section>
  );
};

export default ImageCardSection;
