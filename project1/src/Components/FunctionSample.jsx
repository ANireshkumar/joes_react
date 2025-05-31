import PropTypes from "prop-types"
const FunctionSample = (props) => {

    const {handleClick} = props
  return (
    <div>
        <p>This is a function component</p>
        <button onClick={handleClick}>Click Me!</button>
    </div>
  )
}

//Prop type

FunctionSample.propTypes = {
    handleClick: PropTypes.func.isRequired
};
export default FunctionSample