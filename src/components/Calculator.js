function Calculator() {
  return (
    <div className="calculator">
      <h2>Calculator</h2>

      <input type="text" readOnly />

      <div className="keypad">
        <button name="+">+</button>
        <button name="7">7</button>
        <button name="8">8</button>
        <button name="9">9</button>
        <button name="-">-</button>
        <button name="4">4</button>
        <button name="5">5</button>
        <button name="6">6</button>
        <button name="*">x</button>
        <button name="1">1</button>
        <button name="2">2</button>
        <button name="3">3</button>
        <button name="/">÷</button>
        <button name="0">0</button>
        <button className="highlight" name="AC">
          AC
        </button>
        <button className="highlight">=</button>
      </div>
    </div>
  );
}

export default Calculator;
