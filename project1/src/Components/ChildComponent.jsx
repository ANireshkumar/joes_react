import PropTypes from "prop-types"

const ChildComponent = (props) => {
  return (
    <div>
        <h1>This is a child component</h1>
        <div>
{props.children}
        </div>
    </div>
  )
}
ChildComponent.propTypes = {
    children: PropTypes.array
}

export default ChildComponent