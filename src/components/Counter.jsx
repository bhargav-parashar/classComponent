import React from "react";
import styles from './Counter.module.css';

class Counter extends React.Component{
    //have a state for count variable
    constructor(){
        super();
        this.state = {count:0};
    }
    //have an increment count function
    handleIncrement = ()=>{
        this.setState((prev)=>{return{count:prev.count+1}});
    }
    //have a decrement count function
    handleDecrement = ()=>{
        this.setState((prev)=>{return{count:prev.count-1}});
    }
    render(){
        return(
            <div className={styles.wrapper}>
            <h1>Counter App</h1>
            <p>{`Count: ${this.state.count}`}</p>
            <div className={styles.buttonWrapper}>
                <button name="Increment" onClick={this.handleIncrement}>Increment</button>
                <button name="Decrement" onClick={this.handleDecrement}>Decrement</button>
            </div>
            </div>
        )
    }
}
export default Counter;