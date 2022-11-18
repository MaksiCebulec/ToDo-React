import { Component } from "react";
import './task-list.styles.css';

class TaskList extends Component {
    // constructor() { no need for this
    //     super();
    // }
    render() {
        const { tasks, deleteTask } = this.props;
        return (
            <div className='task-list cntnr'>
                <ul>
                    {tasks.map((task, index) => {
                        return <li key={index} onClick={(event) => deleteTask(event, index)}>{task}</li>
                    })}
                </ul>
            </div>
        );
    }
}

export default TaskList;