import React, {useState} from 'react';


function ListItem(props) {

    const [isEdit, setIsEdit] = useState(false);
    const [taskEdit, setTaskEdit] = useState({});

    const nameEditer = (id, name, description) => {
        setIsEdit(true);
        setTaskEdit({...taskEdit,id: id, name: name, description: description});
    }

    const onEditNameChange = (e) => {
        setTaskEdit({...taskEdit, name: e.target.value})
    }

    const onEditDescriptionChange = (e) => {
        setTaskEdit({...taskEdit, description: e.target.value})
    }

    const saveTask = () => {
        props.saveTask(taskEdit.id, taskEdit.name, taskEdit.description)
        setTaskEdit({});
    }


    return (
        <span>
            {isEdit
                ? <>
                    <input type="text" value={taskEdit.name} onChange={onEditNameChange}/>
                    <input type="text" value={taskEdit.description} onChange={onEditDescriptionChange}/>
                    <button onClick={saveTask}>Save</button>
                </>
                :<>
                <span onClick={() => nameEditer(props.id, props.name, props.description)}>{props.name} - </span>
                <span onClick={() => nameEditer(props.id, props.name, props.description)}>{props.description}</span>
                </>
            }

        </span>
    );
}

export default ListItem;
