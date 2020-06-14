import React, { Component } from 'react'

export class Todo extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             userInput:'',
             items:[]
        }
    }
    
    onChange(event){this.setState({userInput:event.target.value})}
    addTodo=(event)=>{
        event.preventDefault();
        this.setState({items:[...this.state.items,this.state.userInput]});
        
    }
    renderTodo(){
        return this.state.items.map((item)=>{return(
            <div key={item}>{item}<button onClick={this.deleteTodo.bind(this)}>X</button></div>
            )} )
    }
    deleteTodo(event){
        event.preventDefault();
        const array =this.state.items;
        const index=array.indexOf(event.target.value);
        array.splice(index,1);
        this.setState({items:array});
    }
    render() {
        return (
            <div>
            <form action="">
        <input  
        value={this.state.userInput} 
        type="text" 
        placeholder="Renseigner un item"
        onChange={this.onChange.bind(this)}/>
        <button onClick={this.addTodo.bind(this)}>Ajouter</button>
        </form>  
        <div>{this.renderTodo()}</div>
            </div>
        )
    }
}

export default Todo
