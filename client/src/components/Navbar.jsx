import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-neutral-700 flex justify-between px-20 py-4">
      <Link to="/" className="text-white font-bold">
        <h1>React MySQL</h1>
      </Link>

      <ul className="flex gap-x-3">
        <li>
          <Link to="/" className="bg-slate-200 px-2 py-1 rounded-sm">
            Home
          </Link>
        </li>
        <li>
          <Link to="/new" className="bg-teal-200 px-2 py-1 rounded-sm">
            Create task
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
