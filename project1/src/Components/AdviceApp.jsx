import "./AdviceApp.css"
import { useState } from "react"
const AdviceApp = () => {
    const [advice, setAdvice] = useState('Please click the button to get advice')
   const [count, setCount] = useState(0)
    async function  getAdvice(){
    const res = await fetch('https://api.adviceslip.com/advice')
 const data = await res.json()
 setAdvice(data.slip.advice)
 setCount(count + 1)
  }
    return (
    <div>
<h3>{advice}</h3>
<button onClick={getAdvice}>Get Advice</button>
<p>You have read <b>{count}</b> great advice </p>

    </div>
  )
}

export default AdviceApp