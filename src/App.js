import React, { useState, useEffect, useCallback } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = useCallback((value) => {
    if (value === '=') {
      try {
        // eslint-disable-next-line
        setResult(eval(input).toString());
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setInput('');
      setResult('');
    } else {
      setInput((prevInput) => prevInput + value);
    }
  }, [input]);

  const handleKeyDown = useCallback((e) => {
    if ((e.key >= '0' && e.key <= '9') || ['+', '-', '*', '/', '=', '.', 'C'].includes(e.key)) {
      handleClick(e.key);
    }
  }, [handleClick]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);  
  
  return (
    <div className="calculator">
      <h1>Calculator</h1>
      <input type="text" value={input} readOnly label="Calculator Input" />
      <div className="buttons">
        <button tabIndex="0" onClick={() => handleClick('1')}>1</button>
        <button tabIndex="0" onClick={() => handleClick('2')}>2</button>
        <button tabIndex="0" onClick={() => handleClick('3')}>3</button>
        <button tabIndex="0" onClick={() => handleClick('+')}>+</button>
        <button tabIndex="0" onClick={() => handleClick('4')}>4</button>
        <button tabIndex="0" onClick={() => handleClick('5')}>5</button>
        <button tabIndex="0" onClick={() => handleClick('6')}>6</button>
        <button tabIndex="0" label="Subtract" onClick={() => handleClick('-')}>-</button>
        <button tabIndex="0" onClick={() => handleClick('7')}>7</button>
        <button tabIndex="0" onClick={() => handleClick('8')}>8</button>
        <button tabIndex="0" onClick={() => handleClick('9')}>9</button>
        <button tabIndex="0" label="Multiply" onClick={() => handleClick('*')}>*</button>
        <button tabIndex="0" onClick={() => handleClick('0')}>0</button>
        <button tabIndex="0" onClick={() => handleClick('.')}>.</button>
        <button tabIndex="0" label="Divide" onClick={() => handleClick('/')}>/</button>
        <button tabIndex="0" onClick={() => handleClick('=')}>=</button>
        <button tabIndex="0" label="Reset" onClick={() => handleClick('C')}>C</button>
      </div>
      <div className="result" aria-live="assertive" aria-atomic="true" role="status">
        {result}
      </div>
    </div>
  );
}

export default App;