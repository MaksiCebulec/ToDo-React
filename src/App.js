
import './App.css';
import { Routes, Route, Outlet } from 'react-router-dom';
import ToDoList from './routes/to-do-list/to-do-list.component';
import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';

const Notes = () => {
  return (
    <h1>These are your notes.</h1>
  );


}

const App = () => {

  return (
    <div className="App" >
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path='to-do' element={<ToDoList />} />
          <Route path='notes' element={<Notes />} />
        </Route>
      </Routes>
    </div>
  );
}


// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       tasks: ['make bed', 'study for 1 hour', 'shower'],
//       inputValue: '',
//       inputElement: ''
//     }
//   }

// addTask = () => {
//   const { inputValue: taskText, tasks } = this.state;
//   if (taskText) {
//     tasks.push(taskText);
//     this.setState(() => {
//       return { tasks }
//     }, () => {
//       this.state.inputValue = '';
//       this.state.inputElement.value = '';
//     });
//   } else {
//     alert('No input text!!');
//   }



// handleChange = (event) => {
//   this.setState(() => {
//     return {
//       inputValue: event.target.value,
//       inputElement: event.target
//     }
//   });
// }

// keyDown = (event) => {
//   {/*&& as a if statement */ }
//   event.key === 'Enter' && this.addTask(); {/*if(event.key==='Enter' this.addTask();)*/ }
// }

// deleteTask = (event, index) => {//delete
//   const { tasks } = this.state;
//   tasks.splice(index, 1);
//   this.setState(() => {
//     return { tasks }
//   });
// }

// render() {
//   const { tasks } = this.state;
//   const { deleteTask, handleChange, keyDown, addTask } = this;
//   return (
//     <div className="App" >
//       <h1 className="animate__animated animate__bounce">My To Do List</h1>
//       <main>
//         <TaskList tasks={tasks} deleteTask={deleteTask} />
//         <AddTask handleChange={handleChange} keyDown={keyDown} addTask={addTask} />
//       </main>
//     </div>
//   );
// }


export default App;
