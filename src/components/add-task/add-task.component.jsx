import { Component } from "react";
import './add-task.styles.css';



const AddTask = (props) => {
    const { handleChange, keyDown, addTask, inputValue } = props;
    return (
        <div className='add-task'>
            <input type='search' id='input' value={inputValue} onChange={handleChange} onKeyDown={keyDown} />
            <button onClick={addTask}>Add Task</button>
        </div>
    );

}


// class AddTask extends Component {
//     render() {
//         const { handleChange, keyDown, addTask, inputValue } = this.props;
//         return (
//             <div className='add-task'>
//                 <input type='search' id='input' value={inputValue} onChange={handleChange} onKeyDown={keyDown} />
//                 <button onClick={addTask}>Add Task</button>
//             </div>
//         )
//     }
// }

export default AddTask;