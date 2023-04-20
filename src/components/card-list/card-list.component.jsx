import { Component } from 'react';

class CardList extends Component {
    
    render() {
        // this is called destructuring, so you don't have to keep typing 'this'
        const { monsters } = this.props;

        return (
            <div>
                {monsters.map((monster) => (
                    <h1 key={monster.id}>{monster.name}</h1>
                ))}
            </div>
        );
    }
}

export default CardList;