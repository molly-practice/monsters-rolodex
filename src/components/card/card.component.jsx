import { Component } from 'react'

import './card.styles.css'

class Card extends Component {
  //const { name, email, id } = this.monster;
    render(){
        const { name, email, id } = this.props.monster;
        return (
          
          <div className='card-container' key={id}>
            <img 
                alt={`monster ${name}`}
                src={`https://robohash.org/${id}?set=set2`}
            />
            <h2>{name}</h2>
            <p>{email}</p>
          </div>
        );
    }
}

export default Card;