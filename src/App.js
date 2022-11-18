
import './App.css';
import { Component } from 'react';

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

  liClick = (index) => {
    // const elementClicked = event.target;
    // console.log(event.target);
    const { tasks } = this.state;
    tasks.splice(index, 1);
    this.setState(() => {
      return { tasks }
    });


  }

  render() {
    const { tasks } = this.state;
    return (
      <div className="App" >
        <h1>My To Do List</h1>
        <main>
          <div className='task-list'>
            <ul>
              {tasks.map((task, index) => {
                return <li key={index} onClick={() => this.liClick(index)}>{task}</li>
              })}
            </ul>
          </div>
          <div className='add-task'>
            <input type='search' id='input' onChange={this.handleChange} onKeyDown={this.keyDown} />
            <button onClick={this.addTask}>Add Task</button>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
