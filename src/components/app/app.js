import React, {Component} from 'react';
import {Col, Row, Container, Button} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import './app.css';
import {CharacterPage, BooksPage, HousesPage, BooksItem, HousesItem, CharactersItem} from '../pages';
import GotService from '../../services/gotService';
import {BrowserRouter as Router, Route} from 'react-router-dom';
export default class App extends Component {

    gotService = new GotService();
    state = {
        characterToggle: true,
        error: false
    }

    onToggle = () => {
        this.setState({
            characterToggle: !this.state.characterToggle
        });
    }

    render() {
        const randomChar = this.state.characterToggle ? <RandomChar interval={15000}/> : null;

        return (
            <Router>
                <div className="app"> 
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
                        <Route path='/' exact component={() => <h1>Welcome to GOT DB</h1>} />
                        <Route path='/characters' exact component={CharacterPage} />
                        <Route path='/characters/:id' render={
                            ({match}) => {
                                const {id} = match.params;

                                return <CharactersItem CharacterId={id}/>
                            }
                        } />
                        <Route path='/houses' exact component={HousesPage} />
                        <Route path='/houses/:id' render={
                            ({match}) => {
                                const {id} = match.params;

                                return <HousesItem HouseId={id}/>
                            }
                        } />
                        <Route path='/books' exact component={BooksPage} />
                        <Route path='/books/:id' render={
                            ({match}) => {
                                const {id} = match.params;

                                return <BooksItem BookId={id}/>
                            }
                        } />
                    </Container>
                </div>
            </Router>
        );
    };
};