import { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import "./style.css"

const InputForm = () => {
  const [input, setInput] = useState("");

  const handleSubmit = () => {

  }

  return (
    <div className='search'>
      <form onSubmit={handleSubmit} className="input-form">
        <input type="text" name="name" className='input-box' value={input} placeholder="खबर लेखनुहोस..." onChange = {(e) => setInput(e.target.value)} />
        <button className='search_button' onClick={handleSubmit}>
          <FaSearch className='search_icon' />
        </button>
      </form>

    </div>
  )
}

export default InputForm
