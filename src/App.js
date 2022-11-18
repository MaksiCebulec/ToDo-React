
import './App.css';
import { Component } from 'react';
import TaskList from './components/task-list/task-list.component';
import AddTask from './components/add-task/add-task.component';

class App extends Component {
  constructor() {
    super();
    this.state = {
      tasks: ['make bed', 'study for 1 hour', 'shower'],
      inputValue: '',
      inputElement: ''
    }
  }

  addTask = () => {
    const { inputValue: taskText, tasks } = this.state;
    if (taskText) {
      tasks.push(taskText);
      this.setState(() => {
        return { tasks }
      }, () => {
        this.state.inputValue = '';
        this.state.inputElement.value = '';
      });
    } else {
      alert('No input text!!');
    }

  }


  handleChange = (event) => {
    this.setState(() => {
      return {
        inputValue: event.target.value,
        inputElement: event.target
      }
    });
  }

  keyDown = (event) => {
    {/*&& as a if statement */ }
    event.key === 'Enter' && this.addTask(); {/*if(event.key==='Enter' this.addTask();)*/ }
  }

  deleteTask = (index) => {//delete
    const { tasks } = this.state;
    tasks.splice(index, 1);
    this.setState(() => {
      return { tasks }
    });
  }

  render() {
    const { tasks } = this.state;
    const { deleteTask, handleChange, keyDown, addTask } = this;
    return (
      <div className="App" >
        <h1>My To Do List</h1>
        <main>
          <TaskList tasks={tasks} deleteTask={deleteTask} />
          <AddTask handleChange={handleChange} keyDown={keyDown} addTask={addTask} />
        </main>
      </div>
    );
  }
}

export default App;
