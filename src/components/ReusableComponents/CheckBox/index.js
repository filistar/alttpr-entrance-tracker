import PropTypes from 'prop-types';

const CheckBox = (props) => {
  const { name, checked, handleChange } = props;
  return (
    <div className="checkboxWrapper">
      <label>
        <input type="checkbox" checked={checked} onChange={handleChange} />
        {name}
      </label>
    </div>
  );
};

CheckBox.propTypes = {
  name: PropTypes.string,
  checked: PropTypes.bool,
  handleChange: PropTypes.func
};

export default CheckBox;
