import './card.styles.css';

const Card = ({ monster }) => {
  const { name, email, id } = monster;

  return (
    <div className='card-container'>
      <img alt={`monster ${name}`} src={`https://robohash.org/${id}?set=set2&size=180x180`} />
      <h2>{ name }</h2>
      <span>{ email }</span>
    </div>
  );
}

export default Card;