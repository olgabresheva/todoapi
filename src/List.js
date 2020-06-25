import React from 'react';
import ListItem from "./ListItem";

function List(props) {

    return (
        <div>
            {props.list.map(el =>
                <li className="card" key={el._id}>
                    <ListItem saveTask={props.saveTask}
                              todoItem={el}
                              onTaskStatusChange={props.onTaskStatusChange}
                              taskRemove={props.taskRemove}/>
                </li>)}
        </div>
    );
}

export default List;
