import './App.css';
import { useState } from 'react';
function App() {
  const [number, setNumber] = useState('');
      const [isArmstrong, setIsArmstrong] = useState(false);
  
      const checkArmstrong = () => {
          const num = parseInt(number);
          const digits = num.toString().split('').map(Number);
          const power = digits.length;
          const sum = digits.reduce((acc, digit) => acc + Math.pow(digit, power), 0);
          setIsArmstrong(sum === num);
      };
  
      return (
          <div>
              <h2>Armstrong Number Checker</h2>
              <input
                  type="number"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
              />
              <button onClick={checkArmstrong}>Check</button>
              {isArmstrong !== null && (
                  <p>
                      {isArmstrong ? `${number} is Armstrong number` : `${number} not an Armstrong number`}
                  </p>
              )}
          </div>
      );
}

export default App;
