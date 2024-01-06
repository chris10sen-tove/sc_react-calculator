import React, { useState, useEffect, useCallback } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [focusedButton, setFocusedButton] = useState(null);

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
    if (
      (e.key >= '0' && e.key <= '9') ||
      ['+', '-', '*', '/', '=', '.', 'C'].includes(e.key)
    ) {
      handleClick(e.key);
    } else if (e.key === 'Backspace' || e.key === 'Delete') {
      setInput((prevInput) => prevInput.slice(0, -1));
    } else if (e.key.toLowerCase() === 'c') {
      setInput('');
      setResult('');
    }
  }, [handleClick]);

  const handleButtonFocus = useCallback((value) => {
    setFocusedButton(value);
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);  
  
  return (
    <div className="calculator">
      <h1>Calculator</h1>
      <input type="text" value={input} readOnly aria-label="Calculator Input" />
      <div className="buttons">
        <button
        tabIndex="0"
        onClick={() => handleClick('1')}
        onFocus={() => handleButtonFocus('1')}
        className={focusedButton === '1' ? 'focused' : ''}
        >
          1
        </button>
        <button
        tabIndex="0"
        onClick={() => handleClick('2')}
        onFocus={() => handleButtonFocus('2')}
        className={focusedButton === '2' ? 'focused' : ''}
        >
          2
        </button>
        <button
        tabIndex="0"
        onClick={() => handleClick('3')}
        onFocus={() => handleButtonFocus('3')}
        className={focusedButton === '3' ? 'focused' : ''}
        >
          3
        </button>
        <button
        tabIndex="0"
        onClick={() => handleClick('+')}
        onFocus={() => handleButtonFocus('+')}
        className={focusedButton === '+' ? 'focused' : ''}
        >
          +
        </button>
        <button
        tabIndex="0"
        onClick={() => handleClick('4')}
        onFocus={() => handleButtonFocus('4')}
        className={focusedButton === '4' ? 'focused' : ''}
        >
          4
        </button>
        <button
        tabIndex="0"
        onClick={() => handleClick('5')}
        onFocus={() => handleButtonFocus('5')}
        className={focusedButton === '5' ? 'focused' : ''}
        >
          5
        </button>
        <button
        tabIndex="0"
        onClick={() => handleClick('6')}
        onFocus={() => handleButtonFocus('6')}
        className={focusedButton === '6' ? 'focused' : ''}
        >
          6
        </button>
        <button
        tabIndex="0"
        label="Subtract"
        onClick={() => handleClick('-')}
        onFocus={() => handleButtonFocus('-')}
        className={focusedButton === '-' ? 'focused' : ''}
        >
          -
        </button>
        <button
        tabIndex="0"
        onClick={() => handleClick('7')}
        onFocus={() => handleButtonFocus('7')}
        className={focusedButton === '7' ? 'focused' : ''}
        >
          7
        </button> 
        <button
        tabIndex="0"
        onClick={() => handleClick('8')}
        onFocus={() => handleButtonFocus('8')}
        className={focusedButton === '8' ? 'focused' : ''}
        >
          8
        </button>   
        <button
        tabIndex="0"
        onClick={() => handleClick('9')}
        onFocus={() => handleButtonFocus('9')}
        className={focusedButton === '9' ? 'focused' : ''}
        >
          9
        </button> 
        <button
        tabIndex="0"
        label="Multiply"
        onClick={() => handleClick('*')}
        onFocus={() => handleButtonFocus('*')}
        className={focusedButton === '*' ? 'focused' : ''}
        >
          *
        </button>
        <button
        tabIndex="0"
        onClick={() => handleClick('0')}
        onFocus={() => handleButtonFocus('0')}
        className={focusedButton === '0' ? 'focused' : ''}
        >
          0
        </button>
        <button
        tabIndex="0"
        onClick={() => handleClick('.')}
        onFocus={() => handleButtonFocus('.')}
        className={focusedButton === '.' ? 'focused' : ''}
        >
          .
        </button>
        <button
        tabIndex="0"
        label="Divide"
        onClick={() => handleClick('/')}
        onFocus={() => handleButtonFocus('/')}
        className={focusedButton === '/' ? 'focused' : ''}
        >
          /
        </button> 
        <button
        tabIndex="0"
        onClick={() => handleClick('=')}
        onFocus={() => handleButtonFocus('=')}
        className={focusedButton === '=' ? 'focused' : ''}
        >
          =
        </button>
        <button
        tabIndex="0"
        label="Reset"
        onClick={() => handleClick('C')}
        onFocus={() => handleButtonFocus('C')}
        className={focusedButton === 'C' ? 'focused' : ''}
        >
          C
        </button>
      </div>
      <div className="result" aria-live="assertive" aria-atomic="true" role="status">
        {result}
      </div>
    </div>
  );
}

export default App;