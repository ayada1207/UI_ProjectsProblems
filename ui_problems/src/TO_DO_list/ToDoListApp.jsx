import ToDo from "./ToDo";
import TodoFrom from "./TodoForm";

const ToDoListApp = ({toDoList, handleToggle, handleFilter,addTask}) =>{

    return (
        <div>
            {toDoList.map(todo => {
                return (
                    <ToDo todo={todo} handleToggle={handleToggle} handleFilter={handleFilter}/>
                )
            })}
                  <TodoFrom addTask ={addTask} />
           <button style={{margin: '20px'}} onClick={handleFilter}>Clear</button>

        </div>
    );
}
export default ToDoListApp;