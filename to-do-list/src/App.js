import './App.css';
import { useState } from 'react';

function App() {

  const [toDos, setToDos] = useState([]);
  const [toDo, setToDo] = useState("");

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input value={toDo} onChange={(e)=>setToDo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={()=>{ 
          if(toDo.trim() !== ""){
            setToDos([...toDos, {id: Date.now(), text: toDo, status: false}]);
            setToDo("");
          }
        }} className="fas fa-plus"></i>
      </div>
      <div className="todos">
        {
          toDos.map((obj) => {
            return (
              <div className="todo" key={obj.id}>
                <div className="left">
                  <input onChange={(e)=>{
                    setToDos(toDos.map((obj2) =>{
                      if(obj2.id === obj.id){
                        obj2.status = e.target.checked;
                      }
                      return obj2;
                    }));
                  }} checked ={obj.status} type="checkbox" name="" id="" />
                  <p>{obj.text}</p>
                </div>
                <div className="right">
                  <i onClick={()=>{
                    setToDos(toDos.filter((obj2) => obj2.id !== obj.id));
                  }} className="fas fa-times"></i>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
