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

    const renderSelectedOptionContent = () => {
        switch (selectedOption) {
            case 'Front-End Engineer':
                return (
                    <>
                        <table className="responsive-table">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Job Title</th>
                                    <th>Scorecard Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Ron</td>
                                    <td>developer@email.com</td>
                                    <td>Sr. Front-End Engineer</td>
                                    <td>Submitted</td>
                                    <td>Done</td>
                                </tr>
                                <tr>
                                    <td>Thinh</td>
                                    <td>developer@email.com</td>
                                    <td>Design Engineer</td>
                                    <td>In-Review</td>
                                    <td><button>Submit</button></td>
                                </tr>
                                <tr>
                                    <td>Sean</td>
                                    <td>developer@email.com</td>
                                    <td>Jr. Software Engineer</td>
                                    <td>Not Submitted</td>
                                    <td>Invite</td>
                                </tr>
                            </tbody>
                        </table>
                        <div style={{ padding: '15px 0px' }}>
                            <button className="btn black">Invite Scorecard Members</button>
                        </div>
                        <div>
                            <h6>How many references per candidate?</h6>
                            <input type="number" name="references-input" min="0" style={{ width: '5%' }} />
                        </div>
                    </>
                );
            case 'Back-End Engineer':
                return <div>Hello Back-end enginer</div>
            default:
                return null;
        }
    };

    useEffect(() => {
        const elems = document.querySelectorAll('.dropdown-trigger');
        M.Dropdown.init(elems, {
            constrainWidth: false,
            hover: true,

        });
    }, []);

    return (
        <>
            <h4>Select a template.</h4>
            <div style={{ position: 'relative' }}>
                <a
                    className="dropdown-trigger btn"
                    href="#"
                    data-target="settings-dropdown"
                >
                    {selectedOption || 'Templates'}
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
                        <a href="#!" onClick={(e) => handleOptionClick(e, 'Front-End Engineer')}>
                            Front-End Engineer
                        </a>
                    </li>
                    <li>
                        <a href="#!" onClick={(e) => handleOptionClick(e, 'Back-End Engineer')}>
                            Back-End Engineer
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
            {renderSelectedOptionContent()}
        </>
    );
};

export default Settings;
