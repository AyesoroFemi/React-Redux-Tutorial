
import './App.css';
import { increment, decrement, reset } from './redux/actions/counterActions';
import { useSelector, useDispatch } from 'react-redux'
import { logIn, logOut } from './redux/actions/authActions';


function App() {

  const auth = useSelector((state) => state.authReducer)
  const counter = useSelector((state) => state.counterReducer)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <h1>counter:  {counter}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(reset())}>reset</button> <br /> <br />


      { auth? <h1>You are logged in</h1> : <h1> you are logged out of the system </h1> }
      <button onClick={() => dispatch(logIn())}>login</button>
      <button onClick={() => dispatch(logOut())}>logout</button>

    </div>
  );
};

export default App;
