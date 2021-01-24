import React, {Component} from 'react';
import GotService from '../../services/gotService';
import Spinner from '../spinner';
import './itemList.css';
export default class ItemList extends Component {

    gotService = new GotService();

    state = {
        charList: null
    }

    componentDidMount() {
        this.gotService.getAllCharacters()
            .then((charList) => {
                this.setState({
                    charList
                });
            })
    }

    renderItems(arr) {
        return arr.map((item, i) => {
            return (
                <ul className='item-list list-group'>
                    <li 
                        key={i} //need unique key
                        onClick={() => this.props.onCharSelected(41 + i)}
                        className="list-group-item">
                        {item.name}
                    </li>
                </ul>
            )
        });
    }

    render() {

        const {charList} = this.state;

        if (!charList) {
            return <Spinner/>
        }        
        
        const items = this.renderItems(charList);

        return (
            items
        );
    }
}