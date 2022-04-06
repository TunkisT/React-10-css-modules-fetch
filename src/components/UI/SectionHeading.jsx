import React from 'react';
import css from './SectionHeading.module.css';

const SectionHeading = (props) => {
  return (
    <React.Fragment>
      <h2 className={css.title}>{props.title}</h2>
      <p className={css.para}>{props.text}</p>
    </React.Fragment>
  );
};

export default SectionHeading;
