import React, {Component} from 'react';
import List from './list'
import Title from './title'

class Main extends Component {

    render() {
        return <div>
            <Title title={'Babar the Elephant characters'} />
            <List characters={['Arthur']}/> 
            <List characters={[' Lady Rataxes', 'Lady Rataxes', 'Victor']} /> 
             

        </div>
    }
    }

    export default Main