import css from './ImageCard.module.css';

import React from 'react';

const ImageCard = (props) => {
  console.log('props ===', props);
  return (
    <div className={css.card}>
      <img className={css.image} src={props.image} alt='pho' />
      <h2>{props.title}</h2>
      <p>{props.text}</p>
    </div>
  );
};
export default ImageCard;
