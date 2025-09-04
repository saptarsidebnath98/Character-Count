import { useEffect, useState } from "react";

function CharacterCount() {
  const [input, setInput] = useState("");
  const [count, setCount] = useState(0);
  const [limit, setLimit] = useState(10);
  const [warning, setWarning] = useState(null);
  const [error, setError] = useState(null);

  function handleChange(e) {
    const value = e.target.value;
    setInput(value);
    setCount(value.length);
  }

  useEffect(() => {
    if (count >= Math.floor((limit * 9) / 10) && count <= limit) {
      setError(null);
      setWarning("You are close to the limit!");
    } else if (count > limit) {
      setWarning(null);
      setError(`Limit exceeded by ${count - limit} characters`);
    } else {
      setWarning(null);
      setError(null);
    }
  }, [input]);

  return (
    <div className="characterCount">
      <h1>Character Count</h1>
      <p>Track your input length with live character warnings.</p>

      <div className="container">
        <div className="inputs">
          <label>
            Max length:
            <input
              type="number"
              min="0"
              max="1000"
              data-testid="maxlength"
              value={limit}
              onChange={(e) => setLimit(e.target.value)}
            />
          </label>
        </div>
        <textarea
          className="text"
          placeholder="Start Typing"
          data-testid="textarea"
          value={input}
          onChange={handleChange}
        ></textarea>

        <div className="char-info" data-testid="char-info">
          {/*Example 5/50 */}
          {input.length} / {limit}
        </div>

        <div className="warnings">
          {/* Shows Warning if it reaches to 90% */}
          {warning && (
            <p className="warning-text" data-testid="warning-text">
              {warning}
            </p>
          )}

          {/* Shows Overlimit message if limit is exceeded*/}
          {error && (
            <p className="error-message" data-testid="error-text">
              {error}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
export default CharacterCount;
