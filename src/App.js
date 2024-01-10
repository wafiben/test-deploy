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
  
  return (
    <div className="App">
      <button onClick={handleIncrement}>+</button>
      <Count/>
  
    </div>
  );
}

export default App;
