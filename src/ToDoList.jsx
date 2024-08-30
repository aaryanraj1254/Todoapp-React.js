import React, { useState } from 'react';

function ToDoList(){
  const [activity, setActivity] = useState("");
  const [listData, setlistData] = useState([]);

  function addActivity(){
    setlistData((listData)=>{
      const updatedList = [...listData, activity];
      console.log(updatedList);
      setActivity('');
      return updatedList;
    });
  }

  function removeActivity(i){
    const updatedListData = listData.filter((elem, id) => {
      return i !== id;
    });
    setlistData(updatedListData);
  }

  function removeAll(){
    setlistData([]);
  }

  return(
    <>
      <div className='container'>
        <div className='header'>TODO LIST</div>
        <input type='text' placeholder='Add Activity' value={activity} onChange={(e)=>setActivity(e.target.value)} />
        <button onClick={addActivity}>Add</button>
        <p className='List-heading'>Here is your List:</p>
        {listData.length > 0 && listData.map((data, i)=>{
          return(
            <p key={i}>
              <div className="listData">{data}</div>
              <div className='btn-position'><button onClick={() => removeActivity(i)}>remove(-)</button></div>
            </p>
          )
        })}
        {listData.length >= 1 &&   
          <button onClick={removeAll}>Remove All</button>
        }
      </div>
    </>
  );
}

export default ToDoList;





// How it works:

// The component uses two state variables: activity to store the user's input, and listData to store the list of activities.
// When the user types in the input field and clicks the "Add" button, the addActivity function is called, which adds the input value to the listData array and clears the input field.
// The component renders a list of activities, with each item displaying the activity text and a "remove" button.
// When the user clicks the "remove" button, the removeActivity function is called, which filters out the selected activity from the listData array.
// If the user clicks the "Remove All" button, the removeAll function is called, which sets the listData array to an empty array, effectively clearing the list.