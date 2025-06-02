
import "./RegFrm.css"
import { useState } from "react"
const RegFrm = () => {
    const [User, setUser] = useState(
        {name: "Sathya", age: 32, gender: "Male", isMarrried: true, country: "India", bio:"Write something about yourself"}
    )
    function changeHandler(e){
        const name = e.target.name;
        const value = e.target.type==="checkbox" ? e.target.checked : e.target.value;
        setUser({...User, [name]: value})
    }
  return (
    <>
<table>
    <tbody>
        <tr>
            <td>Name</td>
            <td>{User.name}</td>
        </tr>
        <tr>
            <td>Age</td>
            <td>{User.age}</td>
        </tr>
        <tr>
            <td>Gender</td>
            <td>{User.gender}</td>
        </tr>
        <tr>
            <td>isMarrried</td>
            <td>{User.isMarrried? "yes" : "no"}</td>
        </tr>
        <tr>
            <td>Country</td>
            <td>{User.country}</td>
        </tr>
        <tr>
            <td>Bio</td>
            <td>{User.bio}</td>
        </tr>
    </tbody>
</table>
<form>

    <input type="text" placeholder="Enter your name"  value={User.name} onChange={changeHandler} name="name"/>
    <input type="number" placeholder="Enter your Age" value={User.age} onChange={changeHandler} name="age"/>
<div className="gender">
    <label htmlFor="male">
        Male
        <input type="radio" name="gender" id="male" checked={User.gender === "Male"} value="Male" onChange={changeHandler} />
    </label>
    <label htmlFor="female">
        Female
        <input type="radio" name="gender" id="female" checked={User.gender === "Female"} value="Female" onChange={changeHandler} />
    </label>
</div>
<label htmlFor="isMarrried">
    isMarrried
    <input type="checkbox" name="isMarrried" id="isMarrried" checked={User.isMarrried}onChange={changeHandler} />
</label>
<div className="country">
    <label htmlFor="country">Select Country</label>
    <select name="country" id="country" value={User.country} onChange={changeHandler}>
        <option value="India">India</option>
        <option value="USA">USA</option>
        <option value="UK">UK</option>
    </select>
</div>
<textarea name="bio" id="bio" cols={30} rows={5} value={User.bio} onChange={changeHandler} placeholder="Write about yourself"></textarea>
</form>

    </>
  )
}

export default RegFrm