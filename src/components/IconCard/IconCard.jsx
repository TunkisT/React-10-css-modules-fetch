import css from './IconCard.module.css';

const IconCard = (props) => {
  return (
    <div className={css.cardDiv}>
      <i className={`fa ${props.img} fa-5x iconColor`}></i>
      <h1 className={css.hOne}>{props.title}</h1>
      <p className={css.para}>{props.text}</p>
    </div>
  );
};

export default IconCard;
