import data from './data.json'
import './App.css';
import ToDoListApp from './TO_DO_list/ToDoListApp';
import { useState } from 'react';
import Header from './TO_DO_list/Header';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyNavBar from './MyNavBar';
import ResumeBuilder from './ResumeBuilder/ResumeBuilder';

function App() {

  const [toDoList,setToDoList] = useState(data);

  const handleToggle = (id)=>{
    let mapped = toDoList.map(task =>{
        return (task.id === Number(id)) ? {...task, complete: !task.complete} :{ ...task};
    })
    setToDoList(mapped);
}

const handleFilter = () => {
  let filtered = toDoList.filter(task => {
    return !task.complete;
  });
  setToDoList(filtered);
}
const  addTask= (userInput)=>{
let copy = [...toDoList];
copy =[...copy, {id:toDoList.length+1,task:userInput,complete:false}];
setToDoList(copy);
}

  return (
    <BrowserRouter>
      <MyNavBar />
      <Routes>
        <Route path='/todoApp' element={< div className='App-header'>
          <h2 className='App'> Welcome to UI-coding challenges!!</h2>
          <>
            <Header />
            <ToDoListApp toDoList={toDoList} handleToggle={handleToggle}
              handleFilter={handleFilter} addTask={addTask} />
          </>
        </div>}></Route>

        <Route path='/resumeBuilder' element={<ResumeBuilder/>}>

        </Route>
      </Routes>
    </BrowserRouter>
  
  );
}

export default App;
