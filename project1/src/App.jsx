// import LearnComponent from "./Components/LearnComponent"

// import Header from "./Components/Header"

import Student from "./Components/Student"
import "./css/app.css"
function App() {
 

  return (
    <>
    {/* <div>THIS IS PROJECT 1 learing the components</div>
    <LearnComponent /> */}
    {/* <Header /> */}
    <Student name="sudhanshu" age="20" isMarried={true} />
    <Student name="sudhanshu" age="20" isMarried={false} />
    <Student name="Mari" age="27" isMarried={true} />
   <Student />
    </>
  )
}

export default App
