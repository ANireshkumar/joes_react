import PropTypes from "prop-types";
const ArraySample = (poprs) => {
    const {items} = poprs;
  return (
    <div>
        <h1>Array Sample</h1>
        <ul>
            
        {items.map((items)=>(
            <li key={items.id}>{items.name}</li>
        ))}
        </ul>
    </div>
  )
}

ArraySample.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired
        
    })
    )
}
export default ArraySample