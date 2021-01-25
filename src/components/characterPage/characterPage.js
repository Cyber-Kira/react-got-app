import React, {Component} from 'react';
import {Col, Row} from 'reactstrap';
import GotService from '../../services/gotService';
import CharDetails from '../charDetails';
import ErrorMessage from '../errorMessage/errorMessage';
import ItemList from '../itemList';

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

        return(
            <Row>
                <Col md='6'>
                    <ItemList 
                        onCharSelected={this.onCharSelected}
                        getData={this.gotService.getAllCharacters}
                        renderItem={({name, gender}) => `${name} (${gender})`} />
                </Col>
                <Col md='6'>
                    <CharDetails charId={this.state.selectedChar} />
                </Col>
            </Row>
        )
    }
};