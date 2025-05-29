
const Header = () => {
    const items = [ "item1", "item2", "item3" , "item4"]
  return (
    <div>
       <h1>Handling the Lists</h1>

       <ul>
           {
               items.map((item, index) => <li key={index}>{item}</li>)
           }
       </ul>
    </div>
  )
}

export default Header