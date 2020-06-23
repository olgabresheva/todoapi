import React from 'react';
import ListItem from "./ListItem";

function List(props) {

    return (
        <ul>
            {props.list.map(el =>
                <li key={el._id}>
                    <ListItem name={el.name}
                              description={el.description}
                              SaveTaskName={props.SaveTaskName}/>

                    <button onClick={() => props.onTaskStatusChange(el._id, el.done)}>
                        {
                            el.done ? 'Done' : 'To Be Done'
                        }</button>
                    <button onClick={() => props.taskRemove(el._id)}>X</button>
                </li>)}
        </ul>
    );
}

export default List;
