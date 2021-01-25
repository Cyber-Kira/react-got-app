import React, {Component} from 'react';
import GotService from '../../services/gotService';
import ItemDetails, { Field } from '../itemDetails';
import ErrorMessage from '../errorMessage/errorMessage';
import ItemList from '../itemList';
import RowBlock from '../rowBlock';

export default class BooksPage extends Component {

    gotService = new GotService();

    state = {
        selectedBook: 3,
        error: false
    }

    componentDidCatch() {
        this.setState({
            error: true
        })
    }

    onItemSelected = (id) => {
        this.setState({
            selectedBook: id
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
                getData={this.gotService.getAllBooks}
                renderItem={({name}) => name} />
        )

        const BookDetails = (
            <ItemDetails 
                getData={this.gotService.getBook}
                itemId={this.state.selectedBook}>
                    <Field field='name' label='Name' />
                    <Field field='numberOfPages' label='Number of pages' />
                    <Field field='publiser' label='Publisher' />
                    <Field field='released' label='Relesed' />
            </ItemDetails>
        )

        return(
            <RowBlock left={itemList} right={BookDetails} />
        )
    }
};