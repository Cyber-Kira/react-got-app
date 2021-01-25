import React, {Component} from 'react';
import GotService from '../../services/gotService';
import ItemDetails, { Field } from '../itemDetails';
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

    onItemSelected = (id) => {
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
                onItemSelected={this.onItemSelected}
                getData={this.gotService.getAllCharacters}
                renderItem={({name, gender}) => `${name} (${gender})`} />
        )

        const charDetails = (
            <ItemDetails 
                getData={this.gotService.getCharacter}
                itemId={this.state.selectedChar}>
                    <Field field='gender' label='Gender' />
                    <Field field='born' label='Born' />
                    <Field field='died' label='Died' />
                    <Field field='culture' label='Culture' />
            </ItemDetails>
        )

        return(
            <RowBlock left={itemList} right={charDetails} />
        )
    }
};