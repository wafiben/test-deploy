import { useSelector } from "react-redux";

const Count=()=>{
    const globalState=useSelector(state=>state);
    return (<h1>{globalState}</h1>)
}


export default Count