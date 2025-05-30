
import MultitypeComponent from "./Components/MultitypeComponent"
import "./css/app.css"
function App() {


  return (
    <>

  <MultitypeComponent value="hello" />
<MultitypeComponent value={10} />
<MultitypeComponent value={true} />
    </>
  )
}

export default App
