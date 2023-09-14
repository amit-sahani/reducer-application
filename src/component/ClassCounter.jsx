import {Component, PureComponent} from "react";

class CounterClass extends PureComponent {
    constructor(){
        super()
        this.state = {counter: 0, inp:''}

    }
    incrementCounter=()=>{
        this.setState({...this.state, counter: this.state.counter + 1})
    }

    decrementCounter=()=>{
        this.setState({...this.state, counter: this.state.counter - 1})
    }

    render(){
        return (<div>Hi, I'm from class component.{this.props.name}
            <strong>Counter: {this.state.counter}</strong>
            <button onClick={this.incrementCounter}>Increment</button>
            <button onClick={this.decrementCounter}>Decrement</button>
        </div>)
    }
}

export default CounterClass;