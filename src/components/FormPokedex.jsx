export function FormPokedex({ onSubmit, valueInput, onReset }) {
  return (
    <div className="pokemonForm">
      <label>Pokemon name:</label>
      <div>
        <input
          value={valueInput}
          onChange={(e) => {
            onSubmit(e.target.value);
          }}
          type="text"
          placeholder="insert name"
        />
        <button onClick={() => onSubmit(valueInput)}>search</button>
        <button onClick={onReset}> reset </button>
      </div>
    </div>
  );
}
