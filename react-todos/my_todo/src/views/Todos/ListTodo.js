import React from "react";
import './ListTodo.scss';

class listTodo extends React.Component {
    state = { 
        listTodo:[
            { id : 'todo1',title:'doing homework'},
            { id : 'todo2',title:'making video'},
            { id : 'todo3',title:'fixing bug'},
        ]
    }
    render(){
              let { listTodo } = this.state;
         //  let listTodo = this.state.listTodol
        return (
      
        <div className="list-todo-container">
            <div className="add-todo">
                <input type="text"/>
                <button type="button">Add</button>
            </div>
            <div className="list-todo-content">
                    <div className="todo-child">
                       <span>Todo 1</span> 
                        <button>Edit</button>
                        <button>Delete</button>
                        </div>
                        <div className="todo-child">
                       <span>Todo 1</span> 
                        <button>Edit</button>
                        <button>Delete</button>
                        </div>
                        <div className="todo-child">
                       <span>Todo 1</span> 
                        <button>Edit</button>
                        <button>Delete</button>
                        </div>

                   
            </div>
       </div>
        )
    }
}

export default listTodo;