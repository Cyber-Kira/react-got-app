import React, {Component} from 'react';
import {Col, Row} from 'reactstrap';
import GotService from '../../services/gotService';
import CharDetails from '../charDetails';
import ErrorMessage from '../errorMessage/errorMessage';
import ItemList from '../itemList';
import RowBlock from '../rowBlock';
export default class CharacterPage extends Component {

    gotService = new GotService();

    state = {
        selectedChar: 130,
        error: false
    }

    componentDidCatch() {
        this.setState({
            error: true
        })
    }

    onCharSelected = (id) => {
        this.setState({
            selectedChar: id
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

        const itemList = (
            <ItemList 
                onCharSelected={this.onCharSelected}
                getData={this.gotService.getAllCharacters}
                renderItem={({name, gender}) => `${name} (${gender})`} />
        )

        const charDetails = (
            <CharDetails charId={this.state.selectedChar} />
        )
 
        return(
            <RowBlock left={itemList} right={charDetails} />
        )
    }
};