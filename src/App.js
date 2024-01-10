import logo from "./logo.svg";
import "./App.css";
import { useDispatch} from "react-redux";
import { increment,decrement } from "./redux/count/counActions";
import Count from "./components/Count";

function App() {
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleDecrement=()=>{
    dispatch(decrement());
    console.log('sss')
  }

  return (
    <div className="App">
      <button onClick={handleIncrement}>+</button>
      <Count/>
      <button onClick={handleDecrement}>-</button>
    </div>
  );
}

export default App;
