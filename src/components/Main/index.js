import Preferences from '../Preferences';
import { useState } from 'react';
import Tracker from '../Tracker';

const Main = () => {
  const [userPreferences, setUserPreferences] = useState({
    displayDropdowns: true,
    displayLightWorld: true,
    displayDarkWorld: true,
    displayConnectors: true,
    displayDungeons: true,
  });
  const [displayTracker, setDisplayTracker] = useState(false);

  const handleClick = () => {
    setDisplayTracker(true);
  };

  const hideTracker = () => {
    setDisplayTracker(false);
  };

  const handlePreferencesChange = (preferences) => {
    setUserPreferences(preferences);
  };

  const renderContent = () => {
    if (displayTracker) {
      return <Tracker onBackClick={hideTracker} userPreferences={userPreferences}></Tracker>;
    }
    return (
      <>
        <h1 className="h1">Simple ALTTPR Entrance Tracker</h1>
        <p>
          The tracker is color coded to differenciate between dropdowns, light world, dark world and
          connector entrances.
        </p>
        <p>Instructions:</p>
        <ol>
          <li>Left click to mark found locations.</li>
          <li>
            Right click to highlight locations (e.g. to mark locations that have been found but the
            chest was not opened for whatever reason).
          </li>
        </ol>
        <Preferences
          handlePreferencesUpdate={handlePreferencesChange}
          userPreferences={userPreferences}
        ></Preferences>
        <button onClick={handleClick} className='startButton'>Start Tracking!</button>
        <h2>Acknowlegments:</h2>
        <p>This tracker is based on <a href="https://www.twitch.tv/fearagent_" target="_blank" rel="noreferrer">fearagent</a>'s entrance tracker</p>
<hr></hr>
        <p>For troubleshooting, comments and suggestions: <a href="https://discord.gg/R7uY6f9RV5" target="_blank" rel="noreferrer">https://discord.gg/R7uY6f9RV5</a></p>
      </>
    );
  };

  return <div>{renderContent()}</div>;
};
export default Main;
