import React, {Component} from 'react';
import {Col, Row, Container, Button} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import './app.css';


export default class App extends Component {

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
                                color="primary"
                                size="lg"
                                block>Toggle random character</Button>
                            {randomChar}
                        </Col>
                    </Row>
                    <Row>
                        <Col md='6'>
                            <ItemList />
                        </Col>
                        <Col md='6'>
                            <CharDetails />
                        </Col>
                    </Row>
                </Container>
            </>
        );
    };
};