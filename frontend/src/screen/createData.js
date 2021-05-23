import React from "react";
import { Link } from "react-router-dom";

export default function CreateData() {
  return (
    <div className="row h-100">
      {/* <Link to="/createPubgMap">Create Pubg Map</Link> */}
      <ul className="menuCreate">
        <li>
          <Link to="/CreateLolChamp">PŘIDAT LOL ŠAMPIONA</Link>
        </li>
        <li>
          <Link to="/createValorantChamp">PŘIDAT VALORANT ŠAMPIONA</Link>
        </li>
      </ul>
    </div>
  );
}
