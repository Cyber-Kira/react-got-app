import React, {Component} from 'react';
import Spinner from '../spinner';
import './itemList.css';
export default class ItemList extends Component {
    
    state = {
        itemList: null
    }

    componentDidMount() {
        const {getData} = this.props;

        getData()
            .then((itemList) => {
                this.setState({
                    itemList
                });
            })
    }

    renderItems(arr) {
        return arr.map((item, i) => {
            const {id, name} = item;
            return (
                <li 
                    key={id}
                    onClick={() => this.props.onCharSelected(41 + i)}
                    className="list-group-item">
                    {name}
                </li>
            )
        });
    }

    render() {

        const {itemList} = this.state;

        if (!itemList) {
            return <Spinner/>
        }        
        
        const items = this.renderItems(itemList);

        return (
            <ul className='item-list list-group'>
                {items}
            </ul>
        );
    }
}