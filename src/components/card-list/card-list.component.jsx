import { Component } from 'react';
import Card from '../card/card.component';
import './card-list.styles.css';

class CardList extends Component {
    render() {
        // this is called destructuring, so you don't have to keep typing 'this'
        const { monsters } = this.props;

        return (
            <div className='card-list'>
                {monsters.map((monster) => {
                    return (
                        <Card monster={monster}/>
                    );
                })}
            </div>
        ); 
    }
}

export default CardList;