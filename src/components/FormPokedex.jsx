export function FormPokedex({ onSubmit, valueInput, onReset }) {
  return (
    <div className="pokemonForm">
      <label className="labelForm">Pokemon name:</label>
      <div className="inputAndBottonForm">
        <input
          className="inputForm"
          value={valueInput}
          onChange={(e) => {
            onSubmit(e.target.value);
          }}
          type="text"
          placeholder="insert name"
        />
        <button className="formBotton" onClick={onReset}>
          reset
        </button>
      </div>
    </div>
  );
}
