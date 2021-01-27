import React, {Component} from 'react';
import GotService from '../../services/gotService';
import ItemDetails, { Field } from '../itemDetails';

export default class HousesItem extends Component {
    gotService = new GotService();

    render() {
        return(
            <ItemDetails 
                getData={this.gotService.getHouse}
                itemId={this.props.HouseId}>
                    <Field field='name' label='Name' />
                    <Field field='region' label='Region' />
                    <Field field='words' label='Words' />
                    <Field field='titles' label='Titles' />
                    <Field field='overlord' label='Overlord' />
                    <Field field='ancestralWeapons' label='Ancestral weapons' />
            </ItemDetails>
        )
    }
}