
import React,{useState} from "react";
import './../styles/App.css';

function App(){
  const [fields, setFields]=useState([
    {name:"", age:""}
  ]);

const handleChange=(index,e)=>{
  const newFields=[...fields];
  newFields[index][e.target.name]=e.target.value;
  setFields(newFields);
};


const addFields=()=>{
  setFields([...fields,{name:"", age:""}]);
};


const removeFields=(index)=>{
  const newFields=fields.filter((_,i)=>i !==index);
  setFields(newFields);
};


const handleSubmit=(e)=>{
  e.preventDefault();
  console.log("Form Data:",fields);
  alert("Check console for submitted data.");
};


return(
  <div style={{padding:"30px"}}>
    <h2>Dynamic fields form</h2>

    <form onSubmit={handleSubmit}>
      {fields.map((field,index)=>(
        <div 
        key={index}
        style={{border:"1px solid #aaa",
          padding:"15px",
          marginBottom:"10px",
          borderRadius:"8px",
        }}
        >

          <input type="text" name="name" placeholder="Type name" value={field.name} onChange={(e)=>handleChange(index,e)}
          style={{padding:"8px", marginRight:"10px"}} />

            <input
              type="number"
              name="age"
              placeholder="Age"
              value={field.age}
              onChange={(e) => handleChange(index, e)}
              style={{ padding: "8px", marginRight: "10px" }}
            />
  <button
              type="button"
              onClick={() => removeFields(index)}
              style={{
                background: "red",
                color: "white",
                border: "none",
                padding: "8px 12px",
                borderRadius: "5px",
                cursor: "pointer"
              }}
            >
              Remove
            </button>
        </div>
      ))}

        <button
          type="button"
          onClick={addFields}
          style={{
            background: "#0984e3",
            color: "white",
            padding: "10px 15px",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            marginRight: "20px"
          }}
        >
          Add More
        </button>

        <button
          type="submit"
          style={{
            background: "green",
            color: "white",
            padding: "10px 15px",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer"
          }}
        >
          Submit Form
        </button>
    </form>
  </div>
)
}

export default App
