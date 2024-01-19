import React, { useState, useEffect } from 'react';
import './glitcht.css'


const GlitchText = ({ text }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
  const glitchTimePerLetter = 100

  useEffect(() => {
    if (currentLetterIndex < text.length) {
      const timer = setTimeout(() => {
        const nextLetterIndex = currentLetterIndex + 1;
        const nextChar = text[currentLetterIndex] !== ' ' ? randomChar() : ' ';
        setCurrentText(text.substr(0, currentLetterIndex) + nextChar);
        setCurrentLetterIndex(nextLetterIndex);
      }, glitchTimePerLetter);

      return () => clearTimeout(timer);
    } else {
      setCurrentText(text);
    }
  }, [text, currentLetterIndex]);

  function randomChar() {
    const charCode = 65 + Math.floor(Math.random() * 58);
    return String.fromCharCode(charCode);
  }

  return <h1 className="glitch">{currentText}</h1>;
};

export default GlitchText;
