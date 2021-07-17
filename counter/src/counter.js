import React, { Component } from "react"; 

class Counter extends Component{
    constructor(){
        super();
        this.state={
            count:0,
        };
    }
    increment = () => this.setState({count:this.state.count+1});
    decrement = () => this.setState({count:this.state.count-1});
    reset = () => this.setState({count:0});
    render(){
        return(
            <>

        <p> count-{this.state.count}</p>
        <button onClick={this.increment}>INCREMENT</button>
        <button onClick={this.decrement}>DECREMENT</button>
        <button onClick={this.reset}>RESET</button>

            </>
        )
    }

}

export default Counter;