import React from 'react';
import useDarkMode from 'use-dark-mode';
import "./darkmode.css"
import normalModeImage from '../../assets/pod1.png';
import darkModeImage from '../../assets/pod2.png'

const DarkModeToggle = () => {
    const darkMode = useDarkMode(false);

    return (
        <div className="dark-mode-toggle">
            <div className="image-container left">
                {!darkMode.value && (
                    <img
                        src={normalModeImage}
                        alt="Normal Mode Visual"
                    />
                )}
            </div>

            <div className="toggle-container">
                <label className="switch">
                    <input type="checkbox" onChange={darkMode.toggle} checked={darkMode.value} />
                    <span className="slider"></span>
                </label>
            </div>

            <div className="image-container right">
                {darkMode.value && (
                    <img
                        src={darkModeImage}
                        alt="Dark Mode Visual"
                    />
                )}
            </div>
        </div>
    );
};

export default DarkModeToggle;