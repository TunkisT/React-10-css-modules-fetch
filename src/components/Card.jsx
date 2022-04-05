import './card.css';

const Card = () => {
  const titleStyle = { textTransform: 'uppercase', 'font-size': '3rem' };
  return (
    <div className='card'>
      <h2 className='title' style={titleStyle}>
        Card title
      </h2>
      <p className='text'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, ullam.
      </p>
      <button className='btn'>Click me</button>
    </div>
  );
};
export default Card;
