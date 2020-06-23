import React, {useState} from 'react';


function ListItem(props) {

    const [isEdit, setIsEdit] = useState(false);
    const [taskEdit, setTaskEdit] = useState({});

    const nameEditer = (name) => {
        setIsEdit(true);
        setTaskEdit({...taskEdit, name: name});
    }

    const onEditNameChange = (e) => {
        setTaskEdit({...taskEdit, name: e.target.value})
    }

    return (
        <span>
            {isEdit
                ? <>
                    <input type="text" value={taskEdit.name} onChange={onEditNameChange}/>
                    <button onClick={props.SaveTaskName}>S</button>
                </>
                : <span onClick={() => nameEditer(props.name)}>{props.name} - </span>
            }
            <span>{props.description}</span>

        </span>
    );
}

export default ListItem;
