import React, {useState, useEffect} from 'react';
import Spinner from '../spinner';
import './itemList.css';
import PropTypes from 'prop-types';
function ItemList({getData, onItemSelected, renderItem}) {

    const [itemList, updateList] = useState([]);

    useEffect(() => {
        getData()
            .then((data) => {
                updateList(data);
            })
    }, []);

    const renderItems = (arr) => {
        return arr.map((item) => {
            const {id} = item;
            const label = renderItem(item);

            return (
                <li 
                    key={id}
                    onClick={() => onItemSelected(id)}
                    className="list-group-item">
                    {label}
                </li>
            )
        });
    }

    if (!itemList) {
        return <Spinner/>
    }        
    
    const items = renderItems(itemList);

    return (
        <ul className='item-list list-group'>
            {items}
        </ul>
    );
}

ItemList.propTypes = {
    onItemSelected: PropTypes.func,
    getData: PropTypes.func
}

export default ItemList;