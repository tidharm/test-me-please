import React, { useState } from 'react';

// Define types for our component
interface CalculationResult {
  result?: string;
  error?: string;
  details?: string;
}

const Calculator: React.FC = () => {
  // State for input values
  const [num1, setNum1] = useState<string>('');
  const [num2, setNum2] = useState<string>('');
  const [operator, setOperator] = useState<string>('+');
  const [result, setResult] = useState<CalculationResult | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  // Handle calculation
  const handleCalculate = async () => {
    // Validate inputs
    if (!num1 || !num2) {
      setResult({ error: 'Please enter both numbers' });
      return;
    }

    try {
      setLoading(true);
      
      // Call the backend API
      const response = await fetch('http://localhost:3001/api/calculate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ num1, num2, operator }),
      });

      const data = await response.json();
      
      if (!response.ok) {
        setResult({ error: data.error, details: data.details });
      } else {
        setResult({ result: data.result });
      }
    } catch (error) {
      setResult({ 
        error: 'Failed to calculate', 
        details: error instanceof Error ? error.message : 'Unknown error' 
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="calculator">
      <div className="calculator-inputs">
        <div className="input-group">
          <label htmlFor="num1">First Number:</label>
          <input
            id="num1"
            type="text"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
            placeholder="Enter first number"
          />
        </div>
        
        <div className="input-group">
          <label htmlFor="operator">Operator:</label>
          <select
            id="operator"
            value={operator}
            onChange={(e) => setOperator(e.target.value)}
          >
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">×</option>
            <option value="/">÷</option>
          </select>
        </div>
        
        <div className="input-group">
          <label htmlFor="num2">Second Number:</label>
          <input
            id="num2"
            type="text"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
            placeholder="Enter second number"
          />
        </div>
      </div>
      
      <button onClick={handleCalculate} disabled={loading}>
        {loading ? 'Calculating...' : 'Calculate'}
      </button>
      
      {result && (
        <div className={`result ${result.error ? 'error' : ''}`}>
          <h3>{result.error ? 'Error' : 'Result'}</h3>
          {result.error ? (
            <>
              <p>{result.error}</p>
              {result.details && <pre>{result.details}</pre>}
            </>
          ) : (
            <p>Result: <strong>{result.result}</strong></p>
          )}
        </div>
      )}
    </div>
  );
};

export default Calculator; 