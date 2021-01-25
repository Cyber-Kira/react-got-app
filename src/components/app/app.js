import React, {Component} from 'react';
import {Col, Row, Container, Button} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import './app.css';
import CharacterPage from '../characterPage';
import ItemList from '../itemList';
import GotService from '../../services/gotService';
import ItemDetails, { Field } from '../itemDetails';
export default class App extends Component {

    gotService = new GotService();

    state = {
        characterToggle: true,
        error: false,
        selectedChar: 8 //temp
    }

    onToggle = () => {
        this.setState({
            characterToggle: !this.state.characterToggle
        });
    }

    render() {
        const randomChar = this.state.characterToggle ? <RandomChar/> : null;

        return (
            <> 
                <Container>
                    <Header />
                </Container>
                <Container>
                    <Row>
                        <Col lg={{size: 5, offset: 0}}>
                            <Button 
                                className='toggle-btn'
                                onClick={this.onToggle} 
                                color='primary'
                                size='lg'
                                block>Toggle random character</Button>
                            {randomChar}
                        </Col>
                    </Row>
                    <CharacterPage/>
                    <Row>
                        <Col md='6'>
                            <ItemList 
                                onItemSelected={this.onItemSelected}
                                getData={this.gotService.getAllBooks}
                                renderItem={(item) => item.name} />
                        </Col>
                        <Col md='6'>
                            <ItemDetails 
                                getData={this.gotService.getBook}
                                itemId={this.state.selectedChar} />
                        </Col>
                    </Row>
                    <Row>
                        <Col md='6'>
                            <ItemList 
                                onItemSelected={this.onItemSelected}
                                getData={this.gotService.getAllHouses}
                                renderItem={(item) => item.name} />
                        </Col>
                        <Col md='6'>
                            <ItemDetails 
                                getData={this.gotService.getHouse}
                                itemId={this.state.selectedChar}>
                                    <Field field='name' label='name' />
                                    <Field field='region' label='region' />
                                    <Field field='words' label='words' />
                                    <Field field='titles' label='titles' />
                            </ItemDetails>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    };
};