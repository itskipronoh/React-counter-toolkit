import React, { Component } from 'react';

 import Counter from './counter';

class Counters extends Component {
    state = {  }
     
    render() { 
        return (<div>
            <Counter />
            <Counter />
            <Counter />
            <Counter />
            <Counter />
            <counter />
        </div>);
    }
}
 
export default Counters;