import { Link } from "react-router";
import { PATHS } from "../routes/paths.jsx";

export function NotFound() {
  return (
    <header className="pageHeader">
      <h1>Page not found</h1>
      <p className="pageIntro">
        This address does not exist.{" "}
        <Link to={PATHS.HOME}>Go to the Pokédex</Link>
      </p>
    </header>
  );
}
