import React, {useState} from 'react';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";


function ListItem(props) {

    const deleteBtn = (
        <svg className="bi bi-trash bi-lg" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor"
             xmlns="http://www.w3.org/2000/svg">
            <path
                d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
            <path fillRule="evenodd"
                  d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
        </svg>);

    const doneBtn = (
        <svg className="bi bi-check-square text-success" width="1em" height="1em" viewBox="0 0 16 16"
             fill="currentColor"
             xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd"
                  d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
            <path fillRule="evenodd"
                  d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z"/>
        </svg>);

    const toBeDoneBtn = (
        <svg className="bi bi-clock-history text-primary" width="1em" height="1em" viewBox="0 0 16 16"
             fill="currentColor"
             xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd"
                  d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022l-.074.997zm2.004.45a7.003 7.003 0 0 0-.985-.299l.219-.976c.383.086.76.2 1.126.342l-.36.933zm1.37.71a7.01 7.01 0 0 0-.439-.27l.493-.87a8.025 8.025 0 0 1 .979.654l-.615.789a6.996 6.996 0 0 0-.418-.302zm1.834 1.79a6.99 6.99 0 0 0-.653-.796l.724-.69c.27.285.52.59.747.91l-.818.576zm.744 1.352a7.08 7.08 0 0 0-.214-.468l.893-.45a7.976 7.976 0 0 1 .45 1.088l-.95.313a7.023 7.023 0 0 0-.179-.483zm.53 2.507a6.991 6.991 0 0 0-.1-1.025l.985-.17c.067.386.106.778.116 1.17l-1 .025zm-.131 1.538c.033-.17.06-.339.081-.51l.993.123a7.957 7.957 0 0 1-.23 1.155l-.964-.267c.046-.165.086-.332.12-.501zm-.952 2.379c.184-.29.346-.594.486-.908l.914.405c-.16.36-.345.706-.555 1.038l-.845-.535zm-.964 1.205c.122-.122.239-.248.35-.378l.758.653a8.073 8.073 0 0 1-.401.432l-.707-.707z"/>
            <path fillRule="evenodd" d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0v1z"/>
            <path fillRule="evenodd"
                  d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z"/>
        </svg>);

    const [taskEdit, setTaskEdit] = useState({});
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const handleShow = (item) => {
        console.log(item)
        setShow(true);
        setTaskEdit(item)
    }

    const onEditNameChange = (e) => {
        setTaskEdit({...taskEdit, name: e.target.value})
    }

    const onEditDescriptionChange = (e) => {
        setTaskEdit({...taskEdit, description: e.target.value})
    }
    const saveTask = () => {
        props.saveTask(taskEdit);
        setTaskEdit({});
        setShow(false);
    }

    return (
        <div>

            <div onDoubleClick={() => handleShow(props.todoItem)}><strong>{props.todoItem.name}</strong></div>
            <div onDoubleClick={() => handleShow(props.todoItem)}>{props.todoItem.description}</div>

            <div className="input-group-append">
                <span className="input-group-text" onClick={() => props.onTaskStatusChange(props.todoItem._id, props.todoItem.done)}>
                {
                    props.todoItem.done ? doneBtn : toBeDoneBtn
                }
                </span>
                <span className="input-group-text" onClick={() => props.taskRemove(props.todoItem._id)}>{deleteBtn}</span>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Body>
                    <p><strong>Task Name:</strong></p>
                    <input type="text" value={taskEdit.name} onChange={onEditNameChange}/>
                    <p/>
                    <p><strong>Task Description:</strong></p>
                    <input type="text" value={taskEdit.description} onChange={onEditDescriptionChange}/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={saveTask}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default ListItem;
