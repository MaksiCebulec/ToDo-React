import { Component } from "react";

class AddTask extends Component {
    render() {
        const { handleChange, keyDown, addTask } = this.props;
        return (
            <div className='add-task'>
                <input type='search' id='input' onChange={handleChange} onKeyDown={keyDown} />
                <button onClick={addTask}>Add Task</button>
            </div>
        )
    }
}

export default AddTask;