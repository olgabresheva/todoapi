import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Form from "./Form";
import List from "./List";

function App() {

    const [list, setList] = useState([]);

    const getAllToDos = () => {
        axios({
            url: 'http://localhost:5000/todo',
            method: 'GET'
        })
            .then(res => {
                console.log(res)
                setList(res.data)
            })
            .catch(e => console.log(e))
    };

    useEffect(() => {
        getAllToDos();
    }, []);

    const taskRemove = (id) => {
        axios({
            url: `http://localhost:5000/todo/${id}`,
            method: 'DELETE'
        })
            .then(res => {
                getAllToDos();
            })
            .catch(e => console.log(e))
    };

    const createToDo = (form) => {
        console.log(form)
        axios({
            url: 'http://localhost:5000/todo',
            method: 'POST',
            data: form
        })
            .then(res => {
                getAllToDos();
            })
            .catch(e => console.log(e))
    }

    const onTaskStatusChange = (id, done) => {
        console.log(done)
        axios({
            url: `http://localhost:5000/todo/${id}`,
            method: 'PUT',
            data: {done: !done}
        })
            .then(res => {
                getAllToDos();
            })
            .catch(e => console.log(e))
    }

    const saveTask = (toDoItem) => {
        console.log(toDoItem._id)
        console.log(toDoItem.name)
        console.log(toDoItem.description)
        axios({
            url: `http://localhost:5000/todo/${toDoItem._id}`,
            method: 'PATCH',
            data: {
                name: toDoItem.name,
                description: toDoItem.description
            }
        })
            .then(res => {
                getAllToDos();
            })
            .catch(e => console.log(e))
    }

    return (
        <div className="container">
            <h4>Your To Do List:</h4>
            <Form onSubmit={createToDo}/><br/>
            <List list={list}
                  taskRemove={taskRemove}
                  onTaskStatusChange={onTaskStatusChange}
                  saveTask={saveTask}
            />
        </div>
    );
}

export default App;
