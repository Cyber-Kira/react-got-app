import React, {Component} from 'react';
import GotService from '../../services/gotService';
import ErrorMessage from '../errorMessage/errorMessage';
import ItemList from '../itemList';
import {withRouter} from 'react-router-dom';

class HousesPage extends Component {

    gotService = new GotService();

    state = {
        error: false
    }

    componentDidCatch() {
        this.setState({
            error: true
        })
    }

    render() {
        if (this.state.error) {
            return (
                <div className='error-block'>
                    <ErrorMessage/>
                </div>
            );
        }

        return(
            <ItemList
                onItemSelected={(itemId) => {
                    this.props.history.push(itemId);
                }}
                getData={this.gotService.getAllHouses}
                renderItem={({name}) => name} />
        )
    }
};

export default withRouter(HousesPage);