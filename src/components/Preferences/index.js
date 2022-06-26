
import PropTypes from 'prop-types';
import CheckBox from '../ReusableComponents/CheckBox';

const Preferences = (props) => {
    const {handlePreferencesUpdate, userPreferences} = props;
    const { displayDropdowns, displayLightWorld, displayDarkWorld, displayConnectors, displayDungeons} = userPreferences;


    const updateDropdown = (category) => {
        const preferencesCopy = {...userPreferences}
        preferencesCopy[category]= !preferencesCopy[category];
        handlePreferencesUpdate(preferencesCopy)
    }
  return (
    <div>
      <h2>Preferences</h2>
      <p>Display Entrances:</p>
      <CheckBox
        name="Dropdowns"
        checked={displayDropdowns}
        handleChange={() => updateDropdown('displayDropdowns')}
        category='displayDropdowns'
      ></CheckBox>
      <CheckBox
        name="Light World"
        checked={displayLightWorld}
        handleChange={() => updateDropdown('displayLightWorld')}
      ></CheckBox>
      <CheckBox
        name="Dark World"
        checked={displayDarkWorld}
        handleChange={() => updateDropdown('displayDarkWorld')}
      ></CheckBox>
      <CheckBox
        name="Dungeons"
        checked={displayDungeons}
        handleChange={() => updateDropdown('displayDungeons')}
      ></CheckBox>
      <CheckBox
        name="Connectors"
        checked={displayConnectors}
        handleChange={() => updateDropdown('displayConnectors')}
      ></CheckBox>
    </div>
  );
};

Preferences.propTypes = {
    handlePreferencesUpdate: PropTypes.func,
    userPreferences: PropTypes.object
}
export default Preferences;
