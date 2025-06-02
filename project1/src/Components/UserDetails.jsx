import { useState } from "react"

const UserDetails = () => {
    const [User, setUser] = useState({name: "", age: ""})
    function changeName(e){
        const newStateObject = { ...User}
        newStateObject.name = e.target.value
        setUser(newStateObject)

    }
     function changeAge(e){
    setUser ((oldstate)=>{
        return {...oldstate, age: e.target.value}
    })

    }
    
  return (
<>
<form>
    <h3>This is a form for displaying the user details</h3>
    <h4>Name: {User.name}</h4> <h4>Age: {User.age}</h4>
<input type="text" placeholder="Enter your name" onChange={changeName} value ={User.name} />
<input type="text" placeholder="Enter your Age" onChange={changeAge} value={User.age} />

</form>
</>  )
}

export default UserDetails