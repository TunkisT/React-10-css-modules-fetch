import css from './IconCard.module.css'

const IconCard = () => {
  return <div className={css.cardDiv}>
    <i className="fa fa-car fa-5x iconColor" ></i>
    <h1 className={css.hOne}>Consequat lorem</h1>
    <p className={css.para}>Ornare nulla proin odio consequat sapien vestibulum ipsum primis sed amet consequat lorem dolore.</p>
    </div>;
};

export default IconCard;
