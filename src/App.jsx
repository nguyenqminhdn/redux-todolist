import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch } from 'react-redux';
import AddButton from './AddButton';
import { add } from './todoSlide';
import ToDoList from './ToDoList';

function App() {
  const [inputValue, setInputValue] = useState("");

  const dispatch = useDispatch();
  const id = 0;

  const handleAddClick = () => {
    console.log("inputValue= " + inputValue);
    if (inputValue !== "") {
      
      dispatch(add(id, inputValue));
      setInputValue("");
      id++;
    }
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}        
      />
      <AddButton
        handleButtonClick={handleAddClick}
      />
      <ToDoList/>
    </div>
  )
}

export default App
