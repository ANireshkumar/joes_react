

import FunctionSample from "./Components/FunctionSample"
import "./css/app.css"
function App() {

const handleClick = () => {
  alert("You have clicked me");
}
  return (
    <>
    <div><h1>This is a parent component</h1></div>
<FunctionSample  handleClick={handleClick}/>
    </>
  )
}

export default App
