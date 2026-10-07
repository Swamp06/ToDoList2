import "./App.css"
import { useState , useEffect } from "react";

function App() {
  const [todos , setTodos] = useState([])
  const [inputValue , setInputValue] = useState("")
  function AddTodo() {
    if (inputValue != "" && isNaN(inputValue)) {
      setTodos([...todos , inputValue])
    }
  }

  const [cars , setCars] = useState([])
  const [inputValue1 , setInputValue1] = useState("")
  function AddCar() {
    if (inputValue1 != "" && isNaN(inputValue1)) {
      setCars([...cars , inputValue1])
    }
  }
  return (
    <div className="App">
      <div className="form">
        <input value={inputValue} onChange={(event)=> setInputValue(event.target.value)} />
      <button onClick={()=> AddTodo()}>Добавить</button>
      <h3>Список задач</h3>
      <div className="list">
          {todos.map((elem)=>{
            return <div> <span>{elem}</span> </div>
          })}
      </div>
      </div>
      

        <div className="form">
          <input value={inputValue1} onChange={(event)=> setInputValue1(event.target.value)} />
      <button onClick={()=> AddCar()}>Добавить</button>
      <h3>Список машин</h3>
      <div className="list">
          {cars.map((elem)=>{
            return <div> <span>{elem}</span> </div>
          })}
      </div>

        </div>
      
    </div>
  );
}

export default App;
