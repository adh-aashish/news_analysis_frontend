import { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import "./inputform.css"

const InputForm = () => {
  const [input, setInput] = useState("");

  const handleSubmit = () => {

  }

  return (
    <form onSubmit={handleSubmit} className="input-form">
      <input type="text" name="name" className='input-box' value={input} placeholder="Search..." onChange = {(e) => setInput(e.target.value)} />
      <button className='search_button' onClick={handleSubmit}>
        <FaSearch className='search_icon' />
      </button>
    </form>
  )
}

export default InputForm
