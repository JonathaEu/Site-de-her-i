import React, { Component } from 'react';
import api from './api'
// import { Container } from './styles';

class App extends Component {

    state = {
        herois: [],
    }

    async componentDidMount(){
        const response = await api.get('');

        this.setState({ filmes: response.data})
    }

    render(){

        const {herois} = this.state;
        return(
            <div>
                <h1>Heróis</h1>
                {herois.map(herois => (
                    <li key={heroi.CharacterDataWrapper.code}>
                        <h2>
                            <strong>Nome:</strong>
                            {heroi.CharacterDataWrapper.name}
                        </h2>
                    </li>
                ))}
                {console.log(herois)}
            </div>
        )
    }
}

export default App