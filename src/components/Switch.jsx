import React, {useState} from 'react'


const Switch = () => {

  const [counter, setCounter] = useState(0);
  const [theme, setTheme ] = useState("light");



  const setDarkTheme = () => {
    setCounter (counter +1)
    setTheme ("dark")
  }

  const setLightTheme = () => {
    setCounter (counter +1)
    setTheme ( "light")
  }


  
  return (
    <div className={`switch ${theme}`}>
      <h2>Theme picker</h2>
      <h4>Times changed:{counter} </h4>
      <button onClick={setDarkTheme}>Light Mode</button>
      <button onClick ={setLightTheme}>Dark Mode</button>
    </div>
  )
}

export default Switch;
