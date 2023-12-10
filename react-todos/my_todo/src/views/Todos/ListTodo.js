import React from "react";
import './ListTodo.scss';
import AddTodo from "./AddTodo";
import {  toast } from 'react-toastify';

class ListTodo extends React.Component {
    state = { 
        listTodo:[
            { id : 'todo1',title:'doing homework'},
            { id : 'todo2',title:'making video'},
            { id : 'todo3',title:'fixing bug'},
        ]
    }

    addNewTodo= (todo) => { 
        this.setState({
            listTodo : [...this.state.listTodo, todo]
            
        })
        
        toast.success("Wow so easy!");
    }

    render(){
        let { listTodo } = this.state;  // Corrected property name
        return (
      
        <div className="list-todo-container">
                <AddTodo
                addNewTodo = {this.addNewTodo}
                />
            <div className="list-todo-content">
                {listTodo && listTodo.length > 0 && 
                listTodo.map((item,index) => (
                    <div className="todo-child" key={item.id}>
                        <span>{index + 1 } - {item.title} </span> 
                        <button className="edit">Edit</button>
                        <button className="delete">Delete</button>
                    </div>
                ))}
            </div>
       </div>
        )
    }
}

export default ListTodo;
