
import UserDetails from "./Components/UserDetails";
import "./css/app.css"
function App() {

const handleClick = () => {
  alert("You have clicked me");
}
  return (
    <>
    <UserDetails />
    <UserDetails />
     <UserDetails />
    </>
  )
}

export default App
