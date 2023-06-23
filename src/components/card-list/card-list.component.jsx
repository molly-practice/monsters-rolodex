import Card from '../card/card.component';
import './card-list.styles.css';

const CardList = ({ monsters }) => (
  // this is called destructuring, so you don't have to keep typing 'this'
  <div className='card-list'>
      {monsters.map((monster) => {
          return (
              <Card monster={monster}/>
          );
      })}
  </div>
); 

export default CardList;