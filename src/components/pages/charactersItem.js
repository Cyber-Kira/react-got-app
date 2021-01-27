import React, {Component} from 'react';
import GotService from '../../services/gotService';
import ItemDetails, { Field } from '../itemDetails';

export default class CharactersItem extends Component {
    gotService = new GotService();

    render() {
        return(
            <ItemDetails 
                getData={this.gotService.getCharacter}
                itemId={this.props.CharacterId}>
                    <Field field='gender' label='Gender' />
                    <Field field='born' label='Born' />
                    <Field field='died' label='Died' />
                    <Field field='culture' label='Culture' />
            </ItemDetails>
        )
    }
}