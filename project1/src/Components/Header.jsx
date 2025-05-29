
const Header = () => {
    let customcss = "blue";
  return (
    <div>
       <h1>Adding the dynamic syling</h1>
<p>This is the <span className={customcss}>dynamic styling</span></p>
<p>This is the <span className={customcss}>dynamic styling</span></p>
<p>This is the <span className={customcss}>dynamic styling</span></p>
<p>This is the <span className="code">dynamic styling</span></p>
<p>This is the <span className="blue">dynamic styling</span></p>

<h1>This is a direct syling </h1>
<p style={{color:"green "}}>This is the <span className="blue">dynamic styling</span></p>
<p style={{color:"green , font-size:40px"}}>This is the <span className="blue">dynamic styling</span></p>
    </div>
  )
}

export default Header