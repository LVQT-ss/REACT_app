import React from "react";
import './ListTodo.scss';
import AddTodo from "./AddTodo";
import { toast } from 'react-toastify';

class ListTodo extends React.Component {
    state = { 
        listTodo:[
            { id : 'todo1',title:'doing homework'},
            { id : 'todo2',title:'making video'},
            { id : 'todo3',title:'fixing bug'},
        ],
        editTodo: {}
    }

    addNewTodo= (todo) => { 
        this.setState({
            listTodo : [...this.state.listTodo, todo]
            
        })
        
        toast.success("Wow so easy!");
    }
    handleDeleteTodo= (todo) => { 
        let currentTodos = this.state.listTodo
        currentTodos = currentTodos.filter(item => item.id !== todo.id)
        this.setState({
            listTodo : currentTodos
        })
        toast.success("Delete succed!");
    }
    handleEditTodo= (todo) =>{
        this.setState({
            editTodo: todo
        })
    }

    render(){
        let { listTodo , editTodo } = this.state;  // Corrected property name
        let isEmptyObject = Object.keys(editTodo).length===0;
        console.log('check em',isEmptyObject)
        return (
      
        <div className="list-todo-container">
                <AddTodo
                addNewTodo = {this.addNewTodo}
                />
            <div className="list-todo-content">
                {listTodo && listTodo.length > 0 && 
                listTodo.map((item,index) => (
                    <div className="todo-child" key={item.id}>
                        {isEmptyObject === true ? 
                        <span>{index +1 } - {item.title}</span>
                        :
                        <>
                        {editTodo.id === item.id ?
                        <span>
                        {index + 1} - <input value={editTodo.title} />
                         </span>
                         :
                         <span>{index +1 } - {item.title}</span>
                            }
                        </>
                      
                             }
                        <button className="edit"
                            onClick={() => this.handleEditTodo(item)}
                        >Edit</button>
                        <button className="delete"
                            onClick={() => this.handleDeleteTodo(item)}
                        >Delete</button>
                    </div>
                ))}
            </div>
       </div>
        )
    }
}

export default ListTodo;
