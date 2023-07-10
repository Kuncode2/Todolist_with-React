import React,{useState} from 'react'
import Todoinput from './components/Todoinput'
import "./App.css"

export default function App() {
  const[listTodo,setListTodo]=useState([]);
  let addList = (inputText) =>{
    setListTodo([...listTodo,inputText]);
  }
  return (
    <div className="main-contain">
      <div className="center-contain">
        <Todoinput addList={addList}/>
      </div>
    </div>
  )
}

