import Icon from '../UI/Icon';
import css from './IconCard.module.css';

const IconCard = (props) => {
  return (
    <div className={css.cardDiv}>
      <Icon className={css.icon} icon={props.img} />
      <h1 className={css.hOne}>{props.title}</h1>
      <p className={css.para}>{props.text}</p>
    </div>
  );
};

export default IconCard;
