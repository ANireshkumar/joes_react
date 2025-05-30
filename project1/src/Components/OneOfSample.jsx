import PropTypes from "prop-types"
const OneOfSample = (props) => {
    const {color} = props;

  return (
    <div style={{backgroundColor: color, padding: "10px",   color: "white"}}>
        <p>This component has a baground color of {color}</p>
    </div>
  )
}

OneOfSample.propTypes = {
    color: PropTypes.oneOf(["red", "blue", "green"])
}
export default OneOfSample