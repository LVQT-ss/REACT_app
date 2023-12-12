import React from "react";
import './ListTodo.scss';
import AddTodo from "./AddTodo";
import { toast } from 'react-toastify';

class ListTodo extends React.Component {
    state = {
        listTodo: [
            { id: 'todo1', title: 'doing homework' },
            { id: 'todo2', title: 'making video' },
            { id: 'todo3', title: 'fixing bug' },
        ],
        editTodo: {}
    }

    addNewTodo = (todo) => {
        this.setState({
            listTodo: [...this.state.listTodo, todo]

        })

        toast.success("Wow so easy!");
    }
    handleDeleteTodo = (todo) => {

        let currentTodos = this.state.listTodo
        currentTodos = currentTodos.filter(item => item.id !== todo.id)
        this.setState({
            listTodo: currentTodos
        })
        toast.success("Delete succed!");
    }
    handleEditTodo = (todo) => {
        let { editTodo, listTodo } = this.state;
        let isEmptyObject = Object.keys(editTodo).length === 0;
        //save
        if (isEmptyObject === false && editTodo.id == todo.id) {
            let listTodoCopy = [...listTodo];
            //Find index of specific object using findIndex method.    
            let objIndex = listTodoCopy.findIndex((item => item.id == todo.id));

            //Update object's name property.
            listTodoCopy[objIndex].title = editTodo.title;
            this.setState({
                listTodo:listTodoCopy,
                editTodo:''
            })
            toast.success("Update todo success!");
            return;
        }



        //edit
        this.setState({
            editTodo: todo
        })
    }

    handleOnchangeEditTodo = (event) => {
        let editTodoCopy = { ...this.state.editTodo };
        editTodoCopy.title = event.target.value;
        this.setState({
            editTodo: editTodoCopy
        })
    }

    render() {
        let { listTodo, editTodo } = this.state;  // Corrected property name
        let isEmptyObject = Object.keys(editTodo).length === 0;
        console.log('check em', isEmptyObject)
        return (
                <>
                <p>
          simple TOTO Apps with REACTjs
        </p>
            <div className="list-todo-container">
                <AddTodo
                    addNewTodo={this.addNewTodo}
                />
                <div className="list-todo-content">
                    {listTodo && listTodo.length > 0 &&
                        listTodo.map((item, index) => (
                            <div className="todo-child" key={item.id}>
                                {isEmptyObject === true ?
                                    <span>{index + 1} - {item.title}</span>
                                    :
                                    <>
                                        {editTodo.id === item.id ?
                                            <span>
                                                {index + 1} - <input value={editTodo.title}
                                                    onChange={(event) => this.handleOnchangeEditTodo(event)}
                                                />
                                            </span>
                                            :
                                            <span>{index + 1} - {item.title}</span>
                                        }
                                    </>

                                }
                                <button className="edit"
                                    onClick={() => this.handleEditTodo(item)}>
                                    {isEmptyObject === false && editTodo.id === item.id ? 'Save' : 'Edit'}
                                </button>
                                <button className="delete"
                                    onClick={() => this.handleDeleteTodo(item)}
                                >Delete</button>
                            </div>
                        ))}
                </div>
            </div>
            </>
        )
    }
}

export default ListTodo;
