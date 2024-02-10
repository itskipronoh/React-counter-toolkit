import React, { Component } from 'react';
import logo from './logo.svg';
class Counter extends Component {

    constructor(props) {
        super(props);
        this.state = {
          count: 0,
          imageUrl: logo,
          tags: ['tag1', 'tag2', 'tag3'],
          showButtons: true,
        };
      }

   styles = {
    fontWeight: 'bold',
    background:'black',
    margin:5
   }
    handleIncrement = () =>{
        //console.log('increment clicked')
        this.setState({count:this.state.count +1 });
    }
    handleDecrement = () => {
        // console.log('decrement clicked')
        this.setState({ count: this.state.count - 1 });
      }
    handleReset = () => {
        // Reset the count to its initial value or perform other deletion logic
        this.setState({ count: 0 });
      }
    handleDelete = () => {
        // Remove everything by setting showButtons to false
        this.setState({ showButtons: false });
      }
    
    
      
    render() { 
        if (!this.state.showButtons) {
            return null; // Return null to render nothing
          }
      
        
      

        return (
            <div>
                  <img src={this.state.imageUrl} className="App-logo" alt="logo" width={50} height={50} />
            {/*  <span  style={this.styles}className="badge badge-secondary"> {this.formatCount()} </span> */}
               <span className={this.getbadgeClasses()}> {this.formatCount()} </span> 
                <button onClick={this.handleIncrement} className='btn btn-secondary btn-sm'>increment</button>
                <button onClick={this.handleDecrement} className='btn btn-success btn-sm m-2'>Decrement</button>
                <button onClick={this.handleReset} className="btn btn-info btn-sm m-2">Reset</button>
                <button onClick={this.handleDelete} className="btn btn-danger btn-sm m-2">Delete</button>
                <ul>
                {this.state.tags.map(tag => <li>{tag}</li>)}
                </ul>
                </div>
        );
    }

    getbadgeClasses() {
        let classes = "babge  m-2 bg-";
        classes += (this.state.count === 0) ? "warning" : "primary";
        return classes;
    }

 formatCount() {
    const { count} = this.state;
    return  count === 0 ? 'zero' : count;

 }
}
export default Counter;