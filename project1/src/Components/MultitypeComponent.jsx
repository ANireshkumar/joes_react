import PropTypes from "prop-types"
const MultitypeComponent = (props) => {
  return (
    <div>
        <h1>The vailue is {props.value}</h1>
    </div>
  )
}

MultitypeComponent.propTypes = {
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool])
}
export default MultitypeComponent