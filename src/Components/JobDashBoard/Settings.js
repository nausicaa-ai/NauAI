import React, { useEffect, useState } from 'react';
import M from 'materialize-css';

const Settings = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showXButton, setShowXButton] = useState(false);

  const handleOptionClick = (event, optionName) => {
    event.preventDefault();
    setSelectedOption(optionName);
    setShowXButton(true);
  };

  useEffect(() => {
    const elems = document.querySelectorAll('.dropdown-trigger');
    M.Dropdown.init(elems, {});
  }, []);

  return (
    <div style={{ display: 'inline-block', position: 'relative', top: '20px', right: '-30px' }}>
      <a
        className="dropdown-trigger btn"
        href="#"
        data-target="settings-dropdown"
      >
        {selectedOption || 'Select Template'}
      </a>
      {showXButton && (
        <span
          style={{
            cursor: 'pointer',
            marginLeft: '10px',
            position: 'absolute',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 1,
          }}
          onClick={(e) => {
            setSelectedOption(null);
            setShowXButton(false);
          }}
        >
          X
        </span>
      )}
      <ul id="settings-dropdown" className="dropdown-content">
        <li>
          <a href="#!" onClick={(e) => handleOptionClick(e, 'Option 1')}>
            Option 1
          </a>
        </li>
        <li>
          <a href="#!" onClick={(e) => handleOptionClick(e, 'Option 2')}>
            Option 2
          </a>
        </li>
        <li className="divider" tabIndex="-1"></li>
        <li>
          <a href="#!" onClick={(e) => handleOptionClick(e, 'Option 3')}>
            Option 3
          </a>
        </li>
        <li>
          <a href="#!" onClick={(e) => handleOptionClick(e, 'Option 4')}>
            <i className="material-icons">view_module</i>Option 4
          </a>
        </li>
        <li>
          <a href="#!" onClick={(e) => handleOptionClick(e, 'Option 5')}>
            <i className="material-icons">cloud</i>Option 5
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Settings;
