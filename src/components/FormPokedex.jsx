import { useRef } from "react";

export function FormPokedex({ onSubmit }) {
  const inputRef = useRef();

  return (
    <div className="pokemonForm">
      <label>Pokemon name:</label>
      <div>
        <input ref={inputRef} type="text" placeholder="insert name" />
        <button onClick={onSubmit}>search</button>
      </div>
    </div>
  );
}
