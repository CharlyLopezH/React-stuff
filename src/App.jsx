import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'

function App() {
  const [count, setCount] = useState(0);

  const onHandleInputChange=({target})=>{

    if (target.checked) {
         setCount((count) => count + 1);
    } else {
      setCount((count) => count - 1);
    }
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>



    <div>
      Input
      El valor del input 0 es:
      <input type = "checkbox" 
      onChange={onHandleInputChange}   
      checked={false}
      />
      <p>El valor del input 1 es: {count} </p>
      <input type= "checkbox" onChange={onHandleInputChange} />
      <p>El valor del input 2 es: {count} </p>
      <input type= "checkbox" onChange={onHandleInputChange} />
      <p>El valor del input 3 es: {count} </p>
      <input type= "checkbox" onChange={onHandleInputChange}/>
      <p>El valor del input 4 es: {count} </p>
    </div>


      <div className="card">
        <button className= "btn btn-button btn-success" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

         <hr/>



        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
