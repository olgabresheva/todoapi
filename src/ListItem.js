import React, {useState} from 'react';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";


function ListItem(props) {

    const [taskEdit, setTaskEdit] = useState({});
   // const [toDoItem, setToDoItem] = useState(props.todoItem)
   //  const [nameEdit, setNameEdit] = useState(props.todoItem.name);
   //  const [descrEdit, setDescrEdit] = useState(props.todoItem.description)

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const handleShow = (item) => {
        console.log(item)
        setShow(true);
        setTaskEdit(item)
    }

    // const onEditNameChange = (e) => {
    //     setNameEdit(e.target.value)
    // }
    //
    // const onEditDescriptionChange = (e) => {
    //     setDescrEdit(e.target.value)
    // }

    const onEditNameChange = (e) => {
        setTaskEdit({...taskEdit, name: e.target.value})
    }

    const onEditDescriptionChange = (e) => {
        setTaskEdit({...taskEdit, description: e.target.value})
    }
    const saveTask = () => {
        // toDoItem['name'] = nameEdit;
        // toDoItem['description'] =  descrEdit;
        //setTaskEdit({...taskEdit, name: nameEdit, description: descrEdit});
        props.saveTask(taskEdit);
        setTaskEdit({});
        setShow(false);
    }

    return (
        <div>

            <span onDoubleClick={() => handleShow(props.todoItem)}>{props.todoItem.name} - </span>
            <span onDoubleClick={() => handleShow(props.todoItem)}>{props.todoItem.description}</span>

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
