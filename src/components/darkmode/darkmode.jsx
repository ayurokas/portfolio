import React, { useEffect } from 'react';
import useDarkMode from 'use-dark-mode';
import "./darkmode.css"

const DarkModeToggle = () => {
    const darkMode = useDarkMode(false);

    useEffect(() => {
        const body = document.body;
        if (darkMode.value) {
            body.classList.add("dark-mode");
        } else {
            body.classList.remove("dark-mode");
        }
    }, [darkMode.value]);

    const toggleDarkMode = () => {
        if (darkMode.value) {
            darkMode.disable();
        } else {
            darkMode.enable();
        }
    };

    return (
        <div className="dark-mode-toggle">
            <h2>Toggle Switch</h2>
            <label className="switch">
                <input type="checkbox" onChange={toggleDarkMode} checked={darkMode.value} />
                <span className="slider"></span>
            </label>
        </div>
    );
};

export default DarkModeToggle;
