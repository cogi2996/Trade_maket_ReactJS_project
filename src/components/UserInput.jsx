export default function UserInput({ userInput, onChange }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            required
            onChange={(e) => onChange("initialInvestment", +e.target.value)}
            value={userInput.initialInvestment}
          ></input>
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            required
            onChange={(e) => onChange("annualInvestment", +e.target.value)}
            value={userInput.annualInvestment}
          ></input>
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            required
            onChange={(e) => onChange("expectedReturn", +e.target.value)}
            value={userInput.expectedReturn}
          ></input>
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            required
            onChange={(e) => onChange("duration", +e.target.value)}
            value={userInput.duration}
          ></input>
        </p>
      </div>
    </section>
  );
}
