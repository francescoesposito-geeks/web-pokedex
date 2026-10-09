export function FormPokedex({ onSubmit, valueInput, onReset }) {
  return (
    <div className="pokemonForm" role="search">
      <label className="labelForm" htmlFor="pokemon-search">
        Search by name or number
      </label>
      <div className="inputAndBottonForm">
        <input
          id="pokemon-search"
          className="inputForm"
          value={valueInput}
          onChange={(e) => onSubmit(e.target.value)}
          type="search"
          placeholder="e.g. pikachu or 25"
          autoComplete="off"
        />
        <button
          type="button"
          className="formBotton"
          onClick={onReset}
          disabled={valueInput === ""}
        >
          Clear
        </button>
      </div>
    </div>
  );
}
