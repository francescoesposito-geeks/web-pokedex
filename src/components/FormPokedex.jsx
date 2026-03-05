import { useRef } from "react";

export function FormPokedex() {
  const inputRef = useRef();

  return (
    <div className="pokemonForm">
      <label>Pokemon name:</label>
      <div>
        <input ref={inputRef} type="text" placeholder="insert name" />
        <button>search</button>
      </div>
    </div>
  );
}
