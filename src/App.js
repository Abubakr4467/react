import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function countInitial() {
  console.log("run function ")
  return 6;
}  // runs every time 

function App() {
  // useState()
  // no in condition 
  // const [count, setCount ] = useState( () => countInitial()) // runs only once

  // const [count, setCount ] = useState(4)  //runs only once in the beginning 
  // const [count, setCount ] = useState(countInitial())


  // const [state, setState ] = useState({count:4, theme: 'blue'} ) 
  // const count = state.count;
  // const theme = state.theme;


  const [count, setCount] = useState(1);
  const [theme, setTheme] = useState('red');

  // function  decrementCount(){
  //   setCount( count -1 );
  // }

  function decrementCount() {
    // setCount( prevCount => prevCount -1 );
    // setCount( prevCount => prevCount -1 ); // 2 // 0 //-2


    // setState(prevState =>{
    //   return {...state, count: prevState.count-1 }
    // } )

    setCount(prevCount => prevCount - 1);



  }

  function incrementCount() {
    // setCount(prevCount => prevCount +1 )


    // setState(prevState => {
    //   return {...state,  count: prevState.count+1}
    // })

    setCount(prevCount => prevCount + 1)
    setTheme("gray")

  }


  return (
    <>
      <button onClick={decrementCount}>-</button>
      {/* // const [count, setCount ] = useState( () => countInitial()) // runs only once  */}
      <span>{count}</span>
      <span>{theme}</span>
      <button onClick={incrementCount}>+</button>

    </>
  );
}
export default App;
