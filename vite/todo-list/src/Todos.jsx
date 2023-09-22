//Use rfce for this 
import React, {useState} from 'react';

const Todos = () => {
  //this has to go right here 
const [value, setValue] = useState("");
const [item, setItem] = useState([]);
const [index, setIndex] = useState(null); 
//this part of the code can track the right index

// const [remove, removeItem] = useState([]);
// const [update, updateItem] = useState([]);
  const handleClick = ()=> {
    setItem([...item, value])
    setValue("");
    //Setvalue will clear the input box after a change is made
  }  

  const deleteItems = (index) => {
    const updatedItems = [...item.slice(0, index), , ...item.slice(index + 1)];
    setItem(updatedItems); //spread operator= ()...) and it copies item array. 
  } //slice makes a new array and removes item from the new aqrray
//   

const editItem = (editIndex) => {
    setValue(item[editIndex]);
    setIndex(editIndex);
  };
  //Above code is used to load data into input field so it can be edited
  //setIndex tracks which item is edited at the time
  
  return (
    <div>
        <input value={value} onChange={(e)=> setValue(e.target.value)}/>
        <button onClick={handleClick}> Add to list </button>
     
{/* the key gives identity to the buttons below */}
<div>
        <ol>
          {item.map((todo, i) => (
            <li key={i}>
              {todo}
              <button onClick={() => editItem(i)}>Edit</button>
              <button onClick={() => deleteItems(i)}>Delete</button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};
//curly braces is javascript
export default Todos;