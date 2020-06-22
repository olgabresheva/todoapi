import React, {useState} from 'react';


function Form(props) {
    const [name, setToDoName] = useState('');
    const [description, setToDoDesc] = useState('');

    const onSubmit = () => {
        props.onSubmit({name, description});
        setToDoName('');
        setToDoDesc('');
    }
    return (
        <div>
            <input type="text" value={name} onChange={e => setToDoName(e.target.value)}/>
            <input type="name" value={description} onChange={e => setToDoDesc(e.target.value)}/>
            <button onClick={onSubmit} disabled={name.trim() === '' || description.trim() === ''} >Add Task</button>
        </div>
    );
}

export default Form;
