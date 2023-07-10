import React,{useState} from 'react'


export const TodoInput = (props) => {
    const[inputText,setInputText] = useState('');
  return (
    <div className="input-container">
        <input type="text" className='input-box-todo' placeholder='enter your task'
        onChange={e=>{
          setInputText(e.target.value)
        }}/>
        <button className='add-btn'
        onClick={()=>{
          props.addList(inputText)
          setInputText("")
        }}>+</button>
    </div>
  )
}



export default TodoInput