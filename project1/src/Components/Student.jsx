import PropTypes from 'prop-types';

const Student = (props) => {
  return (
    <div className="student">
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <td>{props.name}</td>
          </tr>
          <tr>
            <th>Age</th>
            <td>{props.age}</td>
          </tr>
          <tr>
            <th>isMarried</th>
            <td>{props.isMarried ? "yes" : "no"}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

Student.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  isMarried: PropTypes.bool
};
Student.defaultProps = {
  name:"No name",
  age: "N0",
  isMarried: true
};
export default Student;
