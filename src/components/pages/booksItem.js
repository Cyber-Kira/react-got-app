import React, {Component} from 'react';
import GotService from '../../services/gotService';
import ItemDetails, { Field } from '../itemDetails';

export default class BooksItem extends Component {
    gotService = new GotService();

    render() {
        return(
            <ItemDetails 
                getData={this.gotService.getBook}
                itemId={this.props.BookId}>
                    <Field field='name' label='Name' />
                    <Field field='numberOfPages' label='Number of pages' />
                    <Field field='publiser' label='Publisher' />
                    <Field field='released' label='Relesed' />
            </ItemDetails>
        )
    }
}