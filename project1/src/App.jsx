import ArraySample from "./Components/ArraySample.jsx"
import "./css/app.css"
function App() {
  const items = [
    { id: 1, name: "item1" },
    { id: 2, name: "item2" },
    { id: 3, name: "item3" },
    { id: 4, name: "item4" },
  ]
 

  return (
    <>

      <ArraySample items={items} />
    </>
  )
}

export default App
